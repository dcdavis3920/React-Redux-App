import { fetchDogSuccess } from "../actions/dogAction";
import React, { useEffect } from "react";
import { dogAction } from "../actions/dogAction";

import { Card, CardHeader, CardImg, Col } from "reactstrap";

function DogImage(props) {
  useEffect(() => {
    dogAction();
  }, []);
  console.log(props.message);
  return (
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Card style={{ backgroundColor: " aqua", color: "light grey" }}>
        <CardHeader style={{ backgroundColor: "grey" }}>DOG API</CardHeader>
        <img src={props.message} alt="Dog " />
        <button onClick={props.dogAction}>Fetch Dog</button>
      </Card>
    </Col>
  );
}
export default DogImage;
