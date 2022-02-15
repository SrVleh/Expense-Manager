import { useState } from "react"
import Message from "./Message"


const NewBudget = ({ budget, setBudget }) => {

    const [ msg, setMsg ] = useState('')

    const handleBudget = (e) => {
        e.preventDefault()

        if(!Number(budget) || Number(budget) < 0){
            setMsg("Invalid budget!")
        }else {
            console.log("Correct")
        }
    }

    return (
        <div className='budget-container container shadow'>
            <form onSubmit={ handleBudget } className='form'>
                <div className='field'>
                    <label>Set Budget</label>
                    <input 
                        className='new-budget'
                        type="text" 
                        placeholder='Add your budget'
                        value={ budget }
                        onChange={ (e) =>  setBudget(e.target.value) }
                    />
                </div>

                <input type="submit" value="Add"/>

                { msg && <Message type="error">{ msg }</Message>}
            </form>
        </div>
    );
}

export default NewBudget;
