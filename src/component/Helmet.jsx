import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} | Raven Labs </title>
                    <meta name="description" content="Engineering firm located in Manchester, NH that offers Mechanical, Software, UX design services" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
