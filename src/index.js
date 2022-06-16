// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Service from "./pages/Service";
import Helium from "./pages/Helium";
import About from "./pages/About";
import Career from "./pages/Career";
import JuniorMechanicaL from "./pages/JuniorMechanical";
import Syringe from './pages/Syringe';
import Contact from "./pages/Contact";
import error404 from "./pages/error404";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ComingSoon from './pages/ComingSoon';
import MechanicalIntern from './pages/MechanicalIntern';
import SoftwareIntern from './pages/SoftwareIntern';
import Mobility from './pages/Mobility';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/coming-soon`} component={ComingSoon}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={Projects}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/projects/syringe`} component={Syringe}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/projects/mobility-bus`} component={Mobility}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/projects/helium`} component={Helium}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/services`} component={Service}/>
                        
                        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/careers`} component={Career}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/careers/mechanical-job-1`} component={JuniorMechanicaL}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/careers/mechanical-job-2`} component={MechanicalIntern}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/careers/software-job-1`} component={SoftwareIntern}/>
                        
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.unregister();
