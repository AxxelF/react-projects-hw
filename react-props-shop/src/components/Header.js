import React, { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import Order from './Order';

const showOrders = (props) => {
  let total = 0;
  props.orders.forEach((el) => (total += Number.parseFloat(el.price)));

  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className='total'>Total: ${new Intl.NumberFormat().format(total)}</p>
    </div>
  );
};
const showNothing = () => {
  return (
    <div className='empty'>
      <h2>There is Nothing in your Cart yet</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <h1 className='logo'>Goods House</h1>
        <ul className='nav'>
          <li>About us</li>
          <li>Contacts</li>
          <li>Log in</li>
        </ul>
        <FaCartShopping
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}
