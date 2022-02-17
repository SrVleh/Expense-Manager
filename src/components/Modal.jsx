
import CloseModal from '../img/close.svg'

const Modal = ({ setModal, animModal, setAnimModal }) => {

    const closeModal = () => {
        setAnimModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }

  return (
    <div className="modal">
        <div className="close-modal">
            <img 
                src={ CloseModal } 
                alt="close modal" 
                onClick={ closeModal } />
        </div>

        <form className={`form ${ animModal ? 'anim' : 'close' }`}>
            <legend>New Expense</legend>
            <div className='field'>
                <label htmlFor="name">Expense Name</label>
                <input 
                    id='name'
                    type='text'
                    placeholder='Add the expense name' />
            </div>
            <div className='field'>
                <label htmlFor="quantity">Quantity</label>
                <input 
                    id='quantity'
                    type='number'
                    placeholder='Add expense quantity: ex. 400' />
            </div>
            <div className='field'>
                <label htmlFor="category">Category</label>
                <select 
                    id="category" >
                        <option value="">-- Select --</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="leisure">Leisur</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                        <option value="other">Other</option>
                </select>
            </div>

            <input type="submit" value='Add expense' />
        </form>
    </div>
  );
}

export default Modal;
