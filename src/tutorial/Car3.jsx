import React from "react";

export class CarProps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

export class Garage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Who lives in my Garage? {this.props.color}</h1>
        <Car color={this.props.color} />
      </div>
    );
  }
}

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      brand: "Ford",
      model: "Mustang",
      year: 1964,
    };
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  render() {
    return (
      <>
        <h2>I am a {this.state.color} Car!</h2>
        <h2>I am a {this.props.color} Car!</h2>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </>
    );
  }
}

export default Car;
