import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet.1';

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese" }),
    React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatial" }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Stray" }),
  )
}
ReactDOM.render(React.createElement(App), document.getElementById("root")) 