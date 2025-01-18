// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// // eslint-disable-next-line react/prop-types
// const PayPalButton = ({total}) => {  
//   return (
//     <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
//       <PayPalButtons
//         createOrder={(data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 currency_code: "USD",
//                 amount: {
//                   value: `${total}`, // Replace with dynamic value
//                 },
//               },
//             ],
//           });
//         }}
//         onApprove={(data, actions) => {
//           return actions.order.capture().then((details) => {
//             alert(`Transaction completed by ${details.payer.name.given_name}`);
//           });
//         }}
//       />
//     </PayPalScriptProvider>
//   );
// };

// export default PayPalButton;
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const PayPalButton = ({ total }) => {
  const handlePayPalClick = () => {
    // Custom validation logic
    const isValid = true; // Replace with your validation condition
    if (!isValid) {
      alert("Validation failed. You cannot proceed with the payment.");
    }
    return isValid;
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
      <PayPalButtons
        onClick={(data, actions) => {
          if (!handlePayPalClick()) {
            // Prevent the payment process
            return actions.reject();
          }
          // Proceed with the payment process
          return actions.resolve();
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: `${total}`, // Dynamic value for the total amount
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            Swal.fire({
              icon: "success",
              title: "Transaction Successful",
              text: `Thank you, ${details.payer.name.given_name}! Your payment was completed.`,
              confirmButtonText: "OK",
            });
            
                    });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
