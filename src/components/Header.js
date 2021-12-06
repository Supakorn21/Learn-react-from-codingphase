import React from "react";

const Header = function (props) {
  return (
    <header
      style={{
        background: props.background,
        padding: "15px 20px",
        color: "white",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {props.children}
    </header>
  );
};

export default Header;
