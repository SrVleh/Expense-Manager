
const Expense = ({ expense }) => {

    const { category, name, quantity, id } = expense

  return (
    <div className="expense shadow">
        <div className="expense-content">
            <div className="expense-description">
                <p className="category">{ category }</p>
                <p className="expense-name">{ name }</p>
            </div>
        </div>
    </div>
  );
}

export default Expense;
