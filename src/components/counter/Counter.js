import React, { useEffect, useState } from "react";
import Number from "./Number";
import Button from "./Button";

const Counter = function (props) {
  const [points, setPoints] = useState(0);
  const [goal, setGoal] = useState(11);
  useEffect(() => {
    console.log("Run Every Single Time there's rerender or any data changes");
    console.log("A");
  });
  useEffect(() => {
    console.log("Run On First Render Only");
    console.log("B");
  }, []);
  useEffect(() => {
    console.log("Run On First Render and when goal changes");
    console.log("C");
  }, [goal]);

  console.log(useState(0));
  return (
    <div className="counter">
      <Number digit={points} />
      <div className="counter__buttons">
        <Button
          points={points}
          goal={goal}
          setGoal={setGoal}
          setPoints={setPoints}
          value="minus"
        >
          -
        </Button>
        <Button
          points={points}
          goal={goal}
          setGoal={setGoal}
          setPoints={setPoints}
          value="plus"
        >
          +
        </Button>
        Goal {goal}
      </div>
    </div>
  );
};

export default Counter;
