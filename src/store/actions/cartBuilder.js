import * as actionTypes from './actionTypes';

//add cart action
export const addToCart= (item)=>{
    return{
        type: actionTypes.ADD_TO_CART,
        item
    }
}
//remove item action
export const removeItem=(item)=>{
    return{
        type: actionTypes.REMOVE_ITEM,
        item
    }
}
//subtract qt action
export const subtractQuantity=(item)=>{
    return{
        type: actionTypes.SUB_QUANTITY,
        item
    }
}
//add qt action
export const addQuantity=(item)=>{
    return{
        type: actionTypes.ADD_QUANTITY,
        item
    }
}