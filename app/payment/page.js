'use client'
import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js"
import convertToSubCurrency from "../../lib/convertToSubCurrency";
import CheckoutPage from "../(components)/CheckoutPage"

if(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined){
    throw new Error ("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined")
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function payment() {
    const amount = 1.00;
  return (
    <main className='max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500'>
    <div className='mb-10'>
        <h1 className='text-4xl font-extrabold mb-2'>
        SpeedCode
        </h1>
        <h2 className='text-2xl'> Requested</h2>
        <span className='font-bold'>{amount}$</span>
    </div>
    <Elements
    stripe={stripePromise}
    options={
        {
            mode: "payment",
            amount: convertToSubCurrency(amount),
            currency: "usd"
        }
    }
    >
    <CheckoutPage amount = {amount} />
    </Elements>
    </main>
  )
}

export default payment;