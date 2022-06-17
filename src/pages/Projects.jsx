import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/Header";
import FooterTwo from "../component/FooterTwo";
import Helmet from "../component/Helmet";
import { Link } from 'react-router-dom';

const list = [
    {
        image: '/assets/images/mobility-bus-2.JPG',
        description: "In partnership with Mobius Mobility, the Raven Labs mechanical team designed and fabricated a wholly custom bus. Given the purpose to deliver iBOTs and train veterans throughout the country a complete overhaul was required.  The redesign includes an oversized slide out, featuring a human elevator and retractable stairs. The cosmetically upgraded interior also features an iBOT service center, classroom training area and storage for 5 iBOTs.  The Mobility Bus successfully completed its maiden voyage tour traveling throughout the US in Summer 2020.",
        title: 'Mobility Bus',
        alt: "Mobility Bus",
        url: '/projects/mobility-bus'
    },
    {
        image: '/assets/images/helium/helium-mapper.jpg',
        description: "Between building out the infrastructure for the open wireless network and developing devices that utilize it, Raven Labs has been with Helium since the start. We've created tools to help optimize our deployments and sensors that use the coverage.",
        title: 'Helium',
        alt: "Helium LoRa Mapper",
        url: '/projects/helium'
    },
    {
        image: '/assets/images/Syringe.jpg',
        description: 'A microliter accurate syringe pump system that was manufactured in house. This pump can perform drug delivery with variable bolus and dwell times over an extended period.  Use cases for this pump include extended biological nourishment delivery, and Oncology drug delivery.',
        title: 'Microliter Pump',
        alt: 'Syringe',
        url: '/projects/syringe'
    },
    {
        image: '/assets/images/catalley.jpg',
        description: "In the heart of Manchester, Raven labs designed and fabricated the entrance to Cat Alley. In this pro bono project, we worked with the city of Manchester and two Artists to bring this public art gallery to life",
        title: 'Cat Alley',
        alt: "Cat Alley Manchester, NH",
        url: '/projects/cat-alley'
    }, 
    {
        image: '/assets/images/atom.jpg',
        description: "When legacy design collides with modern innovation, Raven Labs is the technology mediator. First, Raven Labs reversed engineered and documented components of a functioning particle accelerator assembled in the 1950's which were previously undocumented. Since then, Raven Labs has introduced design innovations within the particle accelerator to provide calibration sensor outputs, capacity to capture of higher energy isotopes, and reduce overall operating costs. ",
        title: 'Particle Accelerator',
        alt: "Atom",
        url: ''
    },
    {
        image: '/assets/images/pills.jpeg',
        description: "When legacy design collides with modern innovation, Raven Labs is the technology mediator. First, Raven Labs reversed engineered and documented components of a functioning particle accelerator assembled in the 1950's which were previously undocumented. Since then, Raven Labs has introduced design innovations within the particle accelerator to provide calibration sensor outputs, capacity to capture of higher energy isotopes, and reduce overall operating costs. ",
        title: 'Remote Pharmacist',
        alt: "prescription pills",
        url: ''
    },
    {
        image: '/assets/images/bloodTest.jpg',
        description: "Developed front end application for a medical device that uses cutting edge technology to rapidly detect an array of blood diseases like Sepsis. This allow patients to get the treatment they need days before a regular blood test would come back",
        title: 'Rapid Blood Test',
        alt: "Blood Test",
        url: ''
    },
    {
        image: '/assets/images/light.jpg',
        description: "Developed the required tools for bringing a optical device prototype to market. Designed and implemented a control sequence utilizing stepper motors and enterprise sensor inputs to validate device specifications  prior to customer shipment.",
        title: 'Monochromator',
        alt: "Monochromator",
        url: ''
    },

]


const Projects = () => {
    return (
        <div>
            <Helmet pageTitle="Projects" />
            <Header homeLink="/"/>

            {/* Start Breadcrumb Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title textWhite">Projects</h2>
                                {/* <p>Ranging from medical devices to custom RV's, Raven Lab's has experience in it all.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrumb Area */}
            
            {list.map((value , index) => (
                <div key={index}>
                    <div className="ptb--120  bg_color--1">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className={`col-lg-5 order-lg-${index%2 ? 2: 1} order-1`}>
                                    <div className="thumbnail">
                                        <img className="w-110" src={value.image} alt={value.alt}/>
                                    </div>
                                </div>
                                <div className={`col-lg-7 order-lg-${index%2 ? 1: 2} order-2`}>
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{value.title}</h2>
                                            <p className="description">{value.description}</p>
                                        </div>
                                        { value.url &&
                                        <div className="pt--20">
                                            <Link className=" rn-button-style--2" to={value.url} ><span>Learn More</span></Link>
                                        </div> }
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>               
            ))}
            

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

export default Projects;
