import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const PaymentCard = ({handlePaymentDone}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentDone, setPaymentDone] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setPaymentError(error.message);
      setPaymentDone(null);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentDone(paymentMethod.id);
      setPaymentError(null);
      handlePaymentDone(paymentMethod.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe} className="btn btn-warning m-3">
        Pay
      </button>
      {
          paymentError && <p style={{color:"red"}}>{paymentError}</p>
      }
      {
          paymentDone && <p style={{color:"green"}}>Congratulations! Payment is Success</p>
      }
    </form>
  );
};
export default PaymentCard;