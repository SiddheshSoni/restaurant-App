import React, { useState } from "react";
import cartContext from "./cartContext"

const CartProvider = (props)=>{
    const [items, setItems]= useState([]);

    const addItemToCartHandler=(item)=>{ 
        setItems((prev)=>{
            const index = prev.findIndex((elem) => item.id === elem.id); // findIndex returns -1 if dosen't exist
            if(index !== -1){
                const temp = [...prev];
                temp[index] ={...temp[index], quantity:Number(temp[index].quantity)+Number(item.quantity)};
                return temp;
            }
            else{
                return([...items, item]); //if not found
            }
        })
        // console.log(CartContext.items);
    };
    const removeItemFromCartHandler=(id)=>{};

    const CartContext={
        items:items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return <cartContext.Provider value={CartContext}>
        {/* {console.log(CartContext)} */}
        {props.children}
    </cartContext.Provider>
}

export default CartProvider;