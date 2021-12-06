import React from "react";

const Button = function (props) {
  let buttonRef = React.createRef();

  console.log(buttonRef);
  let clickMe = () => {
    console.log(buttonRef.current.clientWidth);
  };
  return (
    <button
      ref={buttonRef}
      id="button"
      onClick={clickMe}
      style={{
        background: "black",
        color: "white",
        fontSize: "1.3rem",
        padding: "10px 20px",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
