import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  //para retrasar el envío de una acción, o para enviar solo si se cumple una determinada condición. 
import { productDetailsReducer, productListReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducers';


const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;