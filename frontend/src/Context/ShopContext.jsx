import { createContext } from "react";
import { products } from "../assets/frontend_assets.js";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '$'; // Simply with any symbol currency
    const diliveryFee = 10;

    const value = {
        products,
        currency,
        diliveryFee
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;