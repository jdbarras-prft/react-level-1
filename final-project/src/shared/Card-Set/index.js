import React from 'react';
import Card from '../Card';
import './cardSet.css'

const CardSet = (props) => {
    const {cards, onAddToCart} = props;

    return(
        <div className='card-set'>
            {
                cards?.map((card)=>(
                    <Card
                        key={card.imageLink}
                        imageLink={card.imageLink}
                        title={card.title}
                        price={card.price}
                        onAddToCart={onAddToCart}
                    />
                ))
            }
        </div>
    )
}

export default CardSet;