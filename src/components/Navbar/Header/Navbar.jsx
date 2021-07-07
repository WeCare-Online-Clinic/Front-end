import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      visible: false,
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  setVisible = (visible) => {
    this.setState({ visible: !visible });
  };

  render() {
    return (
      <nav className="NavbarItems">
          <div className="menu-icon" onClick={this.handleClick}>
              <i className={this.state.clicked? 'fas fa-times':'fas fa-bars'}></i>

          </div>
          <ul className='nav-menu'>
                 {MenuItems.map((item,index)=>{
                  return(
                      <li key={index} >
                          <Link  className="nav-links" to={item.link}>
                              {item.title}
                          </Link>
                      </li>
                  )
              })}

          </ul>
      </nav>
    );
  }
}

export default Navbar;
