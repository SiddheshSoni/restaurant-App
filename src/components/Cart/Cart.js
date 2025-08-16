import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import React, { useContext } from 'react'
import cartContext from "../../store/cartContext";
import CartItem from "./CartItem"

const Cart = (props) => {
    const CartCtxt = useContext(cartContext);
    
    const cartItemRemoveHandler=(id)=> {
        CartCtxt.removeItem(id);
    };
    const cartItemAddHandler=()=>{

    };

    const cartItems =<ul className={classes['cart-items']}>
       { CartCtxt.items.map((item) => (
        <CartItem key={props.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity} 
            onRemove={()=>cartItemRemoveHandler(item.id)}
            onAdd={()=>cartItemAddHandler(item.id)}
            />
       ))}</ul>;

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