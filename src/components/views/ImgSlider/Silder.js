import React, { Component } from 'react';
import Slider from 'react-slick';
import img2 from '../../img/11.jpg';
import img1 from '../../img/22.jpg';
import img3 from '../../img/33.jpg';
import img4 from '../../img/44.jpg';
import img5 from '../../img/55.jpg';
import Slide from './Slide';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <Slide img={img1} />
          <Slide img={img2} />
          <Slide img={img3} />
          <Slide img={img4} />
          <Slide img={img5} />
        </Slider>
      </div>
    );
  }
}
