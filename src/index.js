// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import Home from './home/Home';
import Projects from './home/Projects';


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
