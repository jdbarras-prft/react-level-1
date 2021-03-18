import React from 'react';
import Button from '../../shared/Button';
import './toolbar.css';

const Toolbar = (props) => {
    const {total, setTotal} = props;

    return(
        <div className='toolbar'>
            <Button
                btnText='Clear Cart'
                onClick={()=>setTotal(0)}
            />
            <div className='toolbar_total-label'>
                Total:
                <label className='toolbar_total-price'>{` $${total.toFixed(2)}`}</label>
            </div>
        </div>
    )
}

export default Toolbar;