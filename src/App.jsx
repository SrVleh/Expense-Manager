import { useState, useEffect } from 'react'

import Header from './components/Header'
import Modal from './components/Modal'
import ExpensesList from './components/ExpensesList'
import { genID } from './helpers'

import IconNewExpense from './img/new-expense.svg'


function App() {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )
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

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0
    if(budgetLS > 0) {
      setIsValidBudget(true)
    }
  }, [])

  const handleNewExpense = () => {
    setModal(true)
    setExpenseEdit({})
    setTimeout(() => {
        setAnimModal(true)
    }, 500) 
  }

  const saveExpense = expense => {
      if(expense.id) {
          //Update
          const updatedExpenses = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState)
          setExpenses(updatedExpenses)
          setExpenseEdit({})
      }else {
        expense.id = genID()
        expense.date = Date.now()
        setExpenses([...expenses, expense])
      }

      setTimeout(() => {
        setModal(false)
    }, 500)
  }

  const deleteExpense = id => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(updatedExpenses)
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
              deleteExpense = { deleteExpense }
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
                    setExpenseEdit = { setExpenseEdit }
                    />}
    </div>
  )
}

export default App
