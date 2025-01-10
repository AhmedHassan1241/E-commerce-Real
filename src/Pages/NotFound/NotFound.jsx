import { NavLink } from "react-router-dom";
import { Footer, Header } from "../../Section";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container text-center my-5">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "20rem" }}
        >
          <div className="col-md-6">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <p className="fs-4 text-danger">
              Oops! The page you&#39;re looking for doesn&#39;t exist.
            </p>
            <NavLink to="/" className="btn btn-primary btn-lg mt-3">
              Go Back to Home
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
