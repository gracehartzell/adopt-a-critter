const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Lieu"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Pyrenees-Husky")
  ]);
}

const App = () => { // render function for the component
  return React.createElement("div", {}, [   // {} attributes (e.g. an id tag); 3rd is child attributes
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet)
  ]);
}

// do something with the component:
ReactDOM.render(React.createElement(App), document.getElementById('root'))

