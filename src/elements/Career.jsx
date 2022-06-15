import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import { Link  } from 'react-router-dom';


const list = [
    {
        image: 'image-1',
        category: 'Engineer',
        title: 'Junior Mechanical Engineer',
        url: '/mechanical-job-1'
    },
    {
        image: 'image-2',
        category: 'Intern',
        title: 'Software Engineering Intern',
        url: '/mechanical-job-1'
    },
    {
        image: 'image-3',
        category: 'Intern',
        title: 'Mechanical Engineering Intern',
        url: '/mechanical-job-1'
    }
   
]

class Career extends Component{
    render(){
        
        let title = 'Come work with us!',
        description = 'Bored of working on the same project month after month? Have you not not been learning any new skiils or technologies at your current Job? Come work at Raven Labs where each day is different. Most projects Raven Labs work on is on a 3-6 month timeline. Our Employees dont just work in one field either. We like our employees to jump around and learn new skills.'
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Careers' />

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

                {/* Start About Area  */}
                <div className="ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/careers/WorkingTogether.png" alt="Working Together"/>
                                </div>
                            </div>
                            <div className="col-lg-7 about-inner">
                                <div className="section-title">
                                    <h2 className="title">{title}</h2>
                                    <p className="description">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                <div className="portfolio-area pt--60 pb--140 bg_color--5">
                    <div className="portfolio-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section-title">
                                        <h2>Open Positions</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rn-slick-dot  pt--20">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="careers" key={index}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4><a href={`${value.url}`}>{value.title}</a></h4>
                                                        </div>
                                                    </div>
                                                    <Link className="link-overlay" to= {`${value.url}`}></Link>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
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
export default Career