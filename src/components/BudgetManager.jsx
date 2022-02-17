
const BudgetManager = ({ budget }) => {

    const formatBudget = quantity => {
        return quantity.toLocaleString('en-UK', {
            style:'currency',
            currency: 'EUR'
        })
    }

  return (
    <div className="budget-container container shadow two-cols">
        <div>
            <p>graph</p>
        </div>
        <div className="budget-content">
            <p>
                <span>Budget: </span> { formatBudget(budget) }
            </p>
            <p>
                <span>Available: </span> { formatBudget(0) }
            </p>
            <p>
                <span>Spent: </span> { formatBudget(0) }
            </p>
        </div>
    </div>
  );
}

export default BudgetManager;
