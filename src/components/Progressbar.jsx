import React from "react";
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

  const percentage = 71;

  class Progressbar extends React.Component{
    constructor(props){
        super(props);
        this.state="";
    }
    render(){
        return(
            <div>
                <div>
                    <div className="row p-5">
                        <div className="col-4">
                            <div className="bg-white">
                                <div className="p-5">
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        background
                                        backgroundPadding={6}
                                        styles={buildStyles({
                                        backgroundColor: "#3e98c7",
                                        textColor: "#fff",
                                        pathColor: "#fff",
                                        trailColor: "transparent"
                                        })}
                                    />
                                </div>
                                <h4 className="text-center pb-5">Job satisfaction</h4>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-white">
                                <div className="p-5">
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${85}%`}
                                        background
                                        backgroundPadding={6}
                                        styles={buildStyles({
                                        backgroundColor: "#3e98c7",
                                        textColor: "#fff",
                                        pathColor: "#fff",
                                        trailColor: "transparent"
                                        })}
                                    />
                                </div>
                                <h4 className="text-center pb-5">growth rate</h4>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-white">
                                <div className="p-5">
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${79}%`}
                                        background
                                        backgroundPadding={6}
                                        styles={buildStyles({
                                        backgroundColor: "#3e98c7",
                                        textColor: "#fff",
                                        pathColor: "#fff",
                                        trailColor: "transparent"
                                        })}
                                    />
                                </div>
                                <h4 className="text-center pb-5">client satisfaction</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    } 
}

export default Progressbar;