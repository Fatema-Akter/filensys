import React from 'react';
import HeaderTop from './Header-Top';
import Navbar from './Navbar';



class Header extends React.Component{
    constructor(props){
        super(props);
        this.state="";
    }
    render(){
        return(
            <div className="bg-lightblue fixed-top">
                <div className="header-top">
                    <HeaderTop/>
                    <hr className="line"  />
                </div>
                <div className="header-area">
                    <Navbar/>
                </div>
            </div>
        );
    }
}

export default Header;