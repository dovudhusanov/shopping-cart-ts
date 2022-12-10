import React, {useContext, createContext, useState} from "react";
import {IProduct, sortedWomenCategories, womenCategories} from "../data/data";

interface initialState {
    filterProduct: (size: string) => void;
    products: IProduct[]
}

interface contextProvider {
    children: React.ReactNode
}

export const Context = createContext<initialState | null>(null);

export const ContextProvider = ({children}: contextProvider) => {
    // @ts-ignore
    const [products, setProducts] = useState<IProduct[]>(sortedWomenCategories)
    const filterProduct = (size: string) => {
        if(products.length > 4){
            setProducts(products.filter((product) => product.size !== size))
        } else {
            setProducts(sortedWomenCategories)
        }
    }

    return (
        <Context.Provider value={{products: products,filterProduct}}>
            {children}
        </Context.Provider>
    )
}



