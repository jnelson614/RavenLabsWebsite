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
                                    <p>Ranging from medical devices to custom RV's, Raven Lab's has experience in it all.</p>
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
                                            <p className="description">Raven Labs helped design, prototype, manufacture, and test an application that allows a Pharmacists to view and approve pending prescription orders remotely for a fortune 500 Company. </p>
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
                                            <p className="description">Grant did some crazy shit to make an old ass particle accelerator create isotopes reliably. This works by colliding atoms at a very high speed</p>
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
                                            <p className="description">Developed testing and calibration tool for an optical device for a production setting. Designed calibration process that utilized stepper motors and enterprise sensors to calibrate the devices, and make sure the device is within specification, before shipping out to customers.</p>
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
                                            <p className="description">Grant also did some crazy shit to retrofit an RV to have a slide-out elevator to assist people with disabilities. It has loads of safety features and has recently toured the country on it's debut voyage.</p>
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
                                            <p className="description">Developed front end application for a medical device that uses cutting edge technology to rapidly detect an array of blood diseases like Sepsis. This allow patients to get the treatment they need days before a regular blood test would come back</p>
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
