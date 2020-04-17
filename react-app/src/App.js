import React from "react";
import DogImage from "./Component/DogImage";
import { dogAction } from "./actions/dogAction";
import { connect } from "react-redux";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <DogImage message={props.message} />
      <button onClick={props.dogAction}>Featch Dog</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

export default connect(null, { dogAction })(App);
// finish wiring mapStateToProps
// add button onClick
// map thru props
