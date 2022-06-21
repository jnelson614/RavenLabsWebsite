import React, { Component } from "react";
import IndividualJob from "../component/IndividualJob";

class SoftwareIntern extends Component{
    render(){
        let title = 'Software Engineering Intern',
        pageTitle = "Software Intern Position",
        description = 'We are looking for a young motivated individual who is ready to jump in to the world of Engineering. We are looking for candidates who are current exploring a B.S. degree in Engineering or Computer Science and have experience in some of the following fields.',
        image = "/assets/images/careers/software1.jpg",
        alt = "software-intern-engineering-job",
        skills = [
            "Object Oriented Programing such as C#, Python, C++",
            "Experience working in Linux Environments",
            "Experience working with microcontrollers such as Arduinos"
        ];

        return(
            <React.Fragment>
                <IndividualJob title={title} pageTitle={pageTitle} description={description} image={image} alt={alt} skills={skills}/>
            </React.Fragment>
        )
    }
}
export default SoftwareIntern;