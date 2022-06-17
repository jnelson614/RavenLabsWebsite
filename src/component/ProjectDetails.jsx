import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "About",
        tab2 = "Equipment";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <div>Team members</div>
                                                    {this.props.teamMembers}
                                                </li>
                                                <li>
                                                    <div>Client</div>
                                                    {this.props.client}
                                                </li>
                                                <li>
                                                    <div href="/service">Project Timespan</div>
                                                    {this.props.timespan}
                                                </li>
                                            </ul>   
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                                {this.props.hardware.map((value , index) => (
                                                    <div key={index}>
                                                        <li>
                                                            <div>
                                                                {value.model} <span>- {value.name} </span>
                                                            </div>
                                                        </li>
                                                    </div>               
                                                ))}
                                           </ul>
                                       </div>
                                    </TabPanel>


                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;