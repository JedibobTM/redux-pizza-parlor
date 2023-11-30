import './SelectPizza.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import { Link } from 'react-router-dom/';

export default function SelectPizza() {
    //useSelector to collect all of our existing pizzas from the database to display
    const pizzaDatabaseData = useSelector(store => store.pizzaDatabaseData) 

    //setting dispatch for actual use
    const dispatch = useDispatch();

    //use effect to render pizzas from the database upon load
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
        <>
        <h1>Select Pizza</h1>
        <div className='pizza-list'>
            {pizzaDatabaseData.map((pizza) => {
                return (
                    <PizzaListItem key={pizza.id} pizza={pizza}/>
                    )
                    
                })}
            <Link to='/customer-info'>
                <button>NEXT</button>
            </Link>
           
        </div>
        </>
    );
}