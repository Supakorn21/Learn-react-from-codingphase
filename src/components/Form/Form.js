import React, { useState } from "react";

const Form = function (props) {
  const [fname, setFname] = useState("");
  const [showError, setShowError] = useState(false);
  const formSubmitted = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  const handleChange = (e) => {
    // console.log(e);
    setFname(e.target.value);
    console.log(e.target.value);
  };
  const checkString = () => {
    if (fname.length < 5) {
      setShowError(true);
    }
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={formSubmitted}
    >
      <label htmlFor="fname">Full Name</label>
      <input
        type="text"
        id="fname"
        value={fname}
        onChange={handleChange}
        onFocus={() => setShowError(false)}
        onBlur={() => checkString()}
      ></input>
      <div className={`error-message ${showError ? "show" : ""}`}>
        Please put your full name
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
