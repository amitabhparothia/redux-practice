import { ADD_TO_CART } from "../Constants"

const initialState = {
    cardData:[]
}
export const carditem  = (state = initialState , action) => {
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cardData:action.data
            }
            break;
            default:
                return state
    }
}