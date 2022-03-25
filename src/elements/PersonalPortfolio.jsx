import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo"
import TabTwo from "../elements/TabTwo";
import Helmet from "../component/common/Helmet";


const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Freelance digital designer',
        title: 'Hello, I’m <span>Nancy</span> Welcome to my World.',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]
class PersonalPortfolio extends Component{
    render(){
        let title = 'Microliter Syringe Pump',
        description = 'A microliter accurate syringe pump system that was manufactured in house. This pump can perform drug delivery with variable bolus and dwell times over an extended period.  Use cases for this pump include extended biological nourishment delivery and oncology drug delivery.';
        return(
            <Fragment> 
                <Helmet pageTitle="Microliter pump" />
                
                <Header homeLink="/"/>
                
                {/* Start Breadcrump Area */}
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
                {/* End Breadcrump Area */}
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div className="about-area about-position-top pb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/syringeOnly.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner pt--100">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
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

export default PersonalPortfolio;