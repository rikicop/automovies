import React, { Component } from "react";
/* import "./style.css"; */

export default class Add extends Component {
  state = {
    cart: ["Corn", "Potato"],
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewItem = () => {
    let { cart, input } = this.state;
    cart.push(input);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.saveInput}
        />
        <button onClick={this.addNewItem}> Add Item </button>
        <ol>
          {this.state.cart.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
          })}
        </ol>
      </div>
    );
  }
}