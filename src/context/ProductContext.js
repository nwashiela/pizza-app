import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const [totalItemCount, setTotalItemCount] = useState();
    const [basket, setBasket] = useState([]);
    const [person, setPerson] = useState({firstName: '', email: '', adress:'', paymentmethod: '', delivaryMethod: '', number: ''})
    const [people, setPeople] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [rightSidebar, setRightSidebar] = useState(false);


    const values = { 
        product, 
        setProduct, 
        count, 
        setCount,
         basket, 
         setBasket, 
         searchTerm,
         setSearchTerm,
          rightSidebar, 
          setRightSidebar,
          totalItemCount, 
          setTotalItemCount,
          person,
           setPerson,
           people,
            setPeople
         };

    return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>;
};

export default ProductContext;