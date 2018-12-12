import React from "react";
import pf, { ANIMALS } from "petfinder-client"; // pulling animals named export out of client; an array of strings

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class SearchParams extends React.Component {
  // want to track location, animal, and breed
  state = {
    // need defaults:
    location: "Austin, TX", // will not actually let you type anything without adding the handler because this state isn't changing
    // can see input change the state in the React DevTools
    // NOT free two-way data binding
    animal: "", // will make dropdown of animal types allowed/provided in the API
    breed: "", // make selection based on type of animal; have to make an API call for the type of animal chosen
    breeds: [] // all available current breeds that can be selected from; use if no animal type selected
  };
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
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            type="text"
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal Type
          <select
            id="animal"
            value={this.state.animal}
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange} // must have this to ensure that every device works with these selects
          >
            <option />
            {ANIMALS.map((
              animal // anytime using a map, MUST give a key
            ) => (
              // value is what's saved in the state, then want to actually display the selected animal for user to see
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={this.state.breed}
            onChange={this.handleBreedChange}
            onBlur={this.handleBreedChange}
            disabled={!this.state.breeds.length} // if length is 0, breed dropdown will be disabled
          >
            <option />
            {this.state.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </div>
    );
  }
}

export default SearchParams;
