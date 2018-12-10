import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

// composite components with JSX
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Lieutenant" animal="dog" breed="Pyrenees-Husky" /> 
        <Pet name="Loki" animal="dog" breed="Pittiesh" /> 
        <Pet name="Captain" animal="cat" breed="Korat" /> 
      </div>
    )
  }
}


render(<App />, document.getElementById("root"));
