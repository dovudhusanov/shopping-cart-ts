import {TODO} from "../constants/addToCart";
import {IProduct} from "../data/data";

interface action {
    type: string
    payload: object
}

export const ProductReducer = (state: IProduct | any = [], action: action) => {

    // @ts-ignore
    switch (action.type) {
        case TODO.UPLOAD_PRODUCT:
            // @ts-ignore
            return state = JSON.parse(localStorage.getItem("product")) || [];
        case TODO.ADD_TO_CART:
            // @ts-ignore
            const findProduct = state?.findIndex((product: IProduct) => product.id == action.payload.id)
            if (findProduct >= 0) {
                state[findProduct].quantity++
                localStorage.setItem("product", JSON.stringify([...state]))
                return state
            }

            localStorage.setItem("product", JSON.stringify([...state, action.payload]))
            return [
                ...state,
                action.payload
            ]
        case TODO.DELETE_PRODUCT:
            // @ts-ignore
            const removeProductIdx = state?.findIndex((product: IProduct) => product.id == action.payload)
            if (removeProductIdx >= 0) {
                if (state[removeProductIdx].quantity !== 1) {
                    state[removeProductIdx].quantity--
                }
                localStorage.setItem("product", JSON.stringify([...state]))
                return state
            }
            // @ts-ignore
            localStorage.setItem("product", JSON.stringify(state?.filter((product) => product.id !== action.payload.id)))
            // @ts-ignore
            return state?.filter((product) => product.id !== action.payload.id);
        default:
            return state
    }
}

export const totalPriceBuilder = (state: IProduct[]) =>
    state.reduce((total: number, amount: IProduct | any) => total + amount.price * amount.quantity, 0)