import React from 'react';
import {useEffect} from 'react';
import back from '../../assets/img/help.jpg'
import Slide from './Slide'
import Clinics from './Clinics.';
import ContactUs from './ContactUs';

function Home() {
    useEffect(() => {
        document.body.style.backgroundImage = `url('${back}')  `;  
   
    },[])
    return (
        <div>
        <div className="container">
            <div className="row">            
                    <Slide />
            </div>
            <div className="row mt-5">
                    <Clinics />
            </div>        
       
        </div>
        <div>
        <ContactUs />
        </div>
        
        </div>
    )
}

export default Home

