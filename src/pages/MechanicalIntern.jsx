import React, { Component } from "react";
import IndividualJob from "../component/IndividualJob";

class MechanicalIntern extends Component{
    render(){
        let title = 'Mechanical Engineering Intern',
        pageTitle = "Mechanical Intern Position",
        description = 'We are looking for a young motivated individual who is ready to jump in to the world of Engineering. We are looking for candidates who are current exploring a B.S. degree in Engineering or other related field and have experience in some of the following fields.',
        image = "/assets/images/careers/software3.jpg",
        alt = "mechanical-engineering-intern-job",
        skills = [
            "Solidworks or other CAD modeling Software",
            "Hands on experience with mechanical assemblies",
            "Curiosity and desire to be technically challenged"
        ];
        return(
            <React.Fragment>
                <IndividualJob title={title} pageTitle={pageTitle} description={description} image={image} alt={alt} skills={skills}/>  
            </React.Fragment>
        )
    }
}
export default MechanicalIntern;