import { useDispatch } from "react-redux";
import { useState } from "react";

export default function PizzaListItem({pizza}) {
    // We use the useState to set something for our buttons to swap
    // between true and false (!!!showing "Remove from Cart" and "Add to Cart"!!!)
    const [isPizzaAdded, setIsPizzaAdded] = useState(true)

    // setting dispatch for use
    const dispatch = useDispatch();

    // function to add a pizza to our shopping cart in redux
    const addPizzas = () => {
        console.log("Attempting to add a pizza");

        // Sends the data to the reducer in store.js to add a pizza to your cart
        dispatch({type: 'ADD_PIZZA', payload: {
            id: pizza.id,
            quantity: 1
        }});
        
        // switches button to show "Remove from Cart"
        setIsPizzaAdded(false);
        console.log("is pizzas added", isPizzaAdded);
    }

    // function to remove a pizza from our shopping cart in redux
    const removedPizza = () => {
        console.log('attempting to remove pizza');

        // Sends the data to the reducer in store.js to remove a pizza from your cart
        dispatch({
            type: "REMOVE_PIZZA",
            payload: pizza.id
        })

        // switches button to show "Add to Cart"
        setIsPizzaAdded(true);
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