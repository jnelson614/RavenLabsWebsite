import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";


const Service = () => {
    return (
        <div>
            <Helmet pageTitle="Services" />
            <Header homeLink="/"/>

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title textWhite">Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}
            

            {/* Start RX Imager Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5 order-1 order-lg-1">
                                    <div className="thumbnail">
                                        <img className="w-80" src="/assets/images/service/solidworks.jpg" alt="mechanical"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 order-2 order-lg-2" >
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Mechanical Design</h2>
                                            <p className="description">Our expertise with CAD technologies allows us to model and prototype your idea with precision. In order to guarantee that our design will be capable of doing the job at hand, we run additional tests such as thermal, stress, and fluid dynamics once the modeling phase is complete.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End RX Imager Area */}


            {/* Start Particle accelerator area */}

            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                
                                <div className="col-lg-7 order-2 order-lg-1" >
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Embedded Software </h2>
                                            <p className="description"> One of Raven Labs' specialties is developing software that manages physical devices. Our team of developers has spent over three decades perfecting embedded software for use in healthcare, robotics, and the Internet of Things. Our test-driven development process ensures rapid iteration, optimization, and the delivery of high-quality software that can be used with confidence on any hardware. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-1 order-lg-2">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/service/embedded.jpg" alt="circuit"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* End Particle accelerator area */}


            {/* Start monochrometer area */}

            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5 order-1 order-lg-1">
                                    <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/service/python.jpg" alt="software"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 order-2 order-lg-2" >
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Front End Development</h2>
                                            <p className="description">Clean interfaces and user-friendly layouts. For medical and research equipment, Raven Labs has created console apps in WPF (C#), DearPyGUI (Python), Tkinter (Python), and QT (Python), in addition to a small number of web-based applications. Raven Labs can assist with the creation and development of your next application by utilizing the services of industry-leading user experience designers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End monochrometer area */}

            {/* Start Mobility Bus area */}

            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                
                                <div className="col-lg-7 order-2 order-lg-1" >
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Prototyping</h2>
                                            <p className="description">The ability to materialize any vision. We have an army of 3D printers of several sizes at our disposal, so we can rapidly prototype your concept for testing in the field and iterative improvements. If 3D printing isn't a good fit, we also have access to CNC equipment, laser cutters, lathes, and injection molds.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-1 order-lg-2">
                                    <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/service/printers.jpg" alt="Printers"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End Mobility Bus accelerator area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </div>
    )
}

export default Service;
