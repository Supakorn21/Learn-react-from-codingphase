import React from "react";
import Header from "./Header";
import Logo from "./Logo";
import Counter from "./counterClass/Counter";
import Form from "./Form/Form";
import { GlobalStateProvider, StateContext } from "./context/FuncProvider";
import A from "./context/A";
import B from "./context/B";
import C from "./context/C";

let data = [
  {
    fullName: "Matt Smith",
    status: "friend",
    description: "Matthew is an interior designer living in New York.",
    totalFriends: 75,
    joinedYear: 2013,
    imageUrl:
      "https://images.pexels.com/photos/6551790/pexels-photo-6551790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    fullName: "Billy Smith",
    status: "friend",
    description: "Matthew is an interior designer living in New York.",
    totalFriends: 45,
    joinedYear: 2011,
    imageUrl:
      "https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    fullName: "Cindy Smith",
    status: "friend",
    description: "Matthew is an interior designer living in New York.",
    totalFriends: 23,
    joinedYear: 2018,
    imageUrl:
      "https://images.pexels.com/photos/5010662/pexels-photo-5010662.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    fullName: "Jane Smith",
    status: "friend",
    description: "Matthew is an interior designer living in New York.",
    totalFriends: 178,
    joinedYear: 2021,
    imageUrl:
      "https://images.pexels.com/photos/4946649/pexels-photo-4946649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

const App = function (props) {
  return (
    <GlobalStateProvider>
      <StateContext.Consumer>
        {(context) => {
          console.log(context);
          return (
            <>
              <Header data={props.data} background="black">
                <Logo>Supakorn Charoen</Logo>
                <nav>
                  <a href="/">link</a>
                  <a href="/">link</a>
                  <a href="/">link</a>
                </nav>
              </Header>
              <main
                style={{
                  margin: "0 auto",
                  width: "100%",
                  maxWidth: "960px",
                  padding: "20px 20px",
                }}
              >
                <input
                  type="text"
                  value={context.state.name}
                  onChange={context.handleChange}
                ></input>
                <h1>name: {context.state.name} </h1>
                <A>
                  <B>
                    <C></C>
                  </B>
                </A>
              </main>
            </>
          );
        }}
      </StateContext.Consumer>
    </GlobalStateProvider>
  );
};
export default App;
