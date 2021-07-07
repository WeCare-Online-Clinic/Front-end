import React, { Component } from 'react'
import './Footer.css';

 class Footer extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     
    render() {
        return (
            <div>
                <footer className="footer">

                    <span className=""><p className="text-muted" style={{color:"white"}}>All Rights Recevered 2021 @WeCare</p></span>
                </footer>
            </div>
        )
    }
}
export default  Footer;
