import React from "react";

// problem: have location, animal, and breed and need to get that from the search params page use it to search on the results page
// STEPS: 1. Create context, 2. Put provider into place (App.js)

// React.createContext() is a new method that creates provider and consumer components
// provider makes everything available underneath it; consumer can read from the provider (distance between them doesn't matter) ~~Data Portal~~
const SearchContext = React.createContext({
  // describe what the data looks like: (dummy methods)
  // what gets put on the context if no provider is present (SHOULD NOT DO; shouldn't ever use a consumer without a provider being above it)
  location: "Evanston, IL",
  animal: "",
  breed: "",
  breeds: [],
  // ability to modify context (on consumer side):
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});


export const Provider = SearchContext.Provider
export const Consumer = SearchContext.Consumer
