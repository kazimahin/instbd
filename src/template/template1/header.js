import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import './index.css';
import Helmet from "react-helmet"



class header extends Component {
    render() {
        return (
            < >
                <header >
               
                                
                                <NavLink to="/login"  className="nav-link title waves-effect waves-dark"  data-offset={90}>Login</NavLink>
                                
                             
                                    <NavLink className="dropdown-item waves-effect waves-dark" to="/">Home</NavLink>
                         
                         
                  
                </header>
                
            </ >
        );
    }
}

export default header;