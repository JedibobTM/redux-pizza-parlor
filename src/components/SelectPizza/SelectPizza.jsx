import './SelectPizza.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export default function SelectPizza() {
    const dispatch = useDispatch();

    const addPizzas = (e) => {
        // Sends the data to the reducer in store.js
        e.preventDefault();
        console.log("Testing addPizzas");
        dispatch({type: 'ADD_PIZZA', payload: 'dummyPizza'});
    }

    return (
        <div>
            <h1>Select Pizza</h1>
            <button onClick={addPizzas}>Next</button>
        </div>
    );
}