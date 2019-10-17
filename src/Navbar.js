import React, {Component} from "react"
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

import Item from './Item'
import Lead from './Lead'



class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menu_class: '',
        }
    }

    setToggleTopMenuClass = () => {
        if (this.state.menu_class === '') {
            this.setState({
                menu_class: 'toggled',
            })
        } else {
            this.setState({
                menu_class: '',
            })
        }
    }


    render = () => {
let top_menu_class = `top-menu ${this.state.menu_class}`
    return (
    
       <div>
       <StyledWrapper>
      
        		<div className="logo">
        			
       					 <NavLink to="/">
        <img src={"../../assets/images/mentee___white--horizontal.png"} class="img-fluid"  class="ml-3" style={{width: "10rem", height: "3.9rem"}} alt="mentee logo">
							</img>
						</NavLink>
					
       			 </div>
        	
      </StyledWrapper>
                <div className={top_menu_class} >
                    <div className="right">
                    	<li><NavLink to="/details">login</NavLink></li>
                        <li><NavLink exact to="/">home</NavLink></li>
            			<li><NavLink to="/contact">contact</NavLink></li>
            			<li><NavLink to="/courses">courses</NavLink></li>
            			<li><NavLink to="/mission">mission</NavLink></li>
           				 <li><NavLink to="/whitepaper">whitepaper</NavLink></li>
            			<li><NavLink to="/blog">blog</NavLink></li>
             
                    </div>
                    <i class="fa fa-bars fa-2x" aria-hidden="true" onClick={this.setToggleTopMenuClass}></i>
                    
                </div>
            </div>
      
    )
  }
}
 
export default Navbar
const StyledWrapper = styled.div`
.logo{
a:hover{
	text-decoration:none;
	background-color:transparent;
}
}

`