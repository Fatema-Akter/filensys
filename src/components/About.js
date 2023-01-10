import React from 'react';
import Header from './Header';
import Footer from './Footer';


class About extends React.Component{
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
                  <h1 className="pt-5 wheat-color ">About @ Filensys Technologies</h1>
              </div>
            </div>
          </div>  
        </div>

        {/* our background section */}
        <div className="our-background">
          <div className="container">
            <div className="row">
                <div className="col-12 py-5">
                  <h3 className="pt-5 blue-color bottom-line text-uppercase">BACKGROUND</h3>
                  <p>
                    Filensys Technology was founded in 2021 by (1) Mohammad Shamsul Alam, (2) Showkat Ali, (3) Md. Abu Musa, and (4) Fatema Akter with the goal
                    of providing innovative and reliable technology solutions to businesses and organizations. Over the years, we have grown to become a leading
                    provider of web application solution and have served a diverse range of clients across different types of business and non-profit organizations . Our
                    team is comprised of highly skilled and experienced professionals with a passion for using technology to drive progress and make a positive impact
                    on the world. we are committed to continuing to provide exceptional value to our clients and to staying at the forefront of technological development.
                  </p>
              </div>
            </div>
          </div>  
        </div>

        {/* vision section */}
        <div className="our-vision bg-lightblue">
          <div className="container">
            <div className="row">
                <div className="col-12 py-5">
                  <h3 className="pt-5 blue-color bottom-line text-uppercase">vision</h3>
                  <p>
                    To be the leading provider of innovative, reliable, and secure technology solutions that empower our clients to achieve their business goals and improve the world through the responsible use of technology.
                  </p>
              </div>
            </div>
          </div>  
        </div>

        {/* mission section */}
        <div className="our-mission">
          <div className="container">
            <div className="row">
                <div className="col-12 py-5">
                  <h3 className="pt-5 blue-color bottom-line text-uppercase">mission</h3>
                  <p>
                    Our mission is to deliver exceptional value to our clients through the use of innovative, reliable, and secure technology solutions. We are
                    dedicated to staying at the forefront of technological development and providing our clients with the tools and support they need to succeed
                    in the digital age. We are committed to building long-term relationships with our clients based on trust, collaboration, and a shared passion
                    for using technology to drive progress and make a positive impact on the world.
                  </p>
              </div>
            </div>
          </div>  
        </div>

        {/* core values */}
        <div className="core-values bg-lightblue">
          <div className="container">
            <div className="row">
                <div className="col-12 py-5">
                  <h3 className="pt-5 blue-color bottom-line text-uppercase">core values</h3>
                  <p className="">
                    Excellence: We strive for the highest standards of quality in all that we do.
                  </p>
                  <p className="">
                    Innovation: We are constantly seeking new and better ways to serve our clients and stay ahead of the curve.
                  </p>
                  <p className="">
                    Responsibility: We are committed to using technology ethically and responsibly, and to considering the impact of our work on society and the environment.
                  </p>
                  <p className="">
                    Collaboration: We value teamwork and partnership, and believe that the best results come from working together with our clients and colleagues.
                  </p>
                  <p className="">
                    Customer focus: We are dedicated to meeting the needs and exceeding the expectations of our clients.
                  </p>
                  <p className="">
                    Integrity: We conduct all of our business with honesty and transparency, and treat our clients, colleagues, and partners with respect and fairness.
                  </p>
              </div>
            </div>
          </div>  
        </div>

        {/* key objective */}
        <div className="our-mission">
          <div className="container">
            <div className="row">
                <div className="col-12 py-5">
                  <h3 className="pt-5 blue-color bottom-line text-uppercase">key objective</h3>
                  <p className="">
                    To consistently deliver innovative, reliable, and secure technology solutions that exceed the expectations of our clients.
                  </p>
                  <p className="">
                    To maintain a leading position in the IT industry through ongoing investment in research and developmen.
                  </p>
                  <p className="">
                    To create a positive and inclusive work environment that attracts and retains top talent.
                  </p>
                  <p className="">
                    To build long-term, mutually beneficial relationships with our clients, based on trust and collaboration.
                  </p>
                  <p className="">
                    To contribute to the responsible use of technology and to the advancement of society through our products and services.
                  </p>
                  <p className="">
                    To achieve financial stability and growth through the delivery of exceptional value to our clients.
                  </p>
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

export default About;