import React from 'react';
import Header from './Header';
import Footer from './Footer';


class Login extends React.Component{
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
            <Header /> 
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

export default Login;