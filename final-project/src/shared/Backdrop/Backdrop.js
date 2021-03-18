import React from 'react';
import './backdrop.css';

const Backdrop = (props) => {
    const {onClick} = props;

    return(
        <div className='backdrop' onClick={onClick}/>
    )
}

export default Backdrop;