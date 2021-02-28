import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Promo1 from '../../img/promo1.jpg';
import Promo2 from '../../img/promo2.jpg';
import Promo3 from '../../img/promo3.jpg';
import Promo4 from '../../img/promo4.jpg';
import Promo5 from '../../img/promo5.jpg';
import Promo6 from '../../img/promo6.jpg';
import Promo7 from '../../img/promo7.jpg';
import Promo8 from '../../img/promo8.jpg';
import Promo9 from '../../img/promo9.jpg';
import Promo10 from '../../img/promo10.jpg';
import Promo11 from '../../img/promo11.jpg';
import Promo12 from '../../img/promo12.jpg';
import Slide from './Slide';
import RightBtn from '../../img/RightBtn.png';
import LeftBtn from '../../img/LeftBtn.png';
import '../../css/Silder.css';

const photos = [
  {
    name: 'Photo1',
    url: '',
  },
  {
    name: 'Photo2',
    url: '',
  },
  {
    name: 'Photo3',
    url: '',
  },
  {
    name: 'Photo4',
    url: '',
  },
  {
    name: 'Photo5',
    url: '',
  },
  {
    name: 'Photo6',
    url: '',
  },
  {
    name: 'Photo7',
    url: '',
  },
  {
    name: 'Photo8',
    url: '',
  },
  {
    name: 'Photo9',
    url: '',
  },
  {
    name: 'Photo10',
    url: '',
  },
];

const Wrap = styled.div`
  width: 100%;
  .slides .slick-prev {
    background: url("../../img/RightBtn.png");
    background-repeat: no-repeat;
    width: 200px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 200px;
  }
  .slides .slick-next {
    background: url("../../img/RightBtn.png");
    background-repeat: no-repeat;
    width: 100px;
    height: 50px;
    margin : 0% 0% 0% 0%
    opacity: 1;
    color: black;
    position: absolute;
    top: 50%;
    right: 290px;
  }
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      fade: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slides',
    };
    return (
      <Wrap>
        <Slider {...settings}>
          <Slide img={Promo7} />
          <Slide img={Promo8} />
          <Slide img={Promo9} />
          <Slide img={Promo10} />
          <Slide img={Promo11} />
          <Slide img={Promo12} />
          <Slide img={Promo1} />
          <Slide img={Promo2} />
          <Slide img={Promo3} />
          <Slide img={Promo4} />
          <Slide img={Promo5} />
          <Slide img={Promo6} />
        </Slider>
      </Wrap>
    );
  }
}
