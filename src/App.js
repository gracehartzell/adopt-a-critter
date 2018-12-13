import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import pf from "petfinder-client"; // adding these in order to set up provider
import { Provider } from "./SearchContext"; // adding these in order to set up provider
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

// context reads from app state and provides it to the portal (provider); other end reads state from provider into consumer
class App extends React.Component {
  // move all of the state into App
  // easier to do with constructor
  constructor(props) {
    super(props);

    //provide all defaults for state
    this.state = {
      location: "Evanston, IL",
      animal: "",
      breed: "",
      breeds: [],
      // need to store functions in state in order to provide them to context
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    };
  }
  // take methods that were in SearchParams and put them into App
  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };
  handleAnimalChange = event => {
    // static list of animal types in API, already stowed inside of petfinder client for easy pulling
    this.setState(
      {
        animal: event.target.value,
        breed: "" // everytime you select a new aninal, breed will be cleared
      },
      this.getBreeds
    ); // whenever done with setting the animal, get the breeds
  };
  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };
  getBreeds() {
    if (this.state.animal) {
      // if no animal selected, go into breeds (above)
      petfinder.breed
        .list({ animal: this.state.animal }) // will return promise of various possible breeds to select from
        .then(data => {
          if (
            data.petfinder && // make sure that petfinder exists
            data.petfinder.breeds && // make sure that breeds exists
            Array.isArray(data.petfinder.breeds.breed) // make sure that breed isn't going to be an array of breeds (defend against animal without breed)
          ) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
          }
        });
    } else {
      this.setState({ breeds: [] });
    }
  }
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt a Critter!</Link>
        </header>
        {/* Wrap router in PROVIDER;  */}
        <Provider value={this.state}>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchParams path="/search-params" />
        </Router>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
