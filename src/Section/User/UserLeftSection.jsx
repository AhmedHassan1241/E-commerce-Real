const MyAccount = () => {
  const token = localStorage.getItem("ref");
  const savedData = localStorage.getItem("formData");
  const parsedData = JSON.parse(savedData);
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {token ? (
        <>
          <div className="border d-flex justify-content-around flex-wrap">
            <div
              className="rightSection w-75 text-center"
              style={{ minWidth: "300px" }}
            >
              <p>
                Your token: <code>{token}</code>
              </p>

              <div className="my-2">
                {parsedData.profile_image ? (
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
              <div className=" d-flex align-items-center justify-content-evenly">
                <p>Your Name:</p>
                <p></p> {parsedData.name}
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
    