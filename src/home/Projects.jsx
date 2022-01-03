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
                                <div className="col-lg-5 order-1 order-lg-1">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/pills.jpeg" alt="prescription pills"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 order-2 order-lg-2" >
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
                                
                                <div className="col-lg-7 order-2 order-lg-1" >
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Particle Accelerator </h2>
                                            <p className="description">When legacy design collides with modern innovation, Raven Labs is the technology mediator. First, Raven Labs reversed engineered and documented components of a functioning particle accelerator assembled in the 1950's which were previously undocumented. Since then, Raven Labs has introduced design innovations within the particle accelerator to provide calibration sensor outputs, capacity to capture of higher energy isotopes, and reduce overall operating costs. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-1 order-lg-2">
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
                                <div className="col-lg-5 order-1 order-lg-1">
                                    <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/light.jpg" alt="Light"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 order-2 order-lg-2" >
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Monochrometer</h2>
                                            <p className="description">Developed the required tools for bringing a optical device prototype to market. Designed and implemented a control sequence utilizing stepper motors and enterprise sensor inputs to validate device specifications  prior to customer shipment.</p>
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
                                            <h2 className="title">Mobility Bus</h2>
                                            <p className="description">In partnership with Mobius Mobility, the Raven Labs mechanical team designed and fabricated a wholly custom bus. Given the purpose to deliver iBOTs and train veterans throughout the country a complete overhaul was required.  The redesign includes an oversized slide out, featuring a human elevator and retractable stairs. The cosmetically upgraded interior also features an iBOT service center, classroom training area and storage for 5 iBOTs.  The Mobility Bus successfully completed its maiden voyage tour travelling throughout the US in Summer 2020.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-1 order-lg-2">
                                    <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/mobilityBus.JPG" alt="Bus"/>
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
                                <div className="col-lg-5 order-1 order-lg-1">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/bloodTest.jpg" alt="Blood Test"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 order-2 order-lg-2" >
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


            {/* Start Cat Alley area */}

            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                
                                <div className="col-lg-7 order-2 order-lg-1" >
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Cat Alley</h2>
                                            <p className="description">In the heart of Manchester, Raven labs designed and fabricated the entrance to Cat Alley. In this pro bono project, </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-1 order-lg-2">
                                    <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/catalley.jpg" alt="Cat Alley"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End Cat alley area */}

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
