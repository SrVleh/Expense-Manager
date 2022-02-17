import { useState } from 'react'

import Header from './components/Header'
import Modal from './components/Modal'
import { genID } from './helpers'

import IconNewExpense from './img/new-expense.svg'


function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animModal, setAnimModal] = useState(false)

  const [expenses, setExpenses] = useState([])

  const handleNewExpense = () => {
    setModal(true)
    setTimeout(() => {
        setAnimModal(true)
    }, 500) 
  }

  const saveExpense = expense => {
      expense.id = genID()
      setExpenses([...expenses, expense])

      setTimeout(() => {
        setModal(false)
    }, 500)
  }

  return (
    <div>
      <Header
        budget = { budget } 
        setBudget = { setBudget }
        isValidBudget = { isValidBudget }
        setIsValidBudget = { setIsValidBudget }
      />
      {isValidBudget && (
        <div className='new-expense'>
          <img 
            src={ IconNewExpense } 
            alt="icon new expense"
            onClick={ handleNewExpense } />
        </div>
      )}

      { modal && <Modal 
                    setModal = { setModal } 
                    animModal = { animModal }
                    setAnimModal = { setAnimModal } 
                    saveExpense = { saveExpense }/> }
    </div>
  )
}

export default App
