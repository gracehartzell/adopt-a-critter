import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

/* STEPS:
1. Refactoring: remove petfinder declaration (and from the import); add Consumer from SearchContext
2. Wrap all of the return in Consumer to make all data available from App inside of Consumer
3. React pattern: function as a child: create function (context, underneath Consumer opening), move all markup into return
  enables you to reference things on context since context is now in scope
Context provides more app state related things (like breed searching for)
4. Change `this`/`this.state` to `context` since the information is coming from context now
 */
class SearchParams extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  };
  render() {
    return (
      <Consumer>
        {/* context is the state from App; can now reference context.breed and it will be the state from App */}
        {context => (
          <div className="search-params">
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="location">
                Location
                <input
                  onChange={context.handleLocationChange}
                  type="text"
                  id="location"
                  value={context.location}
                  placeholder="Location"
                />
              </label>
              <label htmlFor="animal">
                Animal Type
                <select
                  id="animal"
                  value={context.animal}
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
                >
                  <option />
                  {ANIMALS.map((
                    animal // ANIMALS stays the same since it's coming from the modules
                  ) => (
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
                  value={context.breed}
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                  disabled={!context.breeds.length}
                >
                  <option />
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </label>
              <button>Submit</button>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchParams;
