import {combineReducers} from "redux";
import {ProductsReducer} from "./products";
import {ProductReducer} from "./product";

export const rootReducer = combineReducers({
    products: ProductsReducer,
    product: ProductReducer
})