import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import CallAction from "../elements/callaction/CallAction";
import TextLoop from "react-text-loop";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--17',
        category: '',
        title: 'Mechanical.',
        description: 'Mechanical engineering from prototyping to design',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--18',
        category: '',
        title: 'Software.',
        description: 'Full stack software engineers from embedded to UI',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--19',
        category: '',
        title: 'Design.',
        description: 'UX and UI designs.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

class Home extends Component{
    constructor (props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this);
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        var namesItemOne = [
            'The Philosophy Of business analytics',
            'Fast-Track Your business',
            'Lies And Damn Lies About business',
            'The Ultimate Deal On business',
        ];
        var namesItemTwo = [
            'Proof That business Really Works',
            'Here Is What You Should Do For Your business',
            'The Hidden Mystery Behind business',
        ];
        
        const PostList = BlogContent.slice(0 , 3);

        return(
            <Fragment> 
                <Helmet pageTitle="Home" />
                <Header />
                {/* Start Slider Area   */}
                {/* <div className="slider-wrapper">
                    <div className="slider-activation">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                <div className={`slide slide-style-2 d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div> */}

                <div id="home" className="fix">
                    <div className="slider-wrapper">
                        {/* Start Single Slide */}
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--18" data-black-overlay="8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="inner text-left">
                                            <h1 className="title">Specializing in<br/>
                                            <TextLoop>
                                                <span> Mechanical</span>
                                                <span> Software</span>
                                                <span> Human Factors</span>
                                                <span> Robotics</span>
                                            </TextLoop>{" "}

                                            <h2>Engineering</h2>
                                            </h1>
                                            {/* {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Slide */}
                    </div>
                </div>
                {/* End Slider Area   */}
                

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--30 mb_sm--0">
                                    <h2 className="title">Our Service</h2>
                                    <p>A handcrafted team of skilled professionals with a combined 50 years of professional experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */}

                {/* Start call To Action  */}
                <CallAction />
                {/* End call To Action  */}

                {/* Start Footer Style  */}
                <FooterTwo />
                {/* End Footer Style  */}

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
export default Home;