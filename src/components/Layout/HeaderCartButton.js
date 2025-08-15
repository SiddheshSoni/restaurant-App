import React, { useContext } from 'react'
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import cartContext from '../../store/cartContext'

const HeaderCartButton = (props) => {
  const CartCtxt = useContext(cartContext);

  let quantity = 0;
  CartCtxt.items.forEach(item => {
    quantity = quantity + Number(item.quantity);
  });
  return <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}><CartIcon/></span>
    <span>Your Cart</span>
    <span className={classes.badge}>{quantity}</span>
  </button>
}

export default HeaderCartButton