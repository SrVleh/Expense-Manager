import { useState } from "react"
import Message from "./Message"


const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {

    const [ msg, setMsg ] = useState('')

    const handleBudget = (e) => {
        e.preventDefault()

        if(!budget || budget < 0){
            setMsg("Invalid budget!")
            return
        }
        setMsg('')
        setIsValidBudget(true)

    }

    return (
        <div className='budget-container container shadow'>
            <form onSubmit={ handleBudget } className='form'>
                <div className='field'>
                    <label>Set Budget</label>
                    <input 
                        className='new-budget'
                        type="number" 
                        placeholder='Add your budget'
                        value={ budget }
                        onChange={ (e) =>  setBudget(Number(e.target.value)) }
                    />
                </div>

                <input type="submit" value="Add"/>

                { msg && <Message type="error">{ msg }</Message>}
            </form>
        </div>
    );
}

export default NewBudget;
