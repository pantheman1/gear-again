import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import CategoriesReducer from './categories';
import ItemsReducer from './items';
import PhotosReducer from './photos';
import OrdersReducer from './orders';
import OrderDetailsReducer from './orderDetails';
import CartReducer from './cart';
import Ship from './ship';
import Bill from './bill';

const rootReducer = combineReducers({
  session,
  categories: CategoriesReducer,
  items: ItemsReducer,
  itemPhotos: PhotosReducer,
  orders: OrdersReducer,
  orderDetails: OrderDetailsReducer,
  cart: CartReducer,
  ship: Ship,
  bill: Bill,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
