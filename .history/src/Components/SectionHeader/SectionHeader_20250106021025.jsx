/* eslint-disable react/prop-types */

const SectionHeader = (props) => {
  return (
    <>
      <h2
        className="p-2 mb-5 text-uppercase fw-bold b"
        style={{
          boxShadow: "1px 1px 5px 5px rgba(0, 0, 0, 0.2)"

        }}
      >
        {props.children}
      </h2>
    </>
  );
};

export default SectionHeader;
