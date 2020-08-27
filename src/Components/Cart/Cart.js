import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, cour) => total + cour.fee, 0);
    return (
        <div className="cart">
            <h5>Total Course Added: {cart.length} </h5>
            <ul className="list-group">
                {cart.map( (item)=> <li className="list-group-item d-flex my-2 shadow justify-content-between" key={item.id}>
                                    <span>{item.name}</span> <span> Tk. {item.fee}</span>
                                    </li>)}
            </ul>
            <h5 className="fee">Total Amount to pay: Tk. {totalPrice}</h5>
          </div>
    );
};

export default Cart;