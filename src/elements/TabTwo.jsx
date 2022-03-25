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
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">Team members</a>
                                                    Grant Peret, Bob Peret, Jeff Nelson
                                                </li>
                                                <li>
                                                    <a href="/service">Client</a>
                                                    Deka Research
                                                </li>
                                                <li>
                                                    <a href="/service">Project Timespan</a>
                                                    Feb 2022 - March 2022
                                                </li>
                                            </ul>   
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">STM-F4REE <span>- Microcontroller</span></a>
                                               </li>
                                               <li>
                                                   <a href="/service">Prusa M32 <span>- Stepper Motor</span></a>
                                               </li>
                                               <li>
                                                   <a href="/service">Renshall 2211 <span>- Encoder</span></a>
                                               </li>
                                               <li>
                                                   <a href="/service">Raspberry Pi + Touch Screen <span>- Display</span></a>
                                               </li>
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