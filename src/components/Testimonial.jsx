import React from 'react';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


//fontawesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';




var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1
  };

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state="";
    }
    render(){
        return(
            
            <div className="review">
                <Slider {...settings}>
                    {/* review 1 */}
                    <div className="row d-flex">
                        <div className="col-12 col-md-10">
                            <div className="d-flex px-3">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                                <div className="p-4">
                                    <p className="text-justify">I wanted to express my sincerest gratitude for the fantastic work your team did on our website development project. From the initial consultation to the final delivery, your team was professional, efficient, and extremely knowledgeable. The end result exceeded our expec ations and has already had a significant impact on our business. </p>
                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className="align-self-end" />
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="review-image1 mx-auto">
                            </div>
                            <div className="text-center">
                                <h6>ABC KHAN</h6>
                                <h6>CEO</h6>
                                <h6>TLLI</h6>
                            </div>
                        </div>
                    </div>
                    {/* review 2 */}
                    <div className="row d-flex">
                        <div className="col-12 col-md-10">
                            <div className="d-flex px-3">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                                <div className="p-4">
                                    <p className="text-justify">I wanted to express my sincerest gratitude for the fantastic work your team did on our website development project. From the initial consultation to the final delivery, your team was professional, efficient, and extremely knowledgeable. The end result exceeded our expec ations and has already had a significant impact on our business. </p>
                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className="align-self-end" />
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="review-image2 mx-auto">
                            </div>
                            <div className="text-center">
                                <h6>AMIR KHAN</h6>
                                <h6>CEO</h6>
                                <h6>Chalonbeel Online Shop</h6>
                            </div>
                        </div>
                    </div>
                    {/* review 3 */}
                    <div className="row d-flex">
                        <div className="col-12 col-md-10">
                            <div className="d-flex px-3">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                                <div className="p-4">
                                    <p className="text-justify">I wanted to express my sincerest gratitude for the fantastic work your team did on our website development project. From the initial consultation to the final delivery, your team was professional, efficient, and extremely knowledgeable. The end result exceeded our expec ations and has already had a significant impact on our business. </p>
                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className="align-self-end" />
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="review-image3 mx-auto">
                            </div>
                            <div className="text-center">
                                <h6>XZY KHAN</h6>
                                <h6>CEO</h6>
                                <h6>AANGAN</h6>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Carousel;