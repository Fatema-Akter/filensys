import React from 'react';

//fontawesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faEnvelope, faGlobe, faPhone, faRightLong } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faYoutube, faLinkedin, faTwitter, faInstagram, faPinterest, faWhatsapp, faTelegram} from "@fortawesome/free-brands-svg-icons";

import { NavLink } from 'react-router-dom';
import Logo from "../images/logo.png";
import FooterBottom from './Footer-Bottom';



class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state="";
    }
    render(){
        return(
            <div className="">
                <div className="footer-area">
                    <div className="row">
                        <div className="col-12">
                            {/* title */}
                            <div className="text-center">
                                <h3 className="bottom-line"> Quick Information </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                            {/* connect us */}
                            <div className="col-12 col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title blue-color bottom-line d-block">connect us</h5>
                                        <div className="text-center pb-5">
                                            <div className="footer-logo">
                                                <NavLink  to="/" className="">
                                                    <img src={Logo}  alt="logo" className="w-100" />
                                                </NavLink>
                                            </div>
                                            <h4> Filensys Technologies </h4>
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

                                        <div className="text-center social-link pb-4">
                                            <h5 class="card-title blue-color bottom-line">social media link:</h5>
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

                            {/* important link */}
                            <div className="col-12 col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title blue-color bottom-line d-block">Important Links</h5>
                                        <ul class="list-group list-group-flush text-capitalize">
                                            <li class="list-group-item">
                                                <NavLink className="nav-link" to="/about-us" activeClassName="active"><FontAwesomeIcon icon={faAnglesRight} className="mr-10 yellow-color" /> about </NavLink>
                                            </li>
                                            <li class="list-group-item">
                                                <NavLink className="nav-link" to="/services" activeClassName="active"><FontAwesomeIcon icon={faAnglesRight} className="mr-10 yellow-color" /> services </NavLink>
                                            </li>
                                            <li class="list-group-item">
                                                <NavLink className="nav-link" to="/services" activeClassName="active"><FontAwesomeIcon icon={faAnglesRight} className="mr-10 yellow-color" /> Web Application Dev. Service </NavLink>
                                            </li>
                                            <li class="list-group-item">
                                                <NavLink className="nav-link" to="/services" activeClassName="active"><FontAwesomeIcon icon={faAnglesRight} className="mr-10 yellow-color" /> Graphics & Motion Graphics Service </NavLink>
                                            </li>
                                            <li class="list-group-item">
                                                <NavLink className="nav-link" to="/services" activeClassName="active"><FontAwesomeIcon icon={faAnglesRight} className="mr-10 yellow-color" /> Content Writing & Data Entry Service </NavLink>
                                            </li>
                                            <li class="list-group-item">
                                                <NavLink className="nav-link" to="/contact-us" activeClassName="active"><FontAwesomeIcon icon={faAnglesRight} className="mr-10 yellow-color" /> Get a quote </NavLink>
                                            </li>
                                            <li class="list-group-item">
                                                <NavLink className="nav-link" to="/portfolio" activeClassName="active"><FontAwesomeIcon icon={faAnglesRight} className="mr-10 yellow-color" /> portfolio </NavLink>
                                            </li>
                                            <li class="list-group-item">
                                                <NavLink className="nav-link" to="/contact-us" activeClassName="active"><FontAwesomeIcon icon={faAnglesRight} className="mr-10 yellow-color" /> contact </NavLink>
                                            </li>
                                            <li class="list-group-item">
                                                <NavLink className="nav-link" to="/" activeClassName="active"><FontAwesomeIcon icon={faAnglesRight} className="mr-10 yellow-color" /> news </NavLink>
                                            </li>
                                            <li class="list-group-item">
                                                <NavLink className="nav-link" to="/" activeClassName="active"><FontAwesomeIcon icon={faAnglesRight} className="mr-10 yellow-color" /> Carrer Opportunities </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* news letter */}
                            <div className="col-12 col-md-4">
                                <div class="card my-2">
                                    <div class="card-body">
                                        <h5 class="card-title blue-color bottom-line d-block">Subscription for news-letter</h5>
                                        <div className="subscription-form">
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Name: </label>
                                                <input type="name" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Enter your name" />
                                            </div>

                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Email: </label>
                                                <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@gmail.com" />
                                            </div>

                                            <div class="col-12">
                                                <div class="d-grid gap-2">
                                                    <button type="button" class="btn btn-primary btn-lg btn-block btn-blue " > submit <FontAwesomeIcon icon={faRightLong} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>         
                    </div>
                </div>
                <hr/>
                <div className="footer-bottom">
                    <FooterBottom />
                </div>
            </div>
        );
    }
}

export default Footer;