import './CustomerInfo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function CustomerInfo() {
    // Use states to collect input information with react's weird way
    let [name, setName] = useState('')
    let [streetAddress, setStreetAddress] = useState('')
    let [city, setCity] = useState('')
    let [zip, setZip] = useState('')
    let [type, setType] = useState('')

    // sets dispatch and history for use
    const dispatch = useDispatch()
    const history = useHistory()

    // Function to collect info, post info, and move to the next page.
    const collectCustomerInfo = (e) => {
        e.preventDefault()
        console.log("Giving data to the overlord of the internet")
        // Sending / Dispatching all of our customer information to the server
        // in a way our database will be happy when it receives it.
        dispatch({
            type: 'SET_CUSTOMER',
            payload: {
                customer_name: name,
                street_address: streetAddress,
                city: city,
                zip: zip,
                type: type
            }
        })
        //todo: make Post to server with pizza data and costomer data to our order list

        // Changes our page through history.push which feels odd but thats how its done
        history.push("./checkout")
    }

    return (
        <>
            <h2>Step 2: Customer Information</h2>
            <form>
                <div>
                    <input
                    placeholder={'Name'}
                    value={name}
                    type={"string"}
                    onChange={(event) => setName(event.target.value)}
                    />
                    <input
                    placeholder={'Street Address'}
                    value={streetAddress}
                    type={"string"}
                    onChange={(event) => setStreetAddress(event.target.value)}
                    />
                    <input
                    placeholder={'City'}
                    value={city}
                    type={"string"}
                    onChange={(event) => setCity(event.target.value)}
                    />
                    <input
                    placeholder={'Zip'}
                    value={zip}
                    type={"number"}
                    onChange={(event) => setZip(event.target.value)}
                    />
                </div>
                <div>
                    <input
                    type={'radio'}
                    value={"pickup"}
                    id={"pickup"}
                    // have to set a name, so that the radio buttons are linked
                    name={"drone"}
                    onChange={(event) => setType(event.target.value)}
                    />
                    <label>Pickup</label>
                    <input
                    type={'radio'}
                    value={"delivery"}
                    id={"delivery"}
                    // have to set a name, so that the radio buttons are linked
                    name={"drone"}
                    onChange={(event) => setType(event.target.value)}
                    />
                    <label>Delivery</label>
                </div>
                <button onClick={collectCustomerInfo}>NEXT</button>
            </form>
        </>
    );
}