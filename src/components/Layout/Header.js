import React from 'react'
import classes from "./Header.module.css"
import mealImage from "../../assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <>
        <header className={classes.header}>
            ReactMeals
            <HeaderCartButton />
        </header>
        <div className={classes["main-image"]}>
            <img src={mealImage} alt='table with food'/>
        </div>
    </>
  )
}

export default Header