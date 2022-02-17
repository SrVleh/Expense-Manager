
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
        </form>
    </div>
  );
}

export default Modal;
