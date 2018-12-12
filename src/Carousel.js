import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0 // one currently showing to user (start with 0 index)
  };
  static getDerivedStateFromProps({ media }) {
    // take in all photos and narrow to only desired sizes
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos }; // same as doing photos: photos
  }

  // arrow function doesn't create a new context when called; just refers to the lexical scope it's in
  // if didn't do an arrow for handleIndexClick, would have to do go into constructor and do the following:
  /*
  constructor(props) {
    super(props);
    this.handleIndexClick = this.handleIndexClick.bind(this)
  }

    would have to do this for anything that'd be an event listener for calling this.setState, etc. would have to add it to that
    binding the context

    so handleIndexClick would refer to Carousel 
  */
  handleIndexClick = event => {
    this.setState({
      // called as event handler;
      active: +event.target.dataset.index // (+) takes string and coerces into number because active is defined as a number
    });
  };

  render() {
    const { photos, active } = this.state;

    let hero;
    if (photos[active] && photos[active].value) {
      hero = photos[active].value;
    }

    return (
      <div className="carousel">
        <img src={hero} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* doing disable because technically these pictures should be buttons */
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              data-index={index}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
