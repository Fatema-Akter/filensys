import React from "react";
import Header from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Progressbar from "./Progressbar";

function Home() {
    return (
        <div className="home-page">
            <div className="bg-green header-section">
                <div className="container">
                <Header /> 
                </div>
                   
            </div>

            {/* banner section */}
            <div className="banner-section d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3> CUTTING-EDGE TECHNOLOGIES BASED IT SOLUTION PROVIDER </h3>
                            <h1 className="py-2"> Diverse and Inclusive Culture
                                <br/> Fostering Collaboration and Creativity
                                <br/>to Drive Innovation and Success.
                            </h1>
                            <h5 className=""> We consistently deliver hight-quality products andservices that meet the needs and expectations of our customers. </h5>
                            <div className="row">
                                <div class="col-3 d-grid">
                                    <button class="btn btn-primary text-uppercase" type="button"> ... More about filensys <FontAwesomeIcon icon={faRightLong} /></button>
                                </div>
                                <div class="col-3 d-grid">
                                    <button class="btn btn-primary text-uppercase" type="button"> get a quote <FontAwesomeIcon icon={faRightLong} /></button>
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
                            <h3 className="text-center pb-5"> operational framework </h3>
                            <p> Our operational procedures are aligned with the following ISO standards, CMMI Models, and Project based Software Development Methodologies. </p>
                            <div className="pb-4">
                                <h2> ISO Standards </h2>
                                <h4> We are aligned with ISO 9000, IS O2700, ISO 5055, ISO 12207, & ISO 29119 standards. </h4>
                            </div>
                            <div className="pb-4">
                                <h2> CMMI Model </h2>
                                <h4> We are committed to adhere with Capability Maturity Model Integration (CMMI) standards. </h4>
                            </div>
                            <div className="pb-4">
                                <h2> Software Development Methodology </h2>
                                <h4> We adopt software development methodologies based on project needs. Common methodologies are: Agile, Waterfall, RAD, Big Bang, etc. </h4>
                            </div>
                            <div className="row pt-4">
                                <div class="col-3 d-grid">
                                    <button class="btn btn-primary text-uppercase" type="button"> customers review <FontAwesomeIcon icon={faRightLong} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key satisfaction */}
            <div className="key-satisfaction d-flex align-items-center bg-green">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center pb-5"> KEY STATISTICS </h3>
                            <h1 className="text-center"> Filensys Technologies at a Glance </h1>
                            <div>
                                <Progressbar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
  }
  
  export default Home;