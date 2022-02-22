import React from 'react';
import BudgetManager from './BudgetManager';
import NewBudget from './NewBudget';

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, expenses, setExpenses}) => {
  return (
    <header>
        <h1>Expense Manager</h1>
        {isValidBudget ? 
        (<BudgetManager
          expenses = { expenses }
          setExpenses = { setExpenses }
          setIsValidBudget = { setIsValidBudget }
          budget = { budget }
          setBudget = { setBudget }
        />) : 
        (<NewBudget
          budget = { budget } 
          setBudget = { setBudget }
          setIsValidBudget = { setIsValidBudget }
      />)}
    </header>
  );
}

export default Header;
