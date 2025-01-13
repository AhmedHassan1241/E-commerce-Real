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
  return <>Orders Content</>;
};

export const Favorite = () => {
  return <>Favorite Content</>;
};
export const EditProfile = () => {
  return <>EditProfile Content</>;
};
