// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import Demo from './page-demo/Demo';
import MainDemo from './home/MainDemo';
import Startup from './home/Startup';
import Paralax from './home/Paralax';
import HomePortfolio from './home/HomePortfolio';
import DigitalAgency from './home/DigitalAgency';
import CreativeAgency from './home/CreativeAgency';
import PersonalPortfolio from './home/PersonalPortfolio';
import Home from './home/Home';
import StudioAgency from './home/StudioAgency';
import Projects from './home/Projects';
import CreativeLanding from './home/CreativeLanding';
import HomeParticles from './home/HomeParticles';
import CreativePortfolio from './home/CreativePortfolio';
import DesignerPortfolio from './home/DesignerPortfolio';
import InteriorLanding from './home/Interior';
import CorporateBusiness from './home/CorporateBusiness';
import InteractiveAgency from './home/InteractiveAgency';

// Dark Home Layout 
import DarkMainDemo from './dark/MainDemo';
import DarkPortfolioLanding from './dark/PortfolioLanding';

// Element Layout
import Service from "./elements/Service";
import Helium from "./elements/Helium";
import About from "./elements/About";
import Contact from "./elements/Contact";
import error404 from "./elements/error404";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ComingSoon from './elements/ComingSoon';

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
