import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones , FiMail , FiMapPin, FiChevronUp } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import GoogleMaps from "../component/GoogleMap";

const AnyReactComponent = ({ text }) =>
    <div className="map-pin">
        <FiMapPin  size={52}/>
    </div>

class Contact extends Component{
    static defaultProps = {
        center: {
            lat: 42.99,
            lng: -71.46
        },
        zoom: 16
    };

    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Contact' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                 {/* Start Breadcrump Area */}
                 <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title textWhite">Connect With Us</h2>
                                    <p>Have a question or want to learn more? Shoot us an email.     </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}


                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5">
                    <div className="container">
                       
                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact With Phone Number</h4>
                                        <p><a href="tel:603 769 0788">1-(603)-769-0788</a></p>
                                        <p><a href="tel:978 771 8928">1-(978)-771-8928</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt_sm--100">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email Address</h4>
                                        <p><a href="mailto:hello@ravenlabsnh.com">Hello@RavenLabsNH.com</a></p>
                                        <p><a href="mailto:Engineering@ravenlabsnh.com">Engineering@RavenLabsNH.com</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--100 mt_sm--100">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Location</h4>
                                        <p>913 Elm Street Suite 405<br />Manchester, NH 03101</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}

                {/* Start Contact Map  */}
                <div className="rn-contact-map-area position-relative">
                    <div style={{ height: '650px', width: '100%' }}>
                        <GoogleMaps latitude={42.991276388151206} longitude={-71.46267365636591}/>
                        {/* <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyB0UNE15owolCqv_vCC4usVLxSdoQh1O-g" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        >
                        <AnyReactComponent
                            lat={this.props.center.lat}
                            lng={this.props.center.lng}
                            text="Raven Labs HQ"
                        />
                        </GoogleMapReact> */}
                    </div>
                </div>
                {/* End Contact Map  */}
                

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
export default Contact