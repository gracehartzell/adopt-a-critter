import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

// API client:
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

// GOAL: TAKE IN PETS FROM API AND DISPLAY THEM TO THE USER

// composite components with JSX
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Austin, TX" })
      .then(data => {
        let pets;
        // (NOTES FOR BELOW) have to check if data exists (guard case in case pets is null)
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          // multiple pets, return as array
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            // one pet, return as array (default is object for their API)
            pets = [data.petfinder.pets.pet];
          }
        } else {
          // no pets, return empty array
          pets = [];
        }

        this.setState({
          // take pets in if-else and update upper state
          // pets: pets // can make this shorter since names are same:
          pets
        });
      });
  }
  // take array of pet data and turn it into an array of pet components: (~~MAP~~)
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <div className="search">
          {this.state.pets.map(pet => {
            let breed;

            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(", ");
            } else {
              breed = pet.breeds.breed;
            }
            return (
              <Pet
                key={pet.id}
                animal={pet.animal}
                name={pet.name}
                breed={breed}
                media={pet.media}
                location={`${pet.contact.city}, ${pet.contact.state}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
