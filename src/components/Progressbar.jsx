import React from "react";
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";


// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const percentage1 = 71;
const percentage2 = 85;
const percentage3 = 79;

  class Progressbar extends React.Component{
    constructor(props){
        super(props);
        this.state="";
    }
    render(){
        return(
            <div>
                <div class="row">
                    {/* item 1 */}
                    <div class="col-12 col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <div className="p-5">
                                <AnimatedProgressProvider
                                    valueStart={0}
                                    valueEnd={percentage1}
                                    duration={2}
                                    easingFunction={easeQuadInOut}
                                    
                                >
                                    {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        strokeWidth={5}
                                        styles={buildStyles({
                                            textColor: "#0b137c",
                                            pathColor: "#FFB100",
                                            trailColor: "#dfe0eb"
                                          })}
                                        />
                                    );
                                    }}
                                </AnimatedProgressProvider>
                                </div>
                                <h5 class="card-title text-center">Job satisfaction</h5>
                            </div>
                        </div>
                    </div>
                    {/* item 2 */}
                    <div class="col-12 col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <div className="p-5">
                                <AnimatedProgressProvider
                                    valueStart={0}
                                    valueEnd={percentage2}
                                    duration={2}
                                    easingFunction={easeQuadInOut}
                                        
                                >
                                {value => {
                                const roundedValue = Math.round(value);
                                return (
                                        <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        strokeWidth={5}
                                        styles={buildStyles({
                                        textColor: "#0b137c",
                                        pathColor: "#FFB100",
                                        trailColor: "#dfe0eb"
                                        })}
                                    />
                                );
                                }}
                                </AnimatedProgressProvider>
                                </div>
                                <h5 class="card-title text-center">Job satisfaction</h5>
                            </div>
                        </div>
                    </div>
                    {/* item 3 */}
                    <div class="col-12 col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <div className="p-5">
                                <AnimatedProgressProvider
                                    valueStart={0}
                                    valueEnd={percentage3}
                                    duration={2}
                                    easingFunction={easeQuadInOut}
                                    
                                >
                                    {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        strokeWidth={5}
                                        styles={buildStyles({
                                            textColor: "#0b137c",
                                            pathColor: "#FFB100",
                                            trailColor: "#dfe0eb"
                                          })}
                                        />
                                    );
                                    }}
                                </AnimatedProgressProvider>
                                </div>
                                <h5 class="card-title text-center">Job satisfaction</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    } 
}

export default Progressbar;