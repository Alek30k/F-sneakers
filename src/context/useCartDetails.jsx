import { createContext, useState } from "react";
export const useCartDetails = createContext();

export default (props) => {
    const [cartProducts, setCartProducts] = useState([
        {
            id: 1,
            title: "Fall Limited Edition Sneakers",
            description:
                "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
            subtitle: "SNEAKER COMPANY",
            price: 250,
            discount: 0.45,
            imagesMain: [],
            imagesSmall: [],
        },
        {
            id: 2,
            title: "Fall Limited Edition Sneakers",
            description:
                "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
            subtitle: "SNEAKER COMPANY",
            price: 250,
            discount: 0.45,
            imagesMain: [],
            imagesSmall: [],
        },
    ]);

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

    const deleteCartProducts = (id) => {
        // setCartProducts(cartProducts.filter((item) => item.id !== id));
    };

    // const totalQuantityProduct = cartProducts.reduce(
    //     (acc, current) => current.quantity + acc,
    //     0
    // );

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
