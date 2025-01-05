import React from "react";

const SectionHeader = (props) => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          paddingTop: "1rem",
          paddingBottom: "5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default SectionHeader;
