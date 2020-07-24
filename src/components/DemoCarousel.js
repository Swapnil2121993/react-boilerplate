/*eslint-disable*/
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <div>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
