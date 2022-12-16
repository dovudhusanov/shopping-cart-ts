import {sortedData} from "../data/data";

export const initialState = {
    products: sortedData,
    loading: false,
    error: false
}

export const ProductsReducer = (state = initialState, action: any) => {
    return state
}