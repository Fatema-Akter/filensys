import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PortfolioSlider from './Portfolio-Slider';
import Image1 from "../images/portfolio/01.jpg";
import Image2 from "../images/portfolio/02.jpg";
import Image3 from "../images/portfolio/03.jpg";


class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.state="";
  }
  render(){
    return(
      <div className="about-page">
        {/* header section */}
        <div className="header-section">
          <div className="container">
            <Header /> 
          </div>  
        </div>

        {/* banner section */}
        <div className="short-banner-section">
          <div className="container">
            <div className="row">
                <div className="col-12 pt-5">
                  <h1 className="pt-5 wheat-color ">Portfolio @ Filensys Technologies</h1>
              </div>
            </div>
          </div>  
        </div>

        {/*  portfolio slider */}
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-8 mx-auto">
                <PortfolioSlider/>
              </div>  
            </div> 
          </div>  
        </div>

        {/*  section */}
        <div className="pt-5">
          <div className="container"> 
            <div className="row">
              <div className="col-12">
                {/* title */}
                <div className="">
                  <h3 className="bottom-line"> web application development </h3>
                </div>
              </div>
              {/* portfolio 1*/}
              <div className="col-12 col-md-4">
                <div class="card px-5">
                <img src={Image1} class="card-img-top w-100" alt="..." />
                  <div class="card-body text-center">
                    <h5 class="card-title">Chaloonbeel Online Store</h5>
                    <p>Website E-commerce Business</p>
                    <p>Web Application SEO Friendly</p>
                  </div> 
                </div>
              </div>

              {/* portfolio 1*/}
              <div className="col-12 col-md-4">
                <div class="card px-5">
                <img src={Image2} class="card-img-top w-100" alt="..." />
                  <div class="card-body text-center">
                    <h5 class="card-title">Chaloonbeel Online Store</h5>
                    <p>Website E-commerce Business</p>
                    <p>Web Application SEO Friendly</p>
                  </div> 
                </div>
              </div>
              {/* portfolio 1*/}
              <div className="col-12 col-md-4">
                <div class="card px-5">
                <img src={Image3} class="card-img-top w-100" alt="..." />
                  <div class="card-body text-center">
                    <h5 class="card-title">Chaloonbeel Online Store</h5>
                    <p>Website E-commerce Business</p>
                    <p>Web Application SEO Friendly</p>
                  </div> 
                </div>
              </div>
            </div> 


          </div>  
        </div>

        {/* footer */}
          <div className="footer d-flex align-items-center bg-lightblue">
            <div className="container">
              <Footer />
            </div>
          </div>

      </div>
    );
  }
}

export default Portfolio;