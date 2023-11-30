import { useDispatch } from "react-redux";
import { useState } from "react";

export default function PizzaListItem({pizza}) {
    const [isPizzaAdded, setIsPizzaAdded] = useState(true)
    // We use the useState in order for the DOM and function to be in sync and talk

    const dispatch = useDispatch();
    const addPizzas = (e) => {
        // Sends the data to the reducer in store.js (lines 5 - 11)
        e.preventDefault();
        console.log("Testing addPizzas");
        dispatch({type: 'ADD_PIZZA', payload: {
            id: pizza.id,
            quantity: 1
        }});
        
        setIsPizzaAdded(false);
        console.log("is pizzas added", isPizzaAdded);
    }

    const removedPizza = () => {
        console.log('attempting to remove pizza');
        setIsPizzaAdded(true);
        dispatch({
            type: "REMOVE_PIZZA",
            payload: pizza.id
        })
    }
    

    return (
        <div className="pizza-list-item">
            <h5>{pizza.name}</h5>
            <p>{pizza.description}</p>
            <p>£{pizza.price}</p>
            {!isPizzaAdded ? <button className="btn" onClick={removedPizza}>Remove from Cart</button> : <button className="btn" onClick={addPizzas}>Add to Cart</button> }
        </div>
    )
}