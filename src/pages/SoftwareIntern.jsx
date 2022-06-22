import React, { Component } from "react";
import IndividualJob from "../component/IndividualJob";

class SoftwareIntern extends Component{
    render(){
        let title = 'Software Engineering Intern',
        pageTitle = "Software Intern Position",
        description = 'We are looking for a young, motivated person who is ready to jump into the world of Engineering. We are looking for people who are currently pursuing a B.S. in Engineering or Computer Science and have experience in some of the following fields:',
        image = "/assets/images/careers/software1.jpg",
        alt = "software-intern-engineering-job",
        skills = [
            "Object-oriented programming, such as C#, Python, or C++",
            "Knowledge of how to use Linux",
            "Have experience programming microcontrollers such as Arduinos"
        ];

        return(
            <React.Fragment>
                <IndividualJob title={title} pageTitle={pageTitle} description={description} image={image} alt={alt} skills={skills}/>
            </React.Fragment>
        )
    }
}
export default SoftwareIntern;