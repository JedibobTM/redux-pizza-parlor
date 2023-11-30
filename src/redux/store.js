import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const savePizza = (state = [], action) => {
  if (action.type === 'ADD_PIZZA') {
    console.log('expect dummy data (dummyPizza)', action.payload);
    return [...state, action.payload]
  }
  return state;
}

const store = createStore(
  combineReducers({
    savePizza, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;
