import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";


const Projects = () => {
    return (
        <div>
            <Helmet pageTitle="Projects" />
            <Header homeLink="/"/>

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Projects</h2>
                                    <p>Ranging from medical devices to custom RV's, Raven Lab's has experience in many fields. </p>
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
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/pills.jpeg" alt="prescription pills"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Remote Pharmacist </h2>
                                            <p className="description">Raven Labs helped design, prototype, manufacture, and test an application that allowed Pharmacists to view and approve pending prescription orders for a fortune 500 Company. </p>
                                        </div>
                                        {/* <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div> */}
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
                            <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Particle Accelerator</h2>
                                            <p className="description">Grant did some crazy shit to make an old ass particle accelerator create isotopes reliably.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/atom.jpg" alt="Atom"/>
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
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/light.jpg" alt="Light"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Monochrometer</h2>
                                            <p className="description">Developed testing and calibration tools for a Monochrometer, a optical device. Designed calibration process that utilized stepper motors and enterprise sensors to calibrate the devices before shipping.</p>
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
                            <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Mobility Bus</h2>
                                            <p className="description">Grant also did some crazy shit to retrofit an RV to have a slide-out elevator to assist people with disabilities.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/mobilityBus.jpg" alt="Bus"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End Mobility Bus accelerator area */}

            {/* Start Blood Test area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/bloodTest.jpg" alt="Blood Test"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Rapid Blood Test</h2>
                                            <p className="description">Developed front end application to allow physicians to load blood samples in to a machine to perform automated tests to detect for blood pathogens such as Sepsis.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End Blood Test area */}

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

export default Projects;
