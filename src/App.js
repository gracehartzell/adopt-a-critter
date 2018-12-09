const Pet = (props) => { 
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
}

const App = () => { // render function for the component
  return React.createElement("div", {}, [   // {} attributes (e.g. an id tag); 3rd is child attributes
    React.createElement("h1", {}, "Adopt Me!"),
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

// do something with the component:
ReactDOM.render(React.createElement(App), document.getElementById('root'))

