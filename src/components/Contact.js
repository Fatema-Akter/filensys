import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

//fontawesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faEnvelope, faGlobe, faPhone, faRightLong } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faYoutube, faLinkedin, faTwitter, faInstagram, faPinterest, faWhatsapp, faTelegram} from "@fortawesome/free-brands-svg-icons";


class Contact extends React.Component{
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
                  <h1 className="pt-5 wheat-color ">Contact us @ Filensys Technologies</h1>
              </div>
            </div>
          </div>  
        </div>

        {/* office info  section */}
        <div className="office-info py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div>
                  <div className="text-center pb-5">
                    <h4 className="bottom-line"> Filensys Technologies </h4>
                    <p> Office Location: <br/> Bishwanathpur, Garpara, Manikganj, Bangladesh. </p>
                    <div className="d-inline-block">
                      {/* phone */}
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faPhone} className="mr-10 yellow-color" />
                            <p className="mb-0"> +8801747-225294 </p>
                        </div>
                        {/* email */}
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faEnvelope} className="mr-10 yellow-color" />
                          <p className="mb-0"> info@filensys.com </p>
                        </div>
                        {/* website */}
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faGlobe} className="mr-10 yellow-color" />
                            <NavLink  to="/" className=""> www.filensys.com </NavLink>
                        </div>
                      </div>
                    </div>
                </div>
              </div>  
            </div> 
          </div>  
        </div>

        {/* social media  section */}
        <div className="social-media py-5 bg-lightblue">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div>
                  <div className="text-center pb-5">
                    <h4 className="bottom-line"> Social Media Links </h4>
                    <div className="d-block">
                                                {/* facebook */}
                                                <a href="https://www.facebook.com/" className="">
                                                    <FontAwesomeIcon icon={faFacebook} className="mr-10 blue-color" size="2x" />
                                                </a>

                                                {/* youtube */}
                                                <a href="https://www.youtube.com/" className="">
                                                    <FontAwesomeIcon icon={faYoutube} className="mr-10 blue-color" size="2x" />
                                                </a>

                                                {/* linkedin */}
                                                <a href="https://www.linkedin.com/" className="">
                                                    <FontAwesomeIcon icon={faLinkedin} className="mr-10 blue-color" size="2x" />
                                                </a>

                                                {/* twitter */}
                                                <a href="https://www.twitter.com/" className="">
                                                    <FontAwesomeIcon icon={faTwitter} className="mr-10 blue-color" size="2x" />
                                                </a>

                                                {/* instagram */}
                                                <a href="https://www.instagram.com/" className="">
                                                    <FontAwesomeIcon icon={faInstagram} className="mr-10 blue-color" size="2x" />
                                                </a>

                                                {/* pinterest */}
                                                <a href="https://www.pinterest.com/" className="">
                                                    <FontAwesomeIcon icon={faPinterest} className="mr-10 blue-color" size="2x" />
                                                </a>

                                                {/* whatsapp */}
                                                <a href="https://www.whatsapp.com/" className="">
                                                    <FontAwesomeIcon icon={faWhatsapp} className="mr-10 blue-color" size="2x" />
                                                </a>

                                                {/* pinterest */}
                                                <a href="https://www.telegram.com/" className="">
                                                    <FontAwesomeIcon icon={faTelegram} className="mr-10 blue-color" size="2x" />
                                                </a>
                                            </div>
                  </div>
                </div>
              </div>  
            </div> 
          </div>  
        </div>

        {/*contact form */}
        <section className="contact-info py-5 Bg-light-white" data-aos="fade-up">
                    <div className="container">
                        {/*title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="title text-center">
                                    <h1 className="bottom-line">write to us</h1>
                                </div>
                            </div>
                        </div>
                        {/* contact information */}
                        <div className="row">
                            <div className="col-12 col-md-10 mx-auto">
                                <div className="contact-form py-3">
                                    <form id="contact-form" >
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <div className="form-group input-group-lg mb-2">
                                                    <label htmlFor="name">Name :</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group input-group-lg mb-2">
                                                    <label htmlFor="email">Email :</label>
                                                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group input-group-lg mb-2">
                                                    <label htmlFor="email">Organization Name :</label>
                                                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group input-group-lg mb-2">
                                            <label htmlFor="subject">Subject :</label>
                                            <input type="text" className="form-control" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="form-group input-group-lg mb-2">
                                            <label htmlFor="message">Message</label>
                                            <textarea className="form-control" rows="5"></textarea>
                                        </div>
                                        <div className="col-6 col-md-2 py-2 mx-auto">
                                            <div className="view-button text-center">
                                                <button type="button" className="btn btn-blue">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>



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

export default Contact;