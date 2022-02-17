import { useState } from 'react'

import Header from './components/Header'
import Modal from './components/Modal'

import IconNewExpense from './img/new-expense.svg'


function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(0)

  const [modal, setModal] = useState(false)
  const [animModal, setAnimModal] = useState(false)

  const handleNewExpense = () => {
    setModal(true)
    setTimeout(() => {
        setAnimModal(true)
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
                    setAnimModal = { setAnimModal } /> }
    </div>
  )
}

export default App
