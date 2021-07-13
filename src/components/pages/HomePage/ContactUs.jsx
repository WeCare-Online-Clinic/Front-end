import React from 'react'
import './Home.css'
import { SocialIcon } from 'react-social-icons';

function ContactUs() {
    return (
        <div className="contact mt-5 " >
            <div className="container ">
                    <div className="row ">
                        <div className="col ml-5 mt-5">
                                <h5>Clinics</h5>
                                <ul>
                                    <li>Cardiology</li>
                                    <li>Dentistry</li>
                                    <li>Dermatology</li>
                                    <li>Neurology</li>
                                </ul>
                        </div>
                        <div className="col mt-5">
                                <h5>Units</h5>
                                <ul>
                                    <li>Cardiology Unit</li>
                                    <li>Dentistry  Unit</li>
                                    <li>Dermatology Unit</li>
                                    <li>Neurology Unit</li>
                                </ul>
                        </div>
                        <div className="col mt-5">
                                <h5>Contact Us</h5>
                                <ul>
                                    <li>Suwaya Hospital , Colombo 10</li>
                                    <li>Hospital : +9411-4791222</li>
                                    <li>Clinic : +9411-9820090</li>
                                    <li>Inquiries :+9411-4791222</li>
                                </ul>
                        </div>
                    </div>
                    <div className="row" >
                         <hr/>
                         <div className="col-9">
                         <span className=""><p className="text-muted" style={{color:"white"}}>All Rights Recevered 2021 @WeCare</p></span>
                         </div>
                         <div className="col-3 ">
                             <div className="mb-4" style={{display:"inline-block",marginRight:'2px'}}>                                                 
                                <SocialIcon 
                                    url="https://twitter.com/jaketrent"
                                 
                                   
                                />                                                   
                            </div>     
                                                      
                             <div className="mr-5" style={{display:"inline-block",marginLeft:'3px'}}>                                  
                                <SocialIcon 
                                    url="https://www.facebook.com/jaketrent" 
                                    size="5em"
                           />    
                            </div> 
                                      
                         </div>
                    </div>
            </div>
        </div>
    )
}

export default ContactUs
