import { useLocation, useNavigate } from "react-router-dom";
import {Header, Footer } from "../../Section";

const OrderSuccess = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const { orderDetails } = location.state || {};

  return (
    <>
    <Header/>
    <div className="container text-center my-5 p-4 bg-light shadow-sm rounded">
    <h1 className="text-success mb-3 fw-bold " style={{  textShadow: "1px 2px 3px rgb(15, 7, 87)"}}>Order Confirmed!</h1>
  <div className="py-4 bg-body shadow-sm">
    <p className="fs-5">Thank you for your purchase, <strong className="text-primary">{orderDetails?.user?.name}</strong>.</p>
    <p className="fs-5">
      Your order will arrive on : <strong className="text-primary">{orderDetails?.deliveryDate}</strong>.
    </p>
    <p className="fs-5">
      Total: <span className="fw-bold text-primary">${orderDetails?.total}</span>
    </p>
    <p className="fs-5">
      Payment Method: <span className="fw-bold text-primary">{orderDetails?.paymentMethod}</span>
    </p>
    <p className="fs-5">
      Delivery Address: <span className="fw-bold text-primary">{orderDetails?.deliveryAddress}</span>
    </p>
    <button
      className="btn btn-primary mt-4 px-4 py-2"
      onClick={() => navigate("/")}
    >
      Continue Shopping
    </button>
  </div>
</div>

    <Footer/>
    </>
  );
};

export default OrderSuccess;
