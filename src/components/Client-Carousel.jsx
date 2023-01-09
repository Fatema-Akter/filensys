import React from 'react';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//images
import Image1 from "../images/client-logo/aangan.png";
import Image2 from "../images/client-logo/chalonbeel.png";
import Image3 from "../images/client-logo/ltti.png";
import Image4 from "../images/client-logo/logo-4.png"


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state="";
    }
    render(){
        return(
            
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={Image1} alt="client logo 1" className="w-100 p-5" />
                    </div>
                    <div>
                        <img src={Image2} alt="client logo 2" className="w-100 p-5" />
                    </div>
                    <div>
                        <img src={Image3} alt="client logo 3" className="w-100 p-5" />
                    </div>
                    <div>
                        <img src={Image4} alt="client logo 4" className="w-100 p-5" />
                    </div>
                    <div>
                        <img src={Image1} alt="client logo 1" className="w-100 p-5" />
                    </div>
                    <div>
                        <img src={Image2} alt="client logo 2" className="w-100 p-5" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Carousel;