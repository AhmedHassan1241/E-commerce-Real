import { useLocation, useNavigate } from "react-router-dom";
import {Header, Footer } from "../../Section";

const OrderSuccess = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const { orderDetails } = location.state || {};

  return (
    <>
    <Header/>
    <div className="container text-center my-5">
      <h1 className="text-success">Order Confirmed!</h1>
      <p>Thank you for your purchase, {orderDetails?.user?.name}.</p>
      <p>Your order will arrive on <strong>{orderDetails?.deliveryDate}</strong>.</p>
      <p>Total: <strong>${orderDetails?.total}</strong></p>
      <p>Payment Method: <strong>{orderDetails?.paymentMethod}</strong></p>
      <p>Delivery Address: <strong>{orderDetails?.deliveryAddress}</strong></p>
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </button>
    </div>
    <Footer/>
    </>
  );
};

export default OrderSuccess;
