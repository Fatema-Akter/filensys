import React from 'react';

//fontawesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';



class HeaderTop extends React.Component{
    constructor(props){
        super(props);
        this.state="";
    }
    render(){
        return(
            <div className="bg-lightblue font-12 blue-color">
                <div className="row">
                    <div className="col-12 col-md-6 h-right">
                        <div className="d-flex justify-content-between">
                            {/* phone */}
                            <div className="phone d-flex align-items-center px-5">
                                <FontAwesomeIcon icon={faPhone} className="mr-10 blue-color" />
                                <p className="mb-0"> +8801747-225294 </p>
                            </div>
                            {/* email */}
                            <div className="email d-flex align-items-center px-5">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-10 blue-color" />
                                <p className="mb-0"> info@filensys.com </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-center">
                            <div className="language px-5">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>English</option>
                                    <option value="1">Bangla</option>
                                </select>
                            </div>
                            <div className="news px-5">
                                <a className="nav-link" href="/" activeClassName="active">News</a>
                            </div>
                            <div className="career px-5">
                                <a className="nav-link" href="/" activeClassName="active">Career Opportunity</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default HeaderTop;