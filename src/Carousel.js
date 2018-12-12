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
            <img
              key={photo.value}
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
