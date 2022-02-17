
const BudgetManager = ({ budget }) => {
  return (
    <div className="budget-container container shadow two-cols">
        <div>
            <p>graph</p>
        </div>
        <div className="budget-content">
            <p>
                <span>Budget: </span> €{ budget }
            </p>
        </div>
    </div>
  );
}

export default BudgetManager;
