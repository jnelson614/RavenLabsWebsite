import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import CounterOne from "../elements/counters/CounterOne";
import { FaFacebookF , FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";

const EmployeeList = [
    {
        source: "/assets/images/team/Grant_Headshot.png",
        name: "Grant Peret",
        role: "CEO/Mechanical Engineer",
        facebook: "https://www.facebook.com/grant.peret",
        linkedin: "https://www.linkedin.com/in/grant-peret-64a3b876/"
    },
    {
        source: "/assets/images/team/Jeff_Headshot.png",
        name: "Jeff Nelson",
        role: "CIO/Software Engineer",
        facebook: "https://www.facebook.com/jeff.nelson.923519",
        linkedin: "https://www.linkedin.com/in/jrnelson43/"
    },
    {
        source: "/assets/images/team/Bob.png",
        name: "Bob Peret",
        role: "CTO/Embedded Engineer",
        facebook: "https://www.facebook.com/bob.peret",
        linkedin: "https://www.linkedin.com/in/bob-peret-74683a1/"
    },
    {
        source: "/assets/images/team/Kyle_Headshot.png",
        name: "Kyle Robertson",
        role: "Dev Ops/Cloud Architect/Data Scientist",
        facebook: "https://www.facebook.com/kyle.robertson.3591",
        linkedin: "https://www.linkedin.com/in/kyle-robertson-4059a9104/"
    },
    {
        source: "/assets/images/team/Julia_Headshot.png",
        name: "Julia Paranay",
        role: "Senior Product Designer",
        facebook: "https://www.facebook.com/jeparanay",
        linkedin: "https://www.linkedin.com/in/juliaparanay/"
    },
    {
        source: "/assets/images/team/Sam_Headshot.png",
        name: "Sam Pierce",
        role: "Senior UX Designer",
        facebook: "https://www.facebook.com/sam.pierce.338",
        linkedin: "https://www.linkedin.com/in/sam-pierce-43b682162/"
    }
]

class About extends Component{
    render(){
        let title = 'About Us',
        description = 'Grant Peret launched Raven Labs in the basement of his fathers home in 2019, initially 3D printing and designing parts for a small number of clients. With the hiring of Jeff Nelson and Bob Peret in 2021 and the acquisition of increasingly large clients, Raven Labs expanded into a business that provided mechanical design and software engineering services for anything from automated warehouse systems to medical equipment. The current location of Raven Labs in Manchester, New Hampshire. '
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="pt--120 pb--190 bg_image bg_image--17"  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title textWhite">About Us</h2>
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
                            {EmployeeList.map( (val, i) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <div className="team">
                                        <div className="thumbnail">
                                            <img className="w-100" src={val.source} alt="Grant Peret"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">{val.name}</h4>
                                            <p className="designation">{val.role}</p>
                                        </div>
                                        <ul className="social-icon" >
                                            <li><a href={val.linkedin}><FaLinkedinIn /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
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