import React from "react";
import Slider from "react-slick";
import IMG1 from '../../img/DetailIMG1.jpg';
 
export default function SimpleSlider(props) {


    const sampleData = [
        '../../img/classtest.png',
        '../../img/classtest.png',
        '../../img/classtest.png',
        '../../img/classtest.png',
        '../../img/classtest.png',
        '../../img/classtest.png',
        '../../img/classtest.png',
        '../../img/classtest.png',
        '../../img/classtest.png',
        '../../img/classtest.png',
        '../../img/classtest.png'
    ]
    
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={IMG1} />
      </div>
      <div>
        <img src={IMG1} />
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}