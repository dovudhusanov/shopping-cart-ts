import {TODO} from "../constants/addToCart";
import {IProduct} from "../data/data";

interface action {
    type: string
    payload: object
}
export const ProductReducer = (state: IProduct | any = [], action: action) => {
    switch (action.type) {
        case TODO.ADD_TO_CART:
            // @ts-ignore
            const findProduct = state?.findIndex((product: IProduct) => product.id == action.payload.id)
            if (findProduct >= 0) {
                state[findProduct].quantity++
                return state
            }
            return [
                ...state,
                action.payload
            ]
            break;
        case TODO.DELETE_PRODUCT:
            // @ts-ignore
            return state.product.filter(product => product.id !== action.payload.id);
            break;
        default:
            return state
    }
}