import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import { Link } from 'react-router-dom';

const list = [
    {
        image: '/assets/images/mobility-bus-2.JPG',
        description: "The mechanical team at Raven Labs collaborated with Mobius Mobility to create a one-of-a-kind bus. To fulfill the mission of distributing iBOTs and providing training for veterans across the country, a radical rethinking was necessary. The redesign includes a large slide-out with a human elevator and stairs that can be tucked away. The inside has been given a facelift, and now houses a service center, a classroom for iBOT training, and a storage facility for five of the robots. In the summer of 2020, the Mobility Bus conducted its first cross-country journey.",
        title: 'Mobility Bus',
        alt: "Mobility Bus",
        url: '/projects/mobility-bus'
    },
    {
        image: '/assets/images/helium/helium-mapper.jpg',
        description: "The team at Raven Labs has been involved with Helium from the very beginning. We're helping to increase wireless coverage in the New England region by laying the groundwork for the LoRaWAN network's deployment by deploying hotspots. After optimizing these hotspots for coverage, we've begun developing tools that connect to this public network. Our skillset spans the whole IoT stack, from backend infrastructure to frontend web development and cloud computing.",
        title: 'Helium',
        alt: "Helium LoRa Mapper",
        url: '/projects/helium'
    },
    {
        image: '/assets/images/Syringe.jpg',
        description: 'An in-house fabricated syringe pump with a resolution of a few microliters. This pump is capable of continuous medication administration with varying bolus and dwell durations. This pump has several potential applications, including the supply of long-term biological nutrition and drugs for the treatment of cancer.',
        title: 'Microliter Pump',
        alt: 'Syringe',
        url: '/projects/syringe'
    },
    {
        image: '/assets/images/atom.jpg',
        description: "Raven Labs acts as the technological mediator between antiquated design and cutting-edge advancements. Initial steps included Raven Labs documenting and reverse engineering previously unrecorded parts of a functional particle accelerator originally manufactured in the 1950s. Since then, Raven Labs has made changes to the way the particle accelerator is made so that it can calibrate sensor outputs, be able to catch isotopes with higher energies, and have lower overall operating costs.",
        title: 'Particle Accelerator',
        alt: "Atom",
        url: ''
    },
    {
        image: '/assets/images/pills.jpeg',
        description: "For a Fortune 5 company, Raven Labs was instrumental in the design, prototyping, manufacturing, and testing of an application that enables pharmacists to examine and approve pending prescription order submissions from a remote location.",
        title: 'Remote Pharmacist',
        alt: "prescription pills",
        url: ''
    },
    {
        image: '/assets/images/bloodTest.jpg',
        description: "Raven Labs was a subcontractor for a biomedical firm, where it helped developed the user interface for an innovative medical device.Patients may get the life-saving treatment they need days early because to this device's ability to identify a broad variety of diseases, including sepsis, days before a standard test.",
        title: 'Rapid Blood Test',
        alt: "Blood Test",
        url: ''
    },
    {
        image: '/assets/images/catalley.jpg',
        description: "Raven Labs was responsible for designing the entryway to the historic district known as Cat Alley in Manchester. The creation of this public art gallery was made possible by a volunteer initiative coordinated by the city of Manchester in conjunction with two local artists.",
        title: 'Cat Alley',
        alt: "Cat Alley Manchester, NH",
        url: ''
    },
    {
        image: '/assets/images/light.jpg',
        description: "Raven Labs developed a testing platform for a manufacturer's production line using an automation suite comprised of stepper motors and precision sensors. By using this automation package, the client could rest certain that its high precision optical components will always be shipped to clients within the specified tolerance.",
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
