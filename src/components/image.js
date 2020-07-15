import React, { Component } from "react";
import PropTypes from "prop-types";

const ImageStyle = (width, height) => {
  return {
    width,
    height,
    objectFit: "cover",
  };
};

export default class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src, alt, title, isSelected, onImageClick } = this.props;
    return (
      <div
        className={`responsive${isSelected ? " selected" : ""}`}
        onClick={onImageClick}
      >
        <img
          src={src}
          className={`thumbnail${isSelected ? " selected" : ""}`}
          style={ImageStyle(150, 150)}
          alt={alt}
          title={title}
        />
        <div className="checked">
          <div className="icon" />
        </div>
      </div>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string,
  isSelected: PropTypes.bool,
};
