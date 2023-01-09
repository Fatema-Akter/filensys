import React from "react";
import Header from "./Header";
//fontawesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Progressbar from "./Progressbar";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
//carousel for clients
import Client from "./Client-Carousel";
import Testimonial from "./Testimonial";
import Footer from "./Footer";


function Home() {
    return (
        <div className="home-page">
            <div className="header-section">
                <div className="container">
                    <Header /> 
                </div>  
            </div>

            {/* banner section */}
            <div className="banner-section d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="white-color pt-5"> CUTTING-EDGE TECHNOLOGIES BASED IT SOLUTION PROVIDER </h3>
                            <h1 className="py-2 wheat-color"> Diverse and Inclusive Culture
                                <br/> Fostering Collaboration and Creativity
                                <br/>to Drive Innovation and Success.
                            </h1>
                            <h4 className="white-color"> We consistently deliver hight-quality products andservices that meet the needs and expectations of our customers. </h4>
                            <div className="row">
                                <div class="col-12 col-md-4">
                                    <div class="d-grid gap-2">
                                    <a href="/about-us" type="button" class="btn btn-primary btn-lg btn-block btn-blue " > ... More about filensys <FontAwesomeIcon icon={faRightLong} /></a>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="d-grid gap-2">
                                        <a href="/contact-us" type="button" class="btn btn-primary btn-lg btn-block btn-blue " > get a quote <FontAwesomeIcon icon={faRightLong} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Operational framework */}
            <div className="operational-framework d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* title */}
                            <div className="text-center">
                                <h3 className="bottom-line"> operational framework </h3>
                            </div>
                            {/* content */}
                            <div className="py-3">
                                <p> Our operational procedures are aligned with the following ISO standards, CMMI Models, and Project based Software Development Methodologies. </p>
                                <div className="">
                                    <h2> ISO Standards </h2>
                                    <h4> We are aligned with ISO 9000, IS O2700, ISO 5055, ISO 12207, & ISO 29119 standards. </h4>
                                </div>
                                <div className="">
                                    <h2> CMMI Model </h2>
                                    <h4> We are committed to adhere with Capability Maturity Model Integration (CMMI) standards. </h4>
                                </div>
                                <div className="">
                                    <h2> Software Development Methodology </h2>
                                    <h4> We adopt software development methodologies based on project needs. Common methodologies are: Agile, Waterfall, RAD, Big Bang, etc. </h4>
                                </div>    
                            </div>
                            {/* button */}
                            <div className="row pt-3">
                                <div class="col-12 col-md-4">
                                    <div class="d-grid gap-2">
                                    <a href="#review" type="button" class="btn btn-primary btn-lg btn-block btn-yellow " > customers review <FontAwesomeIcon icon={faRightLong} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key satisfaction */}
            <div className="key-satistic d-flex align-items-center bg-lightblue">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* title */}
                            <div className="text-center">
                                <h3 className="bottom-line"> KEY STATISTICS </h3>
                            </div>
                            <h1 className="text-center"> Filensys Technologies at a Glance </h1>
                            <div>
                                <Progressbar />
                            </div>
                            <div className="row ">
                                {/* 1 */}
                                <div className="col-12 col-md-4">
                                    <div class="card text-center text-capitalize">
                                        <div class="card-body">
                                            <h5>5</h5>
                                            <h5>Accomplished Projects</h5>
                                        </div>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="col-12 col-md-4">
                                    <div class="card text-center text-capitalize">
                                        <div class="card-body">
                                            <h5>5</h5>
                                            <h5>Happy Clients</h5>
                                        </div>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="col-12 col-md-4">
                                    <div class="card text-center text-capitalize">
                                        <div class="card-body">
                                            <h5>4</h5>
                                            <h5>Qualifed Employees</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* services */}
            <div className="services d-flex align-items-center bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* title */}
                            <div className="text-center">
                                <h3 className="bottom-line"> SERVICES </h3>
                            </div>
                            <div className="row">
                                {/* service 1 */}
                                <div className="col-12 col-md-4">
                                    <div className="card-redesign">
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
                                                <div class="d-grid gap-2">
                                                    <a href="/about-us" type="button" class="btn btn-primary btn-lg btn-block btn-blue " > more information <FontAwesomeIcon icon={faRightLong} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* service 2 */}
                                <div className="col-12 col-md-4">
                                    <div className="card-redesign">
                                        <div class="card">
                                            <div class="card-header">
                                                <h5 class="card-title blue-color text-center">Graphics & Motion Graphics</h5>
                                            </div>
                                            <div class="card-body">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Institutional Logo Design</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Business Card</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Banner, Signboard</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Brochure, Poster, Hand-bill</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Image Retouch</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Traditional Animation</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />CGI Animation</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />VFX</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />3D Modeling</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />2D/3D Composition</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Cost Effective</li>
                                                </ul>
                                                {/* button */}
                                                {/* button */}
                                                <div class="d-grid gap-2">
                                                    <a href="/contact-us" type="button" class="btn btn-primary btn-lg btn-block btn-blue " > contact us <FontAwesomeIcon icon={faRightLong} /></a>
                                                </div>
                                                <div class="d-grid gap-2">
                                                    <a href="/about-us" type="button" class="btn btn-primary btn-lg btn-block btn-blue " > more information <FontAwesomeIcon icon={faRightLong} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* service 3 */}
                                <div className="col-12 col-md-4">
                                    <div className="card-redesign">
                                        <div class="card">
                                            <div class="card-header">
                                                <h5 class="card-title blue-color text-center">Content Writing and Data Entry</h5>
                                            </div>
                                            <div class="card-body">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Article Writing</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Project Proposal Writing</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />PowerPoint Presentation</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Healthcare Org. Data Entry</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Financial Inst. Data Entry</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />NGO Data Entry</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Researcher’s Data Entry</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Others Org. Data Entry</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Data Analysis & Management</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Quick & Accurate</li>
                                                    <li class="list-group-item"><FontAwesomeIcon icon={faCheck} className="mr-10 yellow-color" />Cost Effective</li>
                                                </ul>
                                                {/* button */}
                                                <div class="d-grid gap-2">
                                                    <a href="/contact-us" type="button" class="btn btn-primary btn-lg btn-block btn-blue " > contact us <FontAwesomeIcon icon={faRightLong} /></a>
                                                </div>
                                                <div class="d-grid gap-2">
                                                    <a href="/about-us" type="button" class="btn btn-primary btn-lg btn-block btn-blue " > more information <FontAwesomeIcon icon={faRightLong} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* clients */}
            <div className="clients d-flex align-items-center bg-lightblue">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* title */}
                            <div className="text-center">
                                <h3 className="bottom-line"> clients </h3>
                            </div>
                            <Client/>
                        </div>
                    </div>
                </div>
            </div>  

            {/* testimonial */}
            <div className="Testimonial d-flex align-items-center bg-white" id="review">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* title */}
                            <div className="text-center">
                                <h3 className="bottom-line"> customer review </h3>
                            </div>
                        </div>
                    </div>
                    <Testimonial />
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
  
  export default Home;