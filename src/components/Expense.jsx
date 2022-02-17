
import { formatDate } from "../helpers";

const Expense = ({ expense }) => {

    const { category, name, quantity, id, date } = expense

  return (
    <div className="expense shadow">
        <div className="expense-content">
            <div className="expense-description">
                <p className="category">{ category }</p>
                <p className="expense-name">{ name }</p>
                <p className="expense-date">Added on: {''} <span>{ formatDate(date) }</span></p>
            </div>
        </div>
        <p className="expense-quantity">${ quantity }</p>
    </div>
  );
}

export default Expense;
