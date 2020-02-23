import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
const initialState = {
    items: [],
    search:null,
    filter:10000,
    sort: 0,//0- highLow.1- LowHigh.2-Discoount
    loading :false
}

const fetchItemSucess = (state, action) => {
    return updateObject(state, {
        items: action.items,
        loading:false
    });
}

const updateSearch = (state, action) => {
    return updateObject(state, {
        search: action.search
    });
}

const updateSort = (state, action) => {
    console.log("update Sort");
    return updateObject(state, {
        sort: action.sort
    });
}

const updateFilter = (state, action) => {
    return updateObject(state, {
        filter: action.filter
    });
}

const reducer =(state = initialState, action) =>{
    // console.log(action.type);
    switch(action.type)
    {                  
        case actionTypes.FETCH_ITEMS_START: return updateObject(state, {loading:true});   
        case actionTypes.FETCH_ITEMS_SUCCESS: return fetchItemSucess(state, action);                        
        case actionTypes.FETCH_ITEMS_FAIL: return updateObject(state, {loading:false}); 
        case actionTypes.UPDATE_SEARCH: return updateSearch(state, action);
        case actionTypes.UPDATE_FILTER: return updateFilter(state, action);
        case actionTypes.UPDATE_SORT: return updateSort(state, action);
        default:
            console.log(action.type + "- started")
            return state;
    }
}

export default reducer;