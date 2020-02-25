import * as actionTypes from './actionTypes';
import axios from '../../hoc/axiosItems';

export const fetchItemsSuccess =(items)=>{
    return{
        type:actionTypes.FETCH_ITEMS_SUCCESS,
        items: items
    };
};

export const fetchItemsFails =(error)=>{
    return{
        type:actionTypes.FETCH_ITEMS_FAIL,
        error: error
    };
};

export const fetchItemsStart =(items)=>{    
    return{
        type:actionTypes.FETCH_ITEMS_START       
    }
}

export const updateSearch =(search)=>{    
    return{
        type:actionTypes.UPDATE_SEARCH,
        search
    }
}

export const updateSort =(sort)=>{    
    return{
        type:actionTypes.UPDATE_SORT,
        sort:sort
    }
}

export const updateFilter =(filter)=>{   
    console.log(filter); 
    return{
        type:actionTypes.UPDATE_FILTER,
        filter:filter
    }
}

export const fetchItems =()=> {
    return dispatch => {
        console.log("Fetching Items Started")
        dispatch(fetchItemsStart());        
        axios.get()
            .then(res => {
                const fetchedItems = [];
                for(let key in res.data){
                    fetchedItems.push({
                        ...res.data[key]
                    });
                }
                console.log(fetchedItems);                
                dispatch(fetchItemsSuccess(fetchedItems));                
            })
            .catch(err => {
                dispatch(fetchItemsFails(err)); 
            })
    };
    
}