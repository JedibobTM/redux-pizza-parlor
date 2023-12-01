import { useSelector, useDispatch } from 'react-redux';
import './Checkout.css';
import Total from '../Total/Total';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Checkout() {
    // Sets history and dispatch for later use
    const history = useHistory();
    const dispatch = useDispatch();

    // Each useSelector takes a function from the store.js file
    const checkoutOrder = useSelector(store => store.savePizza);
    const customerInfo = useSelector(store => store.customerData);
    const collectionOfPizzas = useSelector(store => store.pizzaDatabaseData);
    

    // This function goes through our checkout order, and collects the ids
    //  to compare to the collection of pizza's id to get the price.
    const getTotal = () => {
        // The sum to return
        let sum = 0;

        // The loop through each individual item of checkout order.
        for (let index of checkoutOrder) {
            
            // Numifies the one filtered number we are grabbing.
            sum += Number(collectionOfPizzas.filter((newIndex) => {
                // Filters through the collectionOfPizzas and asks if their ID
                // is equal to our first loop id.
                return (
                    newIndex.id === index.id
                );
            })
            [0].price)
            // the above then enters the array which should only contain 1 item,
            // and grabs the price of it. Which is added to the sum.
        }
        console.log('Sum:', sum);
        return sum;
    }

    // Posts to server all of our customer info and checkout info.
    const postOrderToServer = () => {

        // Since our customer Info is already in Redux we can call it and 
        // pass each respective property as it is supposed to be.
        // Additionally, because of how we saved the checkoutOrder we could 
        // pass it as the pizza property!
        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                customer_name: customerInfo.customer_name,
                street_address: customerInfo.street_address,
                city: customerInfo.city,
                zip: customerInfo.zip,
                total: getTotal(),
                type: customerInfo.type,
                pizzas: checkoutOrder
            }
        })
        .then((res) => {
            // Got through the post, we are then required to clear all of our
            // customer data and customer order from Redux
            console.log('In our post route, success!!');
            dispatch({
                type: "CLEAR_INPUTS"
            })
            // Navigates back to the first page.
            history.push('/')
        })
    }

    return (
        <>
            <h1>Checkout</h1>
            <div>
                <p>{customerInfo.customer_name}</p>
                <p>{customerInfo.street_address}</p>
                <p>{customerInfo.city}</p>
                <p>For {customerInfo.type}</p>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
                    {checkoutOrder.map((index) => {
                        // This is basically a loop to go through our checkout
                        // order.
                        return (
                            <tr>
                                {/* We then filter through our collectionOfPizzas
                                and ask for the entire object of collectionOfPizzas
                                where our order id is equal to the collectionOfPizzas
                                item ID.
                                 */}
                                <td>{collectionOfPizzas.filter((newIndex) => {
                                    return (
                                        newIndex.id === index.id
                                    );
                                })
                                [0].name}</td>
                                {/* 👆 Now that we have the whole collectionOfPizzas
                                object inside of an array (thats how filter works, returns
                                an array) we then go into the first index of the array to 
                                get to the whole object, and then grab the name from the
                                object. ([0].name)
                                */}


                                {/* A filter through the collectionOfPizzas just like above.
                                 */}
                                <td>${collectionOfPizzas.filter((newIndex) => {
                                    return (
                                        newIndex.id === index.id
                                    );
                                })
                                [0].price}</td>
                                {/* 👆 However now instead of the name we want the price. */}
                            </tr>
                        );
                    })}
            </table>
            <Total />
            <button onClick={postOrderToServer}>Checkout</button>
        </>
    );
}