import React from "react";
import Slider from "react-slick";
import IMG1 from '../../img/DetailIMG1.jpg';
import IMG2 from '../../img/DetailIMG2.jpg';
import IMG3 from '../../img/DetailIMG3.jpg';
 
export default function SimpleSlider(props) {
    
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
        <img src={IMG2} />
      </div>
      <div>
        <img src={IMG3} />
      </div>
      <div>
        <img src={IMG1} />
      </div>
      <div>
        <img src={IMG2} />
      </div>
      <div>
        <img src={IMG3} />
      </div>
    </Slider>
  );
}