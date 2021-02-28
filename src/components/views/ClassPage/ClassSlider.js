import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.scss";
// import "slick-carousel/slick/slick-theme.scss";
import IMG1 from '../../img/DetailIMG1.jpg';
import IMG2 from '../../img/DetailIMG2.jpg';
import IMG3 from '../../img/DetailIMG3.jpg';
 
export default function SimpleSlider(props) {
    
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: false,
    // autoplaySpeed: 2750,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const ImgLink = [
    IMG1, 
    IMG2, 
    IMG3, 
    IMG1, 
    IMG2, 
    IMG3
  ]

  return (
    <Slider {...settings}>
      {
        ImgLink.map((Img_pre)=>{
          return (
            <div>
              <img src={Img_pre} />
            </div>
          );
        })
      }
    </Slider>
  );
}