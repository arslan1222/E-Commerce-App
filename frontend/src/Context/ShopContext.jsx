import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '$'; // Simply change with any symbol currency
    const diliveryFee = 10;
    // Search the collection items
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    // Add cart functionality
    const [cartItems, setCartItems] = useState({});
    // navigate
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {

        // React Notification
        if(!size) {
            toast.error("Select Product Size");
            return;
        }

        let cartData = structuredClone(cartItems); // it will create a copy of cart item and can be access it using cartData variable

        if(cartData[itemId]) {
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            } else {
                cartData[itemId][size] = 1;
            } 
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){ // Iterate items
            for(const item in cartItems[items]) // iterate size
                try {
                    if(cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }

        }
        return totalCount;
    }

    // Upadate quantity data
    const updateQuantity = async (itemId, size, quantity) => {
        let  cartData = structuredClone(cartItems);

        cartData[itemId][size] =quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item]; // using this we will get total amount of all products
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products,
        currency,
        diliveryFee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;