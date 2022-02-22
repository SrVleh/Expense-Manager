
import { string } from "prop-types";
import Expense from "./Expense";

const ExpensesList = ({ expenses, setExpenseEdit, deleteExpense, filter, filteredExpenses }) => {
  return (
    <div className="expenses-list container">
        {
          filter ? (
            <>
              <h2>{ filteredExpenses.length ? `${ filter.charAt(0).toUpperCase() + filter.slice(1) } expenses` : `There are no expenses on ${ filter }`}</h2>
              {filteredExpenses.map( expense => (
                <Expense
                    key = { expense.id }
                    expense = { expense }
                    setExpenseEdit = { setExpenseEdit }
                    deleteExpense = { deleteExpense } 
                />
              ))}
            </>
          ) : (
            <>
              <h2>{ expenses.length ? 'Expenses' : 'There are no expenses yet'}</h2>
              {expenses.map( expense => (
                <Expense
                    key = { expense.id }
                    expense = { expense }
                    setExpenseEdit = { setExpenseEdit }
                    deleteExpense = { deleteExpense } 
                />
              ))}
            </>
          )
        }
    </div>
  );
}

export default ExpensesList;
