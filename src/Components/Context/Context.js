import { createContext, useEffect, useState } from "react";

export const  ProductContext = createContext();

export const AuthProvider = ({children}) => {
    const [ allProducts, setAllProducts] = useState();

     useEffect( ()=> {
        fetch("http://localhost:5000/allproducts")
            .then( res => res.json())
            .then( data => {
                console.log(data)
                setAllProducts(data);
            })
     },[]);


     const  productApi =  {allProducts};

     return( <ProductContext.Provider value={[productApi]}> {children}

     </ProductContext.Provider>)
}





