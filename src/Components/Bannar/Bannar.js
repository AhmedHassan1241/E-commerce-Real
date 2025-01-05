import styles from './Bannar.module.css'
const Bannar = () => {
  return (
    <>
      <div
        className={`${styles.banner} text-light py-2`}
        style={{ backgroundColor: "#000" }}
      >
        <div className="container text-center">
          <div className="col-12">
            <div className="row ">
              <p className="col  ">
                <a
                  href="#.."
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdroppp"
                >
                  FREE DELIVERY OVER 999 EGP
                </a>{" "}
              </p>
              <p className="col offer-5">
                <a
                  href="#.."
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  WELCOME OFFER 15% OFF
                </a>
              </p>
              <p className="col-4">
                <a
                  href="#.."
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdropp"
                >
                  FREE RETURNS
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannar;
