import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂 state is what this value was before(starts empty)
const savePizza = (state = [], action) => {
  if (action.type === 'ADD_PIZZA') {
    console.log('expect dummy data (dummyPizza)', action.payload);
    const pizzaToBuy = action.payload
    return [...state, pizzaToBuy]
  }
  if(action.type === "REMOVE_PIZZA"){
    console.log('attempting to remove');
    console.log("state is", state)
    const indexToRemove = action.payload
    //filter loops through something (in this case, an object)
    // it then returns a new object with content with each return
    // that returns the value of true
    return (state.filter((index) =>{
      console.log("index in state is", index)
      return index.id != indexToRemove
    }))
    
  }
  return state;
}

const customerData = (state = [], action) => {
  if (action.type === 'SET_CUSTOMER') {
    const customerInfo = action.payload
    return customerInfo
  }
  return state
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
    pizzaDatabaseData,
    customerData 
  }),
  applyMiddleware(logger),
);


export default store;
