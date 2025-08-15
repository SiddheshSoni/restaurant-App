import React, {useContext} from 'react'
import classes from "./MealitemForm.module.css"
import Input from '../../UI/Input'
import cartContext from '../../../store/cartContext'


const MealItemForm = (props) => {
  const CartCtxt = useContext(cartContext);
    
  const addItemToCart =(e)=>{
    e.preventDefault();
    // console.log( document.getElementById('amount_'+props.id).value);
    const quantity= document.getElementById('amount_'+props.id).value;
    CartCtxt.addItem({...props.item, quantity:quantity});
  }
  return (
    <form className={classes.form}>

        <Input label="Amount" input={{
            id:'amount_'+ props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'

        }}/>
        <button onClick={addItemToCart}>+Add </button>
    </form>
  )
}

export default MealItemForm