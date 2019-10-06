import React, {Component}  from "react"
import styled from "styled-components";

import {NavLink,} from "react-router-dom";




export default class HomeCards extends Component {
render () {

    return (
    <CardWrapper>
    	<div class="card-deck">
        	
        	
  				
    		<div class="card" >
    			<i class="fas fa-users fa-3x color:white" ></i>
    				<div class="card-body">
    					<h5 class="card-title"><NavLink to="/members">FIND MENTORS</NavLink></h5>
    				</div>
    				<div class="card-body ">
    					<p class="card-text"><NavLink to="/members">Get an unlimited access to the community of people who want to share their knowledge and experience with you and help with disclosing your potential</NavLink></p></div>
  					</div>
  				
  					
  				
    		<div class="card">
    			<i class="fas fa-tools fa-3x"></i>
    				<div class="card-body">
    					<h5 class="card-title"><NavLink to="/DesignCourse">PERFORM TASKS</NavLink></h5>
  					</div>
  					<div class="card-body">
  						<p class="card-text"><NavLink to="/DesignCourse">Perform tasks given you by mentors and see how your knowledge and experience increases and your Menteepower grows</NavLink></p></div>
  					</div>
  				
  				
  				
    		<div class="card">
    			<i class="fas fa-search fa-3x"></i>
    				<div class="card-body">
    					<h5 class="card-title"><NavLink to="/members">BE DISCOVERED</NavLink></h5>
  					</div>
  					<div class="card-body">
  						<p class="card-text"><NavLink to="/members">Employers come here to shape the talent and incorporate the best ones into their own businesses. Let them find you and give you a chance</NavLink></p></div>
  					</div>
  				
  				
  				
    		<div class="card">
    			<i class="far fa-address-card fa-3x"></i>
    				<div class="card-body">
    					<h5 class="card-title"><NavLink to="/details">FORGE YOUR CV</NavLink></h5>
  					</div>
  					<div class="card-body">
  						<p class="card-text"><NavLink to="/details">Each task you perform is a new kind of skill recorded on the blockchain. Employers can find you easily by looking up specific skills.</NavLink></p></div>
  					</div>
  				
			
		</div>
    </CardWrapper>
   
    );
  }
}



const CardWrapper = styled.div`

.card{
	width: 15rem;
	color: black;
	border-color:transparent;
	transition:all 0.5s linear;
	box-shadow:4px 4px 4px 4px rgba(1,5,0,0.2);
  	padding: 16px;
  	text-align: center;
  	z-index:0;
background: rgba(20,224,129,1);
background: -moz-linear-gradient(top, rgba(20,224,129,1) 0%, rgba(20,224,129,1) 8%, rgba(12,245,187,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(20,224,129,1)), color-stop(8%, rgba(20,224,129,1)), color-stop(100%, rgba(12,245,187,1)));
background: -webkit-linear-gradient(top, rgba(20,224,129,1) 0%, rgba(20,224,129,1) 8%, rgba(12,245,187,1) 100%);
background: -o-linear-gradient(top, rgba(20,224,129,1) 0%, rgba(20,224,129,1) 8%, rgba(12,245,187,1) 100%);
background: -ms-linear-gradient(top, rgba(20,224,129,1) 0%, rgba(20,224,129,1) 8%, rgba(12,245,187,1) 100%);
background: linear-gradient(to bottom, rgba(20,224,129,1) 0%, rgba(20,224,129,1) 8%, rgba(12,245,187,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#14e081', endColorstr='#0cf5bb', GradientType=0 );}



.card:hover {
	box-shadow:8px 8px 8px 8px rgba(1,5,0,0.2)
}

.card-text{
 a{
	color:black;
	text-decoration:none;
}
a:hover{
	color:white;
	text-decoration:none;
}
}


`;



