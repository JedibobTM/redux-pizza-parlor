import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂 state is what this value was before(starts empty)
const savePizza = (state = [], action) => {
  // Adding a pizza
  if (action.type === 'ADD_PIZZA') {
    const pizzaToBuy = action.payload
    
    // returns the original list of pizzas in our cart, even if its empty, and adds the new
    // pizza to it for the return.
    return [...state, pizzaToBuy]
  }

  // Removing a pizza
  if(action.type === "REMOVE_PIZZA"){
    const indexToRemove = action.payload

    // goes through our current list of pizzas with filter. 
    // filter will make a new array with content equal to each return of true.
    // if it is not true, it is not included. 

    // Therefore, if we are deleting, we look for the one instance where index.id would be equal
    // to our indexToRemove, and return that as false to not include it in our new array.
    return (state.filter((index) =>{
      return index.id != indexToRemove
    }))
  }

  return state;
}

const customerData = (state = [], action) => {
  // Sets our customer info
  if (action.type === 'SET_CUSTOMER') {
    const customerInfo = action.payload

    // Collects the customer info to access it later.
    return customerInfo
  }
  return state
}



// Stores all of our pizza information from our server
const pizzaDatabaseData = (state =[], action) => {
  if (action.type === 'DATABASE_PIZZAS') {
    const pizzaData = action.payload

    // Returns all pizza data
    return pizzaData;
  }

  return state;
}


// sets the store so that we can use them all in our app.
const store = createStore(
  combineReducers({
    savePizza,
    pizzaDatabaseData,
    customerData 
  }),
  applyMiddleware(logger),
);


export default store;
