import { createContext, useState } from "react";
export const useCartDetails = createContext();

export default (props) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addCartProducts = (product) => {
        // if (cartProducts.length === 0) {
        //     return setCartProducts([...cartProducts, product]);
        // }
        // setCartProducts(
        //     cartProducts.map((item) => {
        //         if (item.id === product.id) {
        //             return {
        //                 ...item,
        //                 quantity: item.quantity + product.quantity,
        //             };
        //         } else {
        //             return item;
        //         }
        //     })
        // );
    };

    const deleteCartProducts = () => {};

    return (
        <useCartDetails.Provider
            value={{
                cartProducts,
                addCartProducts,
                deleteCartProducts,
                // totalQuantityProduct,
            }}
        >
            {props.children}
        </useCartDetails.Provider>
    );
};
