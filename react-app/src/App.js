import React from "react";
import DogImage from "./Component/DogImage";
import { dogAction } from "./actions/dogAction";
import "./App.css";

function App(props) {
  console.log(props.dogAction);
  console.log(props.message);
  return (
    <div className="App">
      <DogImage message={props.message} dog={dogAction} />
    </div>
  );
}

export default App;
