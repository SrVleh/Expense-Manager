import { useState, useEffect } from 'react'

import Header from './components/Header'
import Modal from './components/Modal'
import ExpensesList from './components/ExpensesList'
import { genID } from './helpers'

import IconNewExpense from './img/new-expense.svg'


function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animModal, setAnimModal] = useState(false)

  const [expenses, setExpenses] = useState([])

  const [expenseEdit, setExpenseEdit] = useState({})

  useEffect(() => {
    if(Object.keys(expenseEdit).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimModal(true)
      }, 500) 
    }
  }, [expenseEdit])

  const handleNewExpense = () => {
    setModal(true)
    setExpenseEdit({})
    setTimeout(() => {
        setAnimModal(true)
    }, 500) 
  }

  const saveExpense = expense => {
      expense.id = genID()
      expense.date = Date.now()
      setExpenses([...expenses, expense])

      setTimeout(() => {
        setModal(false)
    }, 500)
  }

  return (
    <div className={ modal ? 'block' : '' }>
      <Header
        expenses = { expenses }
        budget = { budget } 
        setBudget = { setBudget }
        isValidBudget = { isValidBudget }
        setIsValidBudget = { setIsValidBudget }
      />
      {isValidBudget && (
        <>
          <main>
            <ExpensesList
              expenses = { expenses }
              setExpenseEdit = { setExpenseEdit }
            />
          </main>
          <div className='new-expense'>
            <img 
              src={ IconNewExpense } 
              alt="icon new expense"
              onClick={ handleNewExpense } />
        </div>
        </>
      )}

      { modal && <Modal 
                    setModal = { setModal } 
                    animModal = { animModal }
                    setAnimModal = { setAnimModal } 
                    saveExpense = { saveExpense }
                    expenseEdit = { expenseEdit } 
                    />}
    </div>
  )
}

export default App
