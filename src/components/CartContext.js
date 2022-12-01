import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();

const CartContextProvider = () =>{


    const [cartList, setCartList] = useState([{
        id: 1,
        categoryId: 1,
        title: "Blue Shoes",
        description: "Unisex Shoes",
        price: "1500",
        pictureUrl: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        available_quantity: 98,
        qty: 3
    }])

    
    return(
        <CartContext.Provider value={cartList} >
        </CartContext.Provider>

    )
}

export default CartContextProvider;