import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';


class App extends React.Component {
  handleTitleClick() {
    alert("Look at how you started that touching");
  }
  render() {
    return React.createElement("div", {}, [
      // {} attributes (e.g. an id tag); 3rd is child attributes
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Lieu",
        animal: "dog",
        breed: "Pyrenees-Husky"
      }),
      React.createElement(Pet, {
        name: "Loki",
        animal: "dog",
        breed: "Pittiesh"
      }),
      React.createElement(Pet, {
        name: "Captain",
        animal: "cat",
        breed: "Korat"
      })
    ]);
  }
}

// do something with the component:
render(React.createElement(App), document.getElementById("root"));
