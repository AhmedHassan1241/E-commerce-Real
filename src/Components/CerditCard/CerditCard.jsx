// import StripeCheckout from "react-stripe-checkout";
// import PayPalButton from "./Paypal";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51QibOuAmToluLi31nPc6hq56AGYNSyBogx6in8Gzr7nxZw2UY5GXoffSTr7Zv4wMVfbuhyAS1tNKNyOuQqVxlAuq00YbgvIXCD"
// );

// const WrapCredit = () => {
//     const onToken = (token)=>{
//         console.log(token);

//     }
//   return (
//     <StripeCheckout  token={onToken} stripeKey="pk_test_51QibOuAmToluLi31nPc6hq56AGYNSyBogx6in8Gzr7nxZw2UY5GXoffSTr7Zv4wMVfbuhyAS1tNKNyOuQqVxlAuq00YbgvIXCD"  >
//       {/* <PayPalButton /> */}
//     </StripeCheckout>
//   );
// };

// export default WrapCredit;
import { MdOutlineDoneOutline } from "react-icons/md";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import Swal from "sweetalert2";

// Initialize Stripe with the test publishable key
const stripePromise = loadStripe(
  "pk_test_51QibOuAmToluLi31nPc6hq56AGYNSyBogx6in8Gzr7nxZw2UY5GXoffSTr7Zv4wMVfbuhyAS1tNKNyOuQqVxlAuq00YbgvIXCD"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
const [payed ,setPayed] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    // Retrieve card details from the CardElement
    const cardElement = elements.getElement(CardElement);

    // Create a payment method
    // eslint-disable-next-line no-unused-vars
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPayed(false)
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: error.message || "An unexpected error occurred while processing your payment.",
      });    
    } else {
      setPayed(true)
      Swal.fire({
      icon: "success",
      title: "Payment Successful",
      html: `<div style="display: flex; align-items: center; justify-content: center; font-size: 18px; gap: 8px;">
              <span>Payed</span>
              <span style="color: green;">✔️</span>
             </div>`,
    });      // Send paymentMethod.id to your server to process the payment
      // Example: Call your backend endpoint here
    }
  };

  return (
    <div className="container mt-5 w-75">
      {/* <h2 className="text-center">Payment Form</h2> */}
      <form  className="w-100">
        <div className="mb-3 text-center">
          <label htmlFor="card" className="form-label fw-bold">
            Credit Card Information
          </label>
          <CardElement
            id="card"
            options={{
              style: {
                base: {
                  fontSize: "15px",
                  lineHeight: "1.4",
                  padding: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#f9f9f9",
                  width: "100%", // Ensure it takes the full width
                },
              },
            }}
            className="form-control"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }} // Flexbox styles
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary mt-3"
            style={{ width: "50%", padding: "10px" }}
            onClick={handleSubmit}
            disabled={payed}
          >
            {payed? (<span>Payed <MdOutlineDoneOutline/></span>):("Pay Now")}
          </button>
        </div>
      </form>
    </div>
  );
};

const CreditCardForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default CreditCardForm;
