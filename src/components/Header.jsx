import React from 'react';
import BudgetManager from './BudgetManager';
import NewBudget from './NewBudget';

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, expenses }) => {
  return (
    <header>
        <h1>Expense Manager</h1>
        {isValidBudget ? 
        (<BudgetManager
          expenses = { expenses }
          budget = { budget }
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
