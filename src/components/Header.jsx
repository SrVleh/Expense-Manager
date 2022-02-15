import React from 'react';
import NewBudget from './NewBudget';

const Header = () => {
  return (
    <header>
        <h1>Expense Manager</h1>

        <NewBudget/>
    </header>
  );
}

export default Header;
