import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const PaymentIntrigation = () => {
    return (
        <Elements stripe={stripePromise}>
          <SimpleCardForm />
        </Elements>
      );
};

export default PaymentIntrigation;