import React, {useState} from 'react';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal/Modal';
import './newItemModal.css'

const NewItemModal = (props) => {
    const {onClose, onAdd} = props;
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [price, setPrice] = useState('');
    
    const onNameChange = (e) => {
        const value = e.target.value;
        setName(value)
    }
    const onUrlChange = (e) => {
        const value = e.target.value;
        setUrl(value)
    }
    const onPriceChange = (e) => {
        const value = e.target.value;
        setPrice(value)
    }

    const onAddHandler = () => {
        onAdd?.(name, url, price)
    }

    return (
        <Modal onClose={onClose}>
            <div className='new-item-modal'>
                <div className='new-item-modal_field'>
                    <label className='new-item-modal_field-label'>
                        Item Name:
                    </label>
                    <input 
                        className={['new-item-modal_field-input', name?'':'new-item-modal_field-input--selected'].join(' ')}
                        value={name} 
                        onChange={onNameChange}
                    />   
                </div>
                <div className='new-item-modal_field'>
                    <label className='new-item-modal_field-label'>
                        Image Url:
                    </label>
                    <input 
                        className={['new-item-modal_field-input', url?'':'new-item-modal_field-input--selected'].join(' ')} 
                        value={url} 
                        onChange={onUrlChange}
                    />
                </div>

                <div className='new-item-modal_field'>
                    <label className='new-item-modal_field-label'>
                        Item Price:
                    </label>
                    <input 
                        type='number' 
                        className={['new-item-modal_field-input', price?'':'new-item-modal_field-input--selected'].join(' ')}
                        value={price} 
                        onChange={onPriceChange}
                    />
                </div>

                
                <div className='new-item-modal_btn-container'>
                    <Button btnText='Cancel' onClick={onClose}/>
                    <Button btnText='Add' onClick={onAddHandler} disabled={!(name&&url&&price)}/>
                </div>
            </div>
        </Modal>
    )
}

export default NewItemModal