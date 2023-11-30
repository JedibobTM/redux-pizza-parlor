import './SelectPizza.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';

export default function SelectPizza() {
    const pizzaDatabaseData = useSelector(store => store.pizzaDatabaseData) 
    const dispatch = useDispatch();
    useEffect(() => {
        getPizzas();
    }, [])

   
    // this is our GET route for getting all of the pizzas we sell
    const getPizzas = () => {
        axios({
            method:'GET',
            url: '/api/pizza'
        })
        .then((res) => {
            console.log('response.data:', res.data);
            // Now we save this data in a dispatch to be able to be able to tell redux to save it 
            dispatch({
                type: 'DATABASE_PIZZAS', 
                payload: res.data
            })
        })
        .catch((err) => {
            console.log('Error in GET:', err);
        })
    }

    return (
        <div>
            <h1>Select Pizza</h1>
            {pizzaDatabaseData.map((pizza) => {
                return (
                    <PizzaListItem pizza={pizza}/>
                )
           
            })}
           
        </div>
    );
}