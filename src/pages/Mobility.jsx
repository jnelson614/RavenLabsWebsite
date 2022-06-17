import React, { Component , Fragment } from "react";
import IndividualProject from "../component/IndividualProject"


class Mobility extends Component{
    render(){
        let title = 'Mobius Mobility',
        pageTitle = "Mobility Bus",
        description = 'In partnership with Mobius Mobility, the Raven Labs mechanical team designed and fabricated a wholly custom bus. Given the purpose to deliver iBOTs and train veterans throughout the country a complete overhaul was required. The redesign includes an oversized slide out, featuring a human elevator and retractable stairs. The cosmetically upgraded interior also features an iBOT service center, classroom training area and storage for 5 iBOTs. The Mobility Bus successfully completed its maiden voyage tour traveling throughout the US in Summer 2020.',
        image = '/assets/images/mobility-bus-3.JPG',
        video = '', 
        alt = "Mobius Mobility",
        teamMembers =  "Grant Peret",
        client = "Deka Research",
        timespan = "Oct 2020 - May 2021",
        hardware = [
            {
                name: "Elevator Leadscrew",
                model: "Nook PowerAC 1-1/4"
            },
            {
                name: "Elevator Rails and Bearings",
                model: "Hevi-Rail HVB-063"
            },
            {
                name: "Motor and Controller Equipment",
                model: "Rockwell Automation"
            },
            {
                name: "Safety Brake",
                model: "Sepac MSEB"
            },
            {
                name: "Slideout Support Legs",
                model: "Thomson Electrak HD"
            }
        ];


        return(
            <Fragment> 
                <IndividualProject title={title} pageTitle={pageTitle} description={description} image={image} alt={alt} teamMembers={teamMembers} client={client} timespan={timespan} hardware={hardware} video={video}/>
            </Fragment>
        )
    }
}

export default Mobility;