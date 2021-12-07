import React, { Component } from "react";
import Number from "./Number";
import Button from "./Button";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    points: 0,
    goal: 11,
  };
  setPoints = (point) => {
    this.setState({ ...this.state, points: point }, () => {
      if (point === this.state.goal) {
        this.setGoal(this.state.points * 2);
      }
    });
  };
  setGoal = (goal) => {
    this.setState({ ...this.state, goal: goal });
  };
  render() {
    return (
      <div className="counter">
        <Number digit={this.state.points} />
        <div className="counter__buttons">
          <Button
            points={this.state.points}
            goal={this.state.goal}
            setGoal={this.setGoal}
            setPoints={this.setPoints}
            value="minus"
          >
            -
          </Button>
          <Button
            points={this.state.points}
            goal={this.state.goal}
            setGoal={this.setGoal}
            setPoints={this.setPoints}
            value="plus"
          >
            +
          </Button>
          Goal {this.state.goal}
        </div>
      </div>
    );
  }
}

// const Counter = function (props) {
//   const [points, setPoints] = useState(0);
//   const [goal, setGoal] = useState(11);
//   useEffect(() => {
//     console.log("Run Every Single Time there's rerender or any data changes");
//     console.log("A");
//   });
//   useEffect(() => {
//     console.log("Run On First Render Only");
//     console.log("B");
//   }, []);
//   useEffect(() => {
//     console.log("Run On First Render and when goal changes");
//     console.log("C");
//   }, [goal]);

//   console.log(useState(0));
//   return (

//   );
// };

export default Counter;
