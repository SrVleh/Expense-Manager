import React from 'react';

const NewBudget = () => {
  return (
    <div className='budget-container container shadow'>
        <form className='form'>
            <div className='field'>
                <label>Set Budget</label>
                <input 
                    className='new-budget'
                    type="text" 
                    placeholder='Add your budget'
                />
            </div>


            <input type="submit" value="Add"/>
        </form>
    </div>
  );
}

export default NewBudget;
