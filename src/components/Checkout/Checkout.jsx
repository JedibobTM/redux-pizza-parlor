import { useSelector } from 'react-redux';
import './Checkout.css';
import Total from '../Total/Total';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
export default function Checkout() {
    // Each useSelector takes a function from the store.js file
    const checkoutOrder = useSelector(store => store.savePizza);
    const customerInfo = useSelector(store => store.customerData);
    const collectionOfPizzas = useSelector(store => store.pizzaDatabaseData);
    const history = useHistory();
    const dispatch = useDispatch();
    const getTotal = () => {
        let sum = 0;
        for (let index of checkoutOrder) {
            sum += Number(collectionOfPizzas.filter((newIndex) => {
                return (
                    newIndex.id === index.id
                );
            })
            [0].price)
        }
        console.log('Sum:', sum);
        return sum;
    }

    const postOrderToServer = () => {
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
            console.log('In our post route, success!!');
            dispatch({
                type: "CLEAR_INPUTS"
            })
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
                        return (
                            <tr>
                                <td>{collectionOfPizzas.filter((newIndex) => {
                                    return (
                                        newIndex.id === index.id
                                    );
                                })
                                [0].name}</td>
                                <td>${collectionOfPizzas.filter((newIndex) => {
                                    return (
                                        newIndex.id === index.id
                                    );
                                })
                                [0].price}</td>
                            </tr>
                        );
                    })}
            </table>
            <Total />
            <button onClick={postOrderToServer}>Checkout</button>
        </>
    );
}