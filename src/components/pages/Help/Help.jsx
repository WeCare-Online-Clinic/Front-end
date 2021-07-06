import React, { useEffect } from 'react'
import back from './../../assets/img/help.jpg'

function Help(){
    useEffect(() => {
        document.body.style.backgroundImage = `url('${back}')  `;  
    
    },[]);
  
        return (
            <div>
                <h1>Help</h1>
            </div>
        )

}

export default Help;
