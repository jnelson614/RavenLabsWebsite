import React, { Component } from "react";
import IndividualJob from "../component/IndividualJob";

class JuniorMechanical extends Component{

    render(){
        let title = 'Junior Mechanical Engineer',
        pageTitle = "Junior Mechanical Position",
        description = 'We are looking for a young motivated individual who wants to jump start their mechanical engineering career. We are looking for candidates who have a B.S. degree in Engineering and have experience in some of the following fields.',
        image = "/assets/images/careers/mechanical1.jpg",
        alt = "junior-mechanical-job",
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
export default JuniorMechanical;