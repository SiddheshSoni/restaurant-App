import React from 'react'
import classes from "./Header.module.css"
import mealImage from "../../assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            ReactMeals
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealImage} alt='table with food'/>
        </div>
    </>
  )
}

export default Header