import React, { Component } from "react";
import IndividualJob from "../component/IndividualJob";

class MechanicalIntern extends Component{
    render(){
        let title = 'Mechanical Engineering Intern',
        pageTitle = "Mechanical Intern Position",
        description = 'Seeking an enthusiastic young individual eager to launch a successful career in mechanical engineering. We are searching for people who are pursuing a Bachelor of Science degree in Engineering who also have experience in the following areas:',
        image = "/assets/images/careers/software3.jpg",
        alt = "mechanical-engineering-intern-job",
        skills = [
            "Use of a computer-aided design program (such as Solidworks)",
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