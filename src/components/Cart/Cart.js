import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import React, { useContext } from 'react'
import cartContext from "../../store/cartContext";

const Cart = (props) => {
    const CartCtxt = useContext(cartContext);

    const cartItems =<ul className={classes['cart-items']}>
        <li> <span>Name</span> <span>Price</span> <span>Quantity</span> </li>
       { CartCtxt.items.map((item) => (<li key={item.id}> <span>{item.name}</span> <span>{item.price}</span> <span>{item.quantity}</span> </li>))}</ul>;

    let totalAmount = 0;
    CartCtxt.items.map((item) => totalAmount = totalAmount + (item.price*item.quantity));

    return (
        <Modal onCloseBtn={props.onCloseBtn}>

            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}$</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseBtn}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;