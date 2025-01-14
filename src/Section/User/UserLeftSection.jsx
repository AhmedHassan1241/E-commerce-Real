import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeOneFromFav } from "../../Components/FavSlice/FavSlice";
import { addToCart } from "../../Components/CartSlice/CartSlice";

const MyAccount = () => {
  const tokenExpiry = localStorage.getItem("tokenExpiry");
  const savedData = localStorage.getItem("formData");
  const parsedData = JSON.parse(savedData);
  return (
    <div style={{ textAlign: "center" }}>
      {tokenExpiry ? (
        <>
          <div className="border d-flex justify-content-around flex-wrap">
            <div
              className="rightSection w-75 text-center"
              style={{ minWidth: "300px" }}
            >
              {/* <p>
                Your tokenExpiry: <code>{tokenExpiry}</code>
              </p> */}

              <div className="my-2">
                {Object.keys(parsedData.profile_image).length > 0 ? (
                  <img
                    src={parsedData.profile_image}
                    alt="profile"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <p>No profile image found.</p>
                )}
              </div>
              {/* <div className=" d-flex align-items-center justify-content-between"
              style={{ textShadow: "1px 1px 1px rgb(24, 102, 218)"}}>
                <p className="fw-bold">Your Name:</p>
                <p></p> {parsedData.name}
              </div>
              <div className=" d-flex align-items-center justify-content-between"
              style={{ textShadow: "1px 1px 1px rgb(24, 102, 218)"}}>
                <p className="fw-bold">Your user Name:</p>
                <p></p> {parsedData.username}
              </div>
              <div className=" d-flex align-items-center justify-content-between"
              style={{ textShadow: "1px 1px 1px rgb(24, 102, 218)"}}>
                <p className="fw-bold">Your Email:</p>
                <p></p> {parsedData.email}
              </div> */}
              <div className="my-3">
                <div className="card shadow-lg p-4 rounded-3">
                  <div
                    className="d-flex align-items-center justify-content-between mb-3"
                    style={{ textShadow: "1px 1px 1px rgb(24, 102, 218)" }}
                  >
                    <p className="fw-bold mb-0" style={{ fontSize: "1.1rem" }}>
                      Full Name:
                    </p>
                    <p className="mb-0 text-muted">{parsedData.name}</p>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-between mb-3"
                    style={{ textShadow: "1px 1px 1px rgb(24, 102, 218)" }}
                  >
                    <p className="fw-bold mb-0" style={{ fontSize: "1.1rem" }}>
                      Username:
                    </p>
                    <p className="mb-0 text-muted">{parsedData.username}</p>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-between mb-3"
                    style={{ textShadow: "1px 1px 1px rgb(24, 102, 218)" }}
                  >
                    <p className="fw-bold mb-0" style={{ fontSize: "1.1rem" }}>
                      Email:
                    </p>
                    <p className="mb-0 text-muted">{parsedData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyAccount;

export const Orders = () => {
  // const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h5
          className="mb-4 fw-bold"
          style={{ textShadow: "1px 1px 1px rgb(24, 102, 218)" }}
        >
          Your Orders
        </h5>
        <hr/>

        {cartItems.length === 0 ? (
          <div className="alert alert-warning text-center" role="alert">
            <p>No orders found. Start shopping now!</p>
            <button
              className="w-50 btn btn-primary mt-3"
              onClick={() => navigate("/")}
            >
              Shop Now
            </button>
          </div>
        ) : (
          <ul className="list-group">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center mb-2"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="card-img-top img-fluid"
                    style={{ height: "5rem", objectFit: "contain" }}
                  />{" "}
                </div>
                <div className="me-5 text-truncate">
                  <strong>{item.name || item.title}</strong> - {item.price} $
                </div>
                <div>
                  <span className="mx-1 fw-bold">{item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export const Favorite = () => {
  const favItems = useSelector((state) => state.fav.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h5
          className="mb-4 fw-bold"
          style={{ textShadow: "1px 1px 1px rgb(24, 102, 218)" }}
        >
          Your Favorite Items
        </h5>
        <hr/>
        {favItems.length === 0 ? (
          <div className="alert alert-warning text-center" role="alert">
            <p>No Favorite Items found. Find now!</p>
            <button
              className="w-50 btn btn-primary mt-3"
              onClick={() => navigate("/")}
            >
              Find Now
            </button>
          </div>
        ) : (
          <ul className="list-group">
            {favItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center mb-2 flex-wrap"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="card-img-top img-fluid"
                    style={{ height: "5rem", objectFit: "contain" }}
                  />{" "}
                </div>
                <div className="me-2">
                  <strong>{item.name || item.title}</strong> - {item.price} $
                </div>
                <div className="btn-group" role="group" aria-label="Favorite Actions">
  <button
    className="btn btn-sm btn-outline-primary"
    onClick={() => {
      dispatch(addToCart(item));
      dispatch(removeOneFromFav(item.id));
    }}
  >
    Add To Cart
  </button>
  <button
    className="btn btn-sm btn-danger"
    onClick={() => dispatch(removeOneFromFav(item.id))}
  >
    Remove
  </button>
</div>

              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export const EditProfile = () => {
  return <>EditProfile Content</>;
};
