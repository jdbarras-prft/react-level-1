import React, {useState} from 'react';
import './card.css';
import QuantityControl from './quantityControl';

const Card = (props) => {
    const {title, price, imageLink, imageAlt, onAddToCart} = props;
    const [quantity, setQuantity] = useState(0);

    const onQuantityChangeHandler = (value) => {
        setQuantity(value)
    }

    const onClickHandler= () => {
        //This can be expanded to track a recipt of items, but this will only track price
        if(quantity){
            onAddToCart(price*quantity)
        }
    }

    return(
        <div className='card'>
            <div className='card_image-wrapper'>
                <img className='card_image' src={imageLink} alt={imageAlt||title||''}/>
            </div>
            <h3 className='card_title'>{title}</h3>
            <h4 className='card_title'>{`$${price}`}</h4>
            <QuantityControl 
                value={quantity}
                onChangeHandler={onQuantityChangeHandler}
                maxValue={100}
                minValue={0}
            />
            <button 
                className={['card_apply-btn', quantity>0?'card_btn--active':'card_btn--inactive'].join(' ')}
                onClick={onClickHandler}
            >
                Add to Cart
            </button>
        </div>
    )
}   

export default Card;