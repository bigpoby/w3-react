import React from "react";

import Car2 from "./Car2";

export class CarCls extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

export function Car(props) {
  return <h2>Hi, I am a {props.color} Car!</h2>;
}

export function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
      <Car2 />
    </>
  );
}