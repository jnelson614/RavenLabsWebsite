import React, { Component , Fragment } from "react";
import IndividualProject from "../component/IndividualProject"


class Syringe extends Component{
    render(){
        let title = 'Microliter Syringe Pump',
        pageTitle = "Microliter Pump",
        description = 'A microliter accurate syringe pump system that was manufactured in house. This pump can perform drug delivery with variable bolus and dwell times over an extended period.  Use cases for this pump include extended biological nourishment delivery and oncology drug delivery.',
        image = "/assets/images/syringeOnly.jpg",
        video = '',
        alt = "Syringe",
        teamMembers =  "Grant Peret, Bob Peret, Jeff Nelson",
        client = "Under NDA",
        timespan = "Feb 2022 - March 2022",
        hardware = [
            {
                name: "Microcontroller",
                model: "STM-F4REE"
            },
            {
                name: "Stepper Motor",
                model: "Prusa M32"
            },
            {
                name: "Encoder",
                model: "Renshall 2211"
            },
            {
                name: "Display",
                model: "Raspberry Pi 4B + Touch Screen"
            }
        ];


        return(
            <Fragment> 
                <IndividualProject title={title} pageTitle={pageTitle} description={description} image={image} alt={alt} teamMembers={teamMembers} client={client} timespan={timespan} hardware={hardware} video={video}/>
            </Fragment>
        )
    }
}

export default Syringe;