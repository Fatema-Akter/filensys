import React from 'react';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


//fontawesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

//images
import Image1 from "../images/portfolio/01.jpg";
import Image2 from "../images/portfolio/02.jpg";
import Image3 from "../images/portfolio/03.jpg";




var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1
  };

class PortfolioSlider extends React.Component{
    constructor(props){
        super(props);
        this.state="";
    }
    render(){
        return(
            
            <div className="review">
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
                </Slider>
            </div>
        );
    }
}

export default PortfolioSlider;