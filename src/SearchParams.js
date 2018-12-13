import React from "react";
import SearchBox from "./SearchBox";

class SearchParams extends React.Component {
  render() {
    return (
      <div className="search-route">
        <SearchBox />
      </div>
    );
  }
}

export default SearchParams;
// REMOVED EVERYTHING FROM HERE AND PUT INTO SEARCH BOX IN ORDER TO CONSOLIDATE THEM

// import React from "react";
// import pf, { ANIMALS } from "petfinder-client"; // pulling animals named export out of client; an array of strings

// const petfinder = pf({
//   key: process.env.API_KEY,
//   secret: process.env.API_SECRET
// });

// class SearchParams extends React.Component {
//   // want to track location, animal, and breed
//   // NEED TO REMOVE STATE (same step as removing methods)
//   // state = {
//   //   // need defaults:
//   //   location: "Austin, TX", // will not actually let you type anything without adding the handler because this state isn't changing
//   //   // can see input change the state in the React DevTools
//   //   // NOT free two-way data binding
//   //   animal: "", // will make dropdown of animal types allowed/provided in the API
//   //   breed: "", // make selection based on type of animal; have to make an API call for the type of animal chosen
//   //   breeds: [] // all available current breeds that can be selected from; use if no animal type selected
//   // };
// // REMOVED METHODS AND PUT THEM INTO APP
//   render() {
//     return (
//       <div className="search-params">
//         <label htmlFor="location">
//           Location
//           <input
//             onChange={this.handleLocationChange}
//             type="text"
//             id="location"
//             value={this.state.location}
//             placeholder="Location"
//           />
//         </label>
//         <label htmlFor="animal">
//           Animal Type
//           <select
//             id="animal"
//             value={this.state.animal}
//             onChange={this.handleAnimalChange}
//             onBlur={this.handleAnimalChange} // must have this to ensure that every device works with these selects
//           >
//             <option />
//             {ANIMALS.map((
//               animal // anytime using a map, MUST give a key
//             ) => (
//               // value is what's saved in the state, then want to actually display the selected animal for user to see
//               <option key={animal} value={animal}>
//                 {animal}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label htmlFor="breed">
//           Breed
//           <select
//             id="breed"
//             value={this.state.breed}
//             onChange={this.handleBreedChange}
//             onBlur={this.handleBreedChange}
//             disabled={!this.state.breeds.length} // if length is 0, breed dropdown will be disabled
//           >
//             <option />
//             {this.state.breeds.map(breed => (
//               <option key={breed} value={breed}>
//                 {breed}
//               </option>
//             ))}
//           </select>
//         </label>
//         <button>Submit</button>
//       </div>
//     );
//   }
// }

// export default SearchParams;
