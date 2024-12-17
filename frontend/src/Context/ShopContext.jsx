import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets.js";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '$'; // Simply with any symbol currency
    const diliveryFee = 10;
    // Search the collection items
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const value = {
        products,
        currency,
        diliveryFee,
        search, setSearch, showSearch, setShowSearch,
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;