import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import ServiceList from "../component/ServiceList";
import Header from "../component/Header";
import FooterTwo from "../component/FooterTwo";
import CallAction from "../component/CallAction";
import TextLoop from "react-text-loop";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/Helmet";

class Home extends Component{
    constructor (props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this);
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){     

        return(
            <Fragment> 
                <Helmet pageTitle="Home" />
                <Header />
                {/* Start Slider Area   */}
                
                <div id="home" className="fix">
                    <div className="slider-wrapper">
                        {/* Start Single Slide */}
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--18" data-black-overlay="8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="inner text-left">
                                            <h1 className="title">Specializing in<br/>
                                            <TextLoop interval={1500}>
                                                <span> Mechanical</span>
                                                <span> Software</span>
                                                <span> Human Factors</span>
                                                <span> Robotics</span>
                                            </TextLoop>{" "}

                                            <h2>Engineering</h2>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Slide */}
                    </div>
                </div>
                {/* End Slider Area   */}
                

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--30 mb_sm--0">
                                    <h2 className="title">Our Services</h2>
                                    <p>A handcrafted team of skilled professionals with a combined 50 years of professional experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */}

                {/* Start call To Action  */}
                <CallAction />
                {/* End call To Action  */}

                {/* Start Footer Style  */}
                <FooterTwo />
                {/* End Footer Style  */}

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
export default Home;