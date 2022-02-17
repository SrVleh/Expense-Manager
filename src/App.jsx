import { useState } from 'react'

import Header from './components/Header'

import IconNewExpense from './img/new-expense.svg'


function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(0)

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
          <img src={ IconNewExpense } alt="icon new expense" />
        </div>
      )}
    </div>
  )
}

export default App
