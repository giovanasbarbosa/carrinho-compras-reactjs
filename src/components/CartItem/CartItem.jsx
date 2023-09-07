import React, { useContext } from 'react';
import {MdRemoveCircle} from 'react-icons/md';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

import './CartItem.css';

function CartItem({ data }){
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  return(
    <section className='cart-item'>
      <img 
        src={thumbnail} 
        alt='imagem do produto' 
        className='cart-item-image'
      />

      <div className='cart-item-content'>
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className='cart-item-price'>{formatCurrency(price, 'BRL')}</h3>
      </div>

      <button 
        type='button' 
        className='button__remove-item'
        onClick={handleRemoveItem}
      >
        <MdRemoveCircle/>
      </button>

    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;