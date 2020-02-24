import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './reducers/items';
import cartReducer from './reducers/cartBuilder'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  cart: cartReducer,
  prod:itemReducer
});

export default initialState => {
  initialState =
    JSON.parse(window.localStorage.getItem('cartItems')) || initialState;
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
  )
  );

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      cart: state.cart,
      total: state.total
    };

    window.localStorage.setItem('cartItems', JSON.stringify(persist));
  });

  return store;
};
