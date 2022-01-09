import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterTwo";

const list = [
    {
        image: 'image-1',
        category: 'Deployment',
        title: 'Solar Powered Hotspots'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: ' Helium Hotspot Mapper'
    },
    {
        image: 'image-3',
        category: 'Deployment',
        title: 'Yaggi Antenna install'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Prototyping'
    },
    {
        image: 'image-5',
        category: 'Deployment',
        title: 'Outdoor Install'
    },
    {
        image: 'image-6',
        category: 'Development',
        title: 'DIY Alpha Hotspot'
    },
    {
        image: 'image-7',
        category: 'Deployment',
        title: 'Hotspot fans'
    }
]

class Helium extends Component{
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
                <PageHelmet pageTitle='Helium' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="pt--120 pb--190 bg_image bg_image--2"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title textWhite">Helium</h2>
                                    {/* <p>Developing devices for the People's Network</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}
                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--60 pb--140 bg_color--5">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-center pb--60 mb--15" >
                                        <h2 className="title pb--20">Hands on Experience</h2>
                                        <p>Since it's infancy, Raven Labs has been engaged with the helium network.
                                            With only 278 in the world, Raven Labs developed 2 of the first Do-It-Yourself hostspots built with off the shelf hardware.
                                            Operating now 40+ hotspots from an variety of manufactures, Raven labs has specialized every deployment with custom enclosures, hardware, and aftermarket
                                            antennas that best suites the environment. Our expertise doesnt stop here though. We have developed a handful of IoT devices
                                            that utilize the network along with an array of Cloud based monitoring tools to optimize our workflow.
                                            With hundred of hours invested in to the Helium Network and experience in the whole ecosystem, Raven Labs is here to bring your IoT idea to life
                                            on the Helium Network!</p>
                                    </div>
                                    
                                    
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="helium" key={index}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

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
export default Helium;