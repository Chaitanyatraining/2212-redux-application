import { ACTION_TYPE } from "../types/ActionType";

const initialState = {
    products: [],
    cartData: []
}

export const ProductReducer = (state= initialState, action) =>{
    switch(action.type){
        case ACTION_TYPE.ADD_TO_CART:
            return {...state, cartData: [...state.cartData, action.payload]}
        case ACTION_TYPE.REMOVE_FROM_CART:
            const filteredProduct = state.cartData.filter(
                (cartItem)=> cartItem.id != action.payload)
            return {...state, cartData:filteredProduct}

            case ACTION_TYPE.FETCH_PRODUCTS :
                return {...state, products:action.payload}

        default:
            return state;
    }
}