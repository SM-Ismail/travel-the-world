import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';

const stripePromise = loadStripe('pk_test_51IiDhzKakvcQeu1WTkLAi4mvePuhbWrYo8hghHjbIOkneo5WEh8lRtfgQv7QO78fM0PrEizkMunTh3B56tVPe0Xj00iOiNMBNY');

const Checkout = () => {
    const [product, setProduct] = useState({});
    const [userLoggedIn] = useContext(UserContext);
    const id = useParams();
    console.log(id.id, userLoggedIn, product);
    useEffect(()=>{
        fetch(`https://damp-scrubland-47351.herokuapp.com/checkout/${id.id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id.id])
    console.log(product);

    var today = new Date();
    let date_raw = today.getDate();
    let month_raw = today.getMonth() + 1;
    let year = today.getFullYear();
    var date, month;
    if (date_raw < 10) { date = "0" + date_raw.toString() } else { date = date_raw.toString() }
    if (month_raw < 10) { month = "0" + month_raw.toString() } else { month = month_raw.toString() }
    const dateDisplay = date+"-"+month+"-"+year;
    console.log(dateDisplay);

    const {service, description, price, imageURL} = product;
    console.log(service, description, price, imageURL);
    const handlePaymentDone = (paymentId) => {
        const order = {...userLoggedIn, service, description, price, imageURL, paymentId};
        order.orderDate = dateDisplay;
        fetch("https://damp-scrubland-47351.herokuapp.com/placeOrder", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }

    return (
        <div className="d-flex justify-content-around mt-5">
            <div style={{marginLeft:"30px", color: "green", width:"35%"}}>
                <h2> Service for you: {service}</h2>
                <h5> Description: {description}</h5>
                <h3> Price: {price}</h3>
                <div>
                    <h3>Date of Your Order: {dateDisplay}</h3>
                </div>
            </div>
            <div>
                <h1>Make Payment Please</h1>
                <Elements stripe={stripePromise}>
                    <PaymentCard handlePaymentDone={handlePaymentDone} />                    
                </Elements>
            </div>
        </div>
    );
};

export default Checkout;