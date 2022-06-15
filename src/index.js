// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

import Home from './home/Home';
import Projects from './elements/Projects';
import Service from "./elements/Service";
import Helium from "./elements/Helium";
import About from "./elements/About";
import Career from "./elements/Career";
import JuniorMechanicaL from "./elements/JuniorMechanical";
import PersonalPortfolio from './elements/PersonalPortfolio';
import Contact from "./elements/Contact";
import error404 from "./elements/error404";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ComingSoon from './elements/ComingSoon';
import MechanicalIntern from './elements/MechanicalIntern';
import SoftwareIntern from './elements/SoftwareIntern';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/coming-soon`} component={ComingSoon}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={Projects}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/services`} component={Service}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/helium`} component={Helium}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/careers`} component={Career}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/careers/mechanical-job-1`} component={JuniorMechanicaL}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/careers/mechanical-job-2`} component={MechanicalIntern}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/careers/software-job-1`} component={SoftwareIntern}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/projects/syringe`} component={PersonalPortfolio}/>
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
