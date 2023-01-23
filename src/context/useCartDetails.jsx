import { createContext } from "react";

export const useCartDetails = createContext();

export default (props) => {
    return <useCartDetails.Provider>{props.children}</useCartDetails.Provider>;
};
