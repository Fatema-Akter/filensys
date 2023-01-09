import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Login from './components/login';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state="";
    }
    render(){
        return(
            <div>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about-us" component={About} />
                  <Route exact path="/services" component={Services} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/contact-us" component={Contact} />
                  <Route exact path="/login" component={Login} />
              </Switch>
            </div>
        );
    } 
}

export default App;
