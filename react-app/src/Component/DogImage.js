import { fetchQuote } from "../actions/dogAction";
import React, { useEffect } from "react";
import { dogAction } from "../actions/dogAction";

function DogImage(props) {
  return (
    <div>
      <h1>DOG</h1>
      <image src={props.message} alt="Dog" />
    </div>
  );
}
export default DogImage;
