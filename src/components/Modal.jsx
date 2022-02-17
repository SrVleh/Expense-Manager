
import CloseModal from '../img/close.svg'

const Modal = ({ setModal }) => {

    const closeModal = () => {
        setModal(false)
    }

  return (
    <div className="modal">
        <div className="close-modal">
            <img 
                src={ CloseModal } 
                alt="close modal" 
                onClick={ closeModal } />
        </div>
    </div>
  );
}

export default Modal;
