import { useDispatch } from "react-redux";

export default function PizzaListItem({pizza}) {
    const dispatch = useDispatch();
    const addPizzas = (e) => {
        // Sends the data to the reducer in store.js (lines 5 - 11)
        e.preventDefault();
        console.log("Testing addPizzas");
        dispatch({type: 'ADD_PIZZA', payload: {
            id: pizza.id,
            quantity: 1
        }});
        

    }

    return (
        <div>
            <h5>{pizza.name}</h5>
            <p>{pizza.description}</p>
            <p>${pizza.price}</p>
            <button onClick={addPizzas}>Add</button>
        </div>
    )
}