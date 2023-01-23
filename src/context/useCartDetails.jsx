import { createContext, useState } from "react";
export const useCartDetails = createContext();

export default (props) => {
    const [cartProducts, setCartProducts] = useState([]);

    return (
        <useCartDetails.Provider
            value={{
                cartProducts,
                // addCartProducts,
                // deleteCartProducts,
                // totalQuantityProduct,
            }}
        >
            {props.children}
        </useCartDetails.Provider>
    );
};
