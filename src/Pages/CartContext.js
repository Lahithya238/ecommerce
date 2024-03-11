import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const Cartprovider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const [grandTotal, setgrandTotal] = useState(0);
    const [BuyTotal, setBuyTotal] = useState([]);

    const updateLocalStorage = (updates) => {
        localStorage.setItem('localStorage', JSON.stringify(updates))
    }

    const addToCart = (obj) => {
        console.log("cartvalues", obj);
        const updateCart = [...cartItem, obj]
        setCartItem(updateCart);
        updateLocalStorage(updateCart);
    }
    const buyProduct = (buyitem) => {
        console.log("buyitem", buyitem);
        const updateBuy = [cartItem, buyitem]
        setBuyTotal(updateBuy)
    }

    const deleteCartItem = (id) => {
        // console.log('delete value', id)
        const updateDelte = cartItem.filter(values => values.id !== id)
        setCartItem(updateDelte);
        updateLocalStorage(updateDelte);
    }

    useEffect(() => {
        let total = 0;
        cartItem.map((items) => {
            total += items.price
        })
        setgrandTotal(total)

    }, [cartItem])

    return (
        <CartContext.Provider value={{ addToCart, buyProduct, cartItem, deleteCartItem, grandTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);