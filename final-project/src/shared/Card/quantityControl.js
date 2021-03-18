import React from 'react';

const QuantityControl = (props) => {
    const {
        value, 
        onChangeHandler,
        maxValue,
        minValue,
    } = props;

    const onAddHandler = () => {
        onChangeHandler(value+1)
    }

    const onRemoveHandler = () => {
        if(value<=minValue){
            onChangeHandler(0)
        }else{
            onChangeHandler(value-1)
        }
    }

    const onInputChangeHandler = (e) => {
        const value = e.target.value;
        if(value!==''){
            if(value>=maxValue){
                onChangeHandler(maxValue)
            }else if(value<=minValue){
                onChangeHandler(minValue)
            }else{
                onChangeHandler(value)
            }
        }else{
            onChangeHandler(value)
        }
    }

    return (
        <div className='card_quantity-wrapper'>
            <input 
                value={value}
                className='card_quantity-input'
                onChange={onInputChangeHandler}
                type='number'
                max={maxValue}
                min={minValue}
            />
            <div>
                <button 
                    className={['card_quantity-btn', value>=maxValue?'card_btn--inactive':'card_btn--active'].join(' ')} 
                    style={{marginRight:'0.5rem'}}
                    onClick={onAddHandler}
                >
                    &#x2b;
                </button>
                <button 
                    className={['card_quantity-btn', value<=minValue?'card_btn--inactive':'card_btn--active'].join(' ')}
                    onClick={onRemoveHandler}
                >
                    &#x2212;
                </button>
            </div>
        </div>
    )
}

export default QuantityControl;