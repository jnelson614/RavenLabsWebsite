import React, { Component , Fragment } from "react";
import IndividualProject from "../component/IndividualProject"


class CatAlley extends Component{
    render(){
        let title = 'Cat Alley',
        pageTitle = "Manchester's Cat Alley",
        description = 'In the heart of Manchester, Raven labs designed and fabricated the entrance to Cat Alley. In this pro bono project, we worked with the city of Manchester and two Artists to bring this public art gallery to life',
        video = '/assets/images/digital-sign.MOV',
        image = '',
        alt = "Cat Alley Manchester, NH",
        teamMembers =  "Grant Peret",
        client = "City of Manchester",
        timespan = "Summer 2020",
        hardware = [
            {
                name: "Digital Sign",
                model: "XVAX-1231"
            },
            {
                name: "Extruded Aluminum",
                model: "The good stuff"
            }
        ];


        return(
            <Fragment> 
                <IndividualProject title={title} pageTitle={pageTitle} description={description} image={image} alt={alt} teamMembers={teamMembers} client={client} timespan={timespan} hardware={hardware} video={video}/>
            </Fragment>
        )
    }
}

export default CatAlley;