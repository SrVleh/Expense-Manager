import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetManager = ({ expenses, budget }) => {

    const [ percentage, setPersentage ] = useState(0)
    const [ available, setAvailable ] = useState(0)
    const [ spent, setSpent ] = useState(0)

    useEffect (() => {
        const totalSpent = expenses.reduce( (total, expense) => expense.quantity + total, 0)

        const totalAvailable = budget - totalSpent

        // Calculate spended percentage
        const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2)

        setTimeout(() => {
            setPersentage(newPercentage)
        }, 1000)

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
                styles={buildStyles({
                    pathColor: '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: '#3B82F6'
                })}
                value={percentage}
                text={`${percentage}% Spent`}
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
