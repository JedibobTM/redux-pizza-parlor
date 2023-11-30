import './CustomerInfo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function CustomerInfo() {
    let [name, setName] = useState('')
    let [streetAddress, setStreetAddress] = useState('')
    let [city, setCity] = useState('')
    let [zip, setZip] = useState('')
    let [type, setType] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const collectCustomerInfo = (e) => {
        e.preventDefault()
        console.log("Giving data to the overlord of the internet")
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
                    name={"drone"}
                    onChange={(event) => setType(event.target.value)}
                    />
                    <label>Pickup</label>
                    <input
                    type={'radio'}
                    value={"delivery"}
                    id={"delivery"}
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