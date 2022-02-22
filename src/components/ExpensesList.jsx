
import Expense from "./Expense";

const ExpensesList = ({ expenses, setExpenseEdit }) => {
  return (
    <div className="expenses-list container">
        <h2>{ expenses.length ? 'Expenses' : 'There are no expenses yet'}</h2>
        {expenses.map( expense => (
            <Expense
                key = { expense.id }
                expense = { expense }
                setExpenseEdit = { setExpenseEdit }
            />
        ))}
    </div>
  );
}

export default ExpensesList;
