import React, { Component } from 'react';
import {MenuItems} from './MenuItems'; 
import './Navbar.css';
import WeCare from "./WeCare.ico";
import {Link} from 'react-router-dom';

class Navbar extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            clicked:false
        }
    }   
  
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            
            <nav className="NavbarItems">
                <div><img className="logo" src={WeCare} alt="logo"/></div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked? 'fas fa-times':'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked? 'nav-menu-active':'nav-menu'}>
                       {MenuItems.map((item,index)=>{ 
                        return(
                            <li key={index} > 
                                <Link  className={item.cName} to={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
           
                </ul>            
            </nav>
        )
    }
}

export default Navbar;