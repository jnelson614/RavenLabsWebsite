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
                                            <p className="description">From Modeling to Prototyping, our skills in CAD tools will bring your design to life. We dont just stop at modeling, from there we can perform thermo, stress, and fluid dynamics test to ensure your design will meet your problems challenges.
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
                                            <p className="description"> Controlling hardware with software is one of Raven Labs expertise. Our engineers have 30 plus years developing embedded software for
                                            medical, robotic, and IoT devices. Our test driven approach allows us to quickly iterate, optimize, and produce robust quality software that will safely run any hardware </p>
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
                                            <p className="description">Sleek UI's and intuitive designs. Raven Labs has developed console applications in WPF (C#), DearPyGUI (Python), Tkinter (Python), QT (Python) for medical and research devices and a
                                            handful of web based application. With the ability to leverage top tier UX designers, Raven labs can help craft and develop your next application </p>
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
                                            <p className="description">Making any idea come a reality. With an army of 3D printers ranging in all sizes, we can quickly prototype your design for field testing and quick iterations. If 3D printing doesn't fit your needs, we have access to to CNC machines, laser cutter, lathes, and injection moldings
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
