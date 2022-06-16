import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiMail , FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterTwo";


class JuniorMechanical extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Junior Mechanical Position' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="pt--120 pb--190 bg_image bg_image--17"  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title textWhite">Careers</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                <div className="fix">
                    <div className="pt--120 pb--30 bg_color--1">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5 order-1 order-lg-1">
                                    <div className="thumbnail">
                                        <img className="w-110" src="/assets/images/careers/mechanical1.jpg" alt="junior-mechanical-job"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 order-2 order-lg-2" >
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Junior Mechanical Engineer</h2>
                                            <p className="description">We are looking for a young motivated individual who wants to jump start their mechanical engineering career. We are looking for candidates who have a B.S. degree in Engineering and have experience in some of the following fields.
                                            
                                            <ul>
                                                <li>
                                                    Solidworks or other CAD modeling Software
                                                </li>
                                                <li>
                                                    Hands on experience with mechanical assemblies 
                                                </li>
                                                <li>
                                                    Curiosity and desire to be technically challenged
                                                </li>
                                            </ul>   
                                            If you think you would be a good candidate. Send us your resume along with a brief introduction about yourself to the email below.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs">
                                <div className="container">
                                    <div className="row">

                                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt_sm--100"/>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt_sm--100">
                                            <div className="rn-address order-2 order-lg-2">
                                                <div className="icon">
                                                    <FiMail />
                                                </div>
                                                <div className="inner">
                                                    <h4 className="title">Send Resume</h4>
                                                    <p><a href="mailto:resumes@ravenlabsnh.com">Resumes@RavenLabsNH.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* End Contact Top Area  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default JuniorMechanical;