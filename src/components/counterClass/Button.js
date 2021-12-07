import React from "react";

const Button = function (props) {
  const clickedBtn = () => {
    // if (props.points === props.goal) {
    //   props.setGoal(props.points * 2);
    // }
    if (props.value === "plus") {
      props.setPoints(props.points + 1);
    } else {
      props.setPoints(props.points - 1);
    }
    console.log("clicked Btn");
  };
  const mouseEnters = (e) => {
    // console.log("Mouse Enters");
    // console.log(e);
  };
  const mouseLeft = (e) => {
    // console.log("Mouse Lefts");
    // console.log(e);
  };
  return (
    <button
      className="counter__minus"
      onClick={clickedBtn}
      onMouseEnter={mouseEnters}
      onMouseLeave={mouseLeft}
    >
      {props.children}
    </button>
  );
};

export default Button;
