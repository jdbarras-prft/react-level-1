import React from 'react';
import './button.css';

const Button = (props) => {
    const {btnText, onClick, disabled} = props;

    return(
        <button disabled={disabled} className='btn' onClick={onClick}>
            {btnText}
        </button>
    )
}

export default Button;