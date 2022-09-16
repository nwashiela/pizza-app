import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const [basket, setBasket] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [rightSidebar, setRightSidebar] = useState(false);


    const values = { product, setProduct, count, setCount, basket, setBasket, searchTerm, setSearchTerm, rightSidebar, setRightSidebar };

    return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>;
};

export default ProductContext;