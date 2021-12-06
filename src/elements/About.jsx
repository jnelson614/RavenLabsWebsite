import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";


class About extends Component{
    render(){
        let title = 'About Us',
        description = 'Founded in 2019 by Grant Peret, Raven Labs started off in the basement of Grants childhood house 3D printing and modeling components for a few clients. After landing bigger and bigger clients, and with the addition of Jeff Nelson and Bob Peret in 2021, Raven Labs grew to a company offering services from mechanical design to software engineering ranging from automated warehouse solutions to medical devices. Raven Labs is now established in the heart of Manchester, NH. '
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/OldManchester.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                 {/* Start CounterUp Area */}
                 <div className="rn-counterup-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Numbers we are Proud of</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}


                {/* Start Team Area  */}
                <div className="rn-team-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25">
                                    <h2 className="title">Meet the Team</h2>
                                    <p>This skilled team has tackled it all.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            
                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" height="390" src="/assets/images/team/Grant.jpg" alt="Grant Peret"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Grant Peret</h4>
                                        <p className="designation">CEO/Mechanical Engineer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/grant.peret"><FaFacebookF /></a></li>
                                        <li><a href="https://www.linkedin.com/in/grant-peret-64a3b876/"><FaLinkedinIn /></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Single Team  */}

                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/Jeff.jpg" alt="Jeff Nelson"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Jeff Nelson</h4>
                                        <p className="designation">CIO/Software Engineer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Single Team  */}

                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/Bob.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Bob Peret</h4>
                                        <p className="designation">CTO/Embedded Engineer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/bob.peret"><FaFacebookF /></a></li>
                                        <li><a href="https://www.linkedin.com/in/bob-peret-74683a1/"><FaLinkedinIn /></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Single Team  */}

                        </div>
                    </div>
                </div>

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <FooterTwo />

            </React.Fragment>
        )
    }
}
export default About