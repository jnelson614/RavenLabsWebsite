import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "./Header";
import FooterTwo from "./FooterTwo"
import TabTwo from "./ProjectDetails";
import Helmet from "./Helmet";
import { VideoTag } from "react-video-tag";

class IndividualProject extends Component{
    render(){
        return(
            <Fragment> 
                <Helmet pageTitle={this.props.pageTitle} />
                
                <Header homeLink="/"/>
                
                {/* Start Breadcrumb Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title textWhite">Projects</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrumb Area */}

                {/* Start About Area */}
                <div className="about-area about-position-top pb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        {this.props.video && 
                                        <VideoTag className="w-100" autoPlay={`${true}`} muted={`${true}`} playsInline={`${true}`} loop={`${true}`}  src={`${"/assets/images/digital-sign.MOV"}`}/>}

                                        {this.props.image && 
                                        <img className="w-100" src={this.props.image} alt={this.props.alt}/> }
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner pt--100">
                                        <div className="section-title">
                                            <h2 className="title">{this.props.title}</h2>
                                            <p className="description">{this.props.description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo teamMembers={this.props.teamMembers} client={this.props.client} timespan={this.props.timespan} hardware={this.props.hardware} tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}


                <FooterTwo />

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}


export default IndividualProject;