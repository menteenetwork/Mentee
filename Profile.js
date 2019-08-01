import React from "react"
import {
  NavLink,  
 } 
 from "react-router-dom";
 
function Profile () {
    return (
      <div>
        <h2>User profile</h2>
        
        <h2>+</h2>
        <p>menteepower</p>
        <p>mentorpower</p>
        <p>available MNT</p>
        <p>staked MNT</p>
        <p>total MNT</p>
		<div class="button">MY NETWORK</div>
      	{/* Redirect to the page with all members a user is connected with */}

        <h3>About</h3>
		{/* Insert text field here */}
        
      	<h3>Account activity timeline</h3>


      	<NavLink to="/members">Connect with other members</NavLink>
		
            
      	<h3>Blockchain CV</h3>      
 		<div class="button">GENERAL</div>
 		<div class="button"><NavLink to="/courses">COURSES</NavLink></div>
 		
		
 		
 		<ul>
 		<li>Experience</li>
 		<li>Skills</li>
 		<li>Education</li>
 		</ul>
 		
      </div>
 
    )
  }


export default Profile