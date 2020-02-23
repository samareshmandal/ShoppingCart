import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    cartItems: [],
    total: 0,
    error: false
}

const addToCart = (state, action) => {    
    let addedItem = action.item;
    //check if the action id exists in the addedItems
    let existed_item= state.cartItems.find(item=> addedItem.id === item.id)
    if(existed_item)
    {
        console.log("Existing");
        existed_item.quantity += 1 
        return{
            ...state,
            cartItems: [...state.cartItems],
            total: state.total + (existed_item.price- existed_item.discountAmt)
            }
    }
    else
    {
        
        const discountAmt= addedItem.price * addedItem.discount/100;
        const updatedItem = updateObject(addedItem, {quantity:1, discountAmt: discountAmt});        
        // [...state.addedItems, addedItem],
        // addedItem.quantity = 1;        
        
        const updatedState = {
            cartItems: [...state.cartItems, updatedItem],            
            total: state.total + (updatedItem.price- updatedItem.discountAmt)
        }
        
        return updateObject(state,updatedState);
    }  
}

const removeItem= (state, action) => {
    let addedItem = action.item;    
    let itemToRemove= state.cartItems.find(item=> addedItem.id === item.id)
    let new_items = state.cartItems.filter(item=> addedItem.id !== item.id)
    console.log(itemToRemove);
    //calculating the total
    let newTotal = state.total - (itemToRemove.price- itemToRemove.discountAmt) * itemToRemove.quantity
    
    return{
        ...state,
        cartItems: new_items,
        total: newTotal
    }
}

const addQuantity = (state, action) => {

    let addedItem = state.cartItems.find(item=> item.id === action.item.id)    
    addedItem.quantity += 1   
    let newTotal = state.total + (addedItem.price- addedItem.discountAmt)
    return{
        ...state,
        cartItems: [...state.cartItems],
        total: newTotal
    }   
}

const subtractQuantity= (state, action) => {
    let addedItem = state.cartItems.find(item=> item.id === action.item.id)    
    let newTotal = state.total - (addedItem.price- addedItem.discountAmt)    
    if(addedItem.quantity ===1)
    {
        let new_items = state.cartItems.filter(item=> addedItem.id !== item.id)            
        return{
            ...state,
            cartItems: new_items,
            total: newTotal
        }
    }
    else{
        addedItem.quantity -= 1 
        return{
            ...state,
            cartItems: [...state.cartItems],
            total: newTotal
        }
    }
}

const reducer = (state =initialState, action) => {    
    switch(action.type)
    {
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action);            
        case actionTypes.REMOVE_ITEM:
            console.log("calling remove")
            return removeItem(state, action);
        case actionTypes.ADD_QUANTITY:
            return addQuantity(state, action)
        case actionTypes.SUB_QUANTITY:
            return subtractQuantity(state, action);            
        default:
            return state;
    }
};

export default reducer;