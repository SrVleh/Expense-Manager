import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetManager = ({ expenses, budget, setExpenses, setBudget, setIsValidBudget }) => {

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
        }, 600)

        setAvailable(totalAvailable)
        setSpent(totalSpent)
    }, [expenses])

    const formatBudget = quantity => {
        return quantity.toLocaleString('en-UK', {
            style:'currency',
            currency: 'EUR'
        })
    }

    const handleResetApp = () => {
        const result = confirm('Do you want to reset the budget and expenses?')

        if(result) {
            setExpenses([])
            setBudget(0)
            setIsValidBudget(false)
        }
    }
 
  return (
    <div className="budget-container container shadow two-cols">
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: percentage > 100 ? '#FF475A' : '#4075DD',
                    trailColor: '#F5F5F5',
                    textColor: percentage > 100 ? '#FF475A' : '#4075DD'
                })}
                value={percentage}
                text={`${percentage}% Spent`}
            />
        </div>
        <div className="budget-content">

            <button 
                className="reset-app" 
                type="button"
                onClick={ handleResetApp }>
                Reset app
            </button>

            <p>
                <span>Budget: </span> { formatBudget(budget) }
            </p>
            <p className={ `${ available < 0 ? 'negative' : '' }` }>
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
