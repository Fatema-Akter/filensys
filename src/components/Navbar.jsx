import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state="";
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg">
                    <NavLink className="navbar-brand logo" to="/">
                        <img src={Logo}  alt="logo" style={{height: "100px", width: "100px"}} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" aria-current="page" to="/" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about-us" activeClassName="active">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services" activeClassName="active">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/portfolio" activeClassName="active">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact-us" activeClassName="active">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
            </nav>
        );
    }
}

export default Navbar;