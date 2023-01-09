import React from 'react';



class FooterBottom extends React.Component{
    constructor(props){
        super(props);
        this.state="";
    }
    render(){
        return(
            <div className="row pt-1">
                {/* footer bottom */}
                <div className="col-12 col-md-6">
                    <div className="left font-15">
                        <p>All rights reserved © 20120-2022 | Filensys Technologies </p>
                    </div>    
                </div>
                <div className="col-12 col-md-6">
                    <div className="right font-15">
                        <a href="/" className="blue-color">Terms of use </a> | <a href="/" className="blue-color"> Privacy Policy </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterBottom;