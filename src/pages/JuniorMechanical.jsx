import React, { Component } from "react";
import IndividualJob from "../component/IndividualJob";

class JuniorMechanical extends Component{

    render(){
        let title = 'Junior Mechanical Engineer',
        pageTitle = "Junior Mechanical Position",
        description = 'Seeking an enthusiastic young individual eager to launch a successful career in mechanical engineering. We are searching for people with a Bachelor of Science in Engineering who also have experience in the following areas:',
        image = "/assets/images/careers/mechanical1.jpg",
        alt = "junior-mechanical-job",
        skills = [
            "Use of a computer-aided design program (such as Solidworks)",
            "Hands on experience with mechanical assemblies",
            "Interest in learning new things and a drive to master new skills"
        ];

        return(
            <React.Fragment>
                <IndividualJob title={title} pageTitle={pageTitle} description={description} image={image} alt={alt} skills={skills}/>
            </React.Fragment>
        )
    }
}
export default JuniorMechanical;