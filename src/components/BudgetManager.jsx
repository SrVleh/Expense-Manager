import { useState, useEffect } from "react";
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetManager = ({ expenses, budget }) => {

    const [ available, setAvailable ] = useState(0)
    const [ spent, setSpent ] = useState(0)

    useEffect (() => {
        const totalSpent = expenses.reduce( (total, expense) => expense.quantity + total, 0)

        const totalAvailable = budget - totalSpent

        setAvailable(totalAvailable)
        setSpent(totalSpent)
    }, [expenses])

    const formatBudget = quantity => {
        return quantity.toLocaleString('en-UK', {
            style:'currency',
            currency: 'EUR'
        })
    }

  return (
    <div className="budget-container container shadow two-cols">
        <div>
            <CircularProgressbar
                value={50}
            />
        </div>
        <div className="budget-content">
            <p>
                <span>Budget: </span> { formatBudget(budget) }
            </p>
            <p>
                <span>Available: </span> { formatBudget(available) }
            </p>
            <p>
                <span>Spent: </span> { formatBudget(spent) }
            </p>
        </div>
    </div>
  );
}

export default BudgetManager;
