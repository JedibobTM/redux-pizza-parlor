import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂 state is what this value was before(starts empty)
const savePizza = (state = [], action) => {
  if (action.type === 'ADD_PIZZA') {
    console.log('expect dummy data (dummyPizza)', action.payload);
    const pizzaToBuy = action.payload
    return [...state, pizzaToBuy]
  }
  return state;
}

const pizzaDatabaseData = (state =[], action) => {
  if (action.type === 'DATABASE_PIZZAS') {
    const pizzaData = action.payload
    return pizzaData;
  }

  return state;
}

const store = createStore(
  combineReducers({
    savePizza,
    pizzaDatabaseData 
  }),
  applyMiddleware(logger),
);


export default store;
