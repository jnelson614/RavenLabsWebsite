import React ,{ Component }from "react";
import { FiMonitor } from "react-icons/fi";
import { GiGears, GiCircuitry } from "react-icons/gi";
import { FaTools, FaSyringe } from "react-icons/fa";
import { MdSettingsInputAntenna } from "react-icons/md";
import { Link } from 'react-router-dom';

const ServiceList = [
    {
        icon: <GiGears />,
        title: 'Mechanical Design',
        description: 'Deep expertise in Solidworks and other CAD modeling software'
    },
    {
        icon: <GiCircuitry />,
        title: 'Embedded Software',
        description: 'Robust, fault tolerant software'
    },
    {
        icon: <FiMonitor />,
        title: 'Front End Development',
        description: 'Sleek and intuitive designs'
    },
    { 
        icon: <FaSyringe />,
        title: 'Medical Devices',
        description: 'On the cutting edge of developing live saving devices'
    },
    {
        icon: <FaTools />,
        title: 'Prototyping',
        description: 'Taking any idea and making it a reality'
    },
    { 
        icon: <MdSettingsInputAntenna />,
        title: 'Helium',
        description: 'Wireless network built for any IoT Solution'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <Link to="/coming-soon">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
