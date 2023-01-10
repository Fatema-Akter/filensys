import React from 'react';
import Header from './Header';
import Footer from './Footer';

//fontawesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Progressbar from "./Progressbar";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


class Services extends React.Component{
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


        {/*  section */}
        <div className="pt-5">
          <div className="container"> 
            <div className="row">
              {/* service 1 */}
                                <div className="col-12 col-md-10 mx-auto">
                                    <div className="">
                                        <div class="card">
                                            <div class="card-header">
                                                <h5 class="card-title blue-color text-center">Web Application Development</h5>
                                            </div>
                                            <div class="card-body">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />User-friendly Interface</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Custom Solution</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Reliable</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Secured System</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Scalable Product</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Quality Assured</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Search Engine Friendly</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />99.9% Uptime Service</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Cost Effective</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Sustainable Development</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />System Maintenance</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />24/7 Support</li>
                                                </ul>
                                                {/* button */}
                                                <div class="d-grid gap-2">
                                                    <a href="/contact-us" type="button" class="btn btn-primary btn-lg btn-block btn-blue " > contact us <FontAwesomeIcon icon={faRightLong} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

            </div> 
          </div>  
        </div>



        {/*  section */}
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-12">
                
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

export default Services;