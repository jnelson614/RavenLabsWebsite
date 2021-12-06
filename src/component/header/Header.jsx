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
            logoUrl = <img width="300" src="/assets/images/logo/logo-white-purple.png" alt="Raven Labs" />;
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
                                        <li><Link to="/contact">Services</Link></li>
                                        <li><Link to="/contact">Mechanical Design</Link></li>
                                        <li><Link to="/contact">Prototyping</Link></li>
                                        <li><Link to="/contact">Manufacturing</Link></li>
                                        <li><Link to="/contact">CAD Modeling</Link></li>
                                        <li><Link to="/contact">Software</Link></li>
                                        <li><Link to="/contact">Embedded</Link></li>
                                        <li><Link to="/contact">Front End Applications</Link></li>
                                        <li><Link to="/contact">Dev Ops/IT Infrastructure</Link></li>
                                        <li><Link to="/contact">UI/UX Design</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="#" >Projects</Link>
                                    <ul className="submenu">
                                        <li><Link to="/contact">RX Imager</Link></li>
                                        <li><Link to="/contact">Monochrometer</Link></li>
                                        <li><Link to="/contact">Particle Accelerator</Link></li>
                                        <li><Link to="/contact">Kinex</Link></li>
                                        <li><Link to="/contact">Medical Devices</Link></li>
                                        
                                    </ul>
                                </li>

                                <li className="has-droupdown"><Link to="#" >Community</Link>
                                    <ul className="submenu">
                                        <li><Link to="/contact">Cat Alley</Link></li>
                                        <li><Link to="/contact">Ryan??</Link></li>
                                    </ul>
                                </li>

                                <li className="has-droupdown"><Link to="#" >Helium</Link>
                                    <ul className="submenu">
                                        <li><Link to="/contact">Consulting</Link></li>
                                        <li><Link to="/contact">Infrastructure</Link></li>
                                        <li><Link to="/contact">IoT Devices</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about" >About</Link></li>

                                
                                <li><Link to="/contact" >Contact</Link></li>
                            </ul>
                        </nav>

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