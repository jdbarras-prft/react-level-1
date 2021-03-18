import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './modal.css';

const Modal = (props) => {
    const {children, onClose} = props;

    return(
        <React.Fragment>
            <div className='modal'>
                {children}
            </div>
            <Backdrop onClick={onClose}/>
        </React.Fragment>
    )
}

export default Modal;