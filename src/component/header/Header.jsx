import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }


    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
        }else{
            logoUrl = <img width="300" src="/assets/images/logo/logo-white-purple.png" alt="Digital Agency" />;
        }

        
        return(
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li><Link to="#">Home</Link>
                                </li>
                                <li className="has-droupdown"><Link to="/services" >Services</Link>
                                    <ul className="submenu">
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/service-details">Mechanical Design</Link></li>
                                        <li><Link to="/service-details">Prototyping</Link></li>
                                        <li><Link to="/service-details">Manufacturing</Link></li>
                                        <li><Link to="/service-details">CAD Modeling</Link></li>
                                        <li><Link to="/service-details">Software</Link></li>
                                        <li><Link to="/service-details">Embedded</Link></li>
                                        <li><Link to="/service-details">Front End Applications</Link></li>
                                        <li><Link to="/service-details">Dev Ops/IT Infrastructure</Link></li>
                                        <li><Link to="/service-details">UI/UX Design</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="#" >Projects</Link>
                                    <ul className="submenu">
                                        <li><Link to="/portfolio">RX Imager</Link></li>
                                        <li><Link to="/portfolio">Monochrometer</Link></li>
                                        <li><Link to="/portfolio">Particle Accelerator</Link></li>
                                        <li><Link to="/portfolio">Kinex</Link></li>
                                        <li><Link to="/portfolio">Medical Devices</Link></li>
                                        
                                    </ul>
                                </li>

                                <li className="has-droupdown"><Link to="#" >Community</Link>
                                    <ul className="submenu">
                                        <li><Link to="/portfolio">Cat Alley</Link></li>
                                        <li><Link to="/portfolio">Ryan??</Link></li>
                                        <li><Link to="/portfolio">Devices</Link></li>
                                    </ul>
                                </li>

                                <li className="has-droupdown"><Link to="#" >Helium</Link>
                                    <ul className="submenu">
                                        <li><Link to="/portfolio">Consulting</Link></li>
                                        <li><Link to="/portfolio">Infrastructure</Link></li>
                                        <li><Link to="/portfolio">IoT Devices</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about" >About</Link></li>

                                
                                <li><Link to="/contact" >Contact</Link></li>
                            </ul>
                        </nav>
                        <div className="header-btn">
                            <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                <span>buy now</span>
                            </a>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;