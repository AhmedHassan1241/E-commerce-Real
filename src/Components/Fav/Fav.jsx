import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../CartSlice/CartSlice";
import { useNavigate } from "react-router-dom";
import { removeOneFromFav } from "../FavSlice/FavSlice";
import { useEffect } from "react";

const Fav = () => {
  const navigator = useNavigate();
  const tokenExpiry = localStorage.getItem("tokenExpiry");
  const fav = useSelector((state) => state.fav.items);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("favItems", JSON.stringify(fav));
  }, [fav]);
  return (
    <>
      {tokenExpiry ? (
        <div>
          <div
            className="bg-light-subtle"
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "20px",
            }}
          >
            {/* Cart */}
            <div>
              {fav.length === 0 ? (
                <p className="text-center text-muted my-5">
                  No items in favorite.
                </p>
              ) : (
                <ul className="list-group">
            {fav.map((item) => (
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
          </div>
        </div>
      ) : (
        <div className="alert alert-warning text-center my-4" role="alert">
          <strong>Login First</strong> to access this feature!
          <button
            className="ms-2 btn btn-sm btn-primary"
            onClick={() => navigator("/login")}
          >
            login
          </button>
        </div>
      )}
    </>
  );
};

export default Fav;
