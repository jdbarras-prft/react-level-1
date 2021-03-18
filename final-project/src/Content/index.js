import React, {useState} from 'react';
import Button from '../shared/Button';
import CardSet from '../shared/Card-Set';
import {mockCards} from '../utils/constants';

import './content.css';
import NewItemModal from './NewItemModal/NewItemModal';
import Toolbar from './Toolbar';

const Content = (props) => {
    const {modalOpen, setModalOpen} = props;
    const [cards, setCards] = useState(mockCards);
    const [total, setTotal] = useState(0);

    const onAddToCart = (price) => {
        setTotal(prevState=>(prevState + price))
    }

    const onAddNewItem = (name, url, price) => {
        setCards(prevState => prevState.concat({imageLink:url, title:name, price}))
        setModalOpen(false);
    }

    return(
        <div className='content'>
            <Toolbar
                total={total}
                setTotal={setTotal}
            />
            <CardSet
                cards={cards}
                onAddToCart={onAddToCart}
            />
            <div className='content_add-item-container' >
                <Button 
                    btnText='Add a New Item to Marketplace'
                    onClick={()=>setModalOpen(true)}
                />
            </div>
            {
                modalOpen && 
                <NewItemModal 
                    onAdd={onAddNewItem}
                    onClose={()=>setModalOpen(false)}
                />
            }
            
        </div>
    )
}

export default Content;