import React from "react"
import {
NavLink,
}
 from "react-router-dom";
 

function CVGeneral () {
    return (
      <div>
         
         <div class="button"><NavLink to="/cvgeneral">GENERAL</NavLink></div>
         <div class="button"><NavLink to="/cvcourses">COURSES</NavLink></div>
         
         {/* Here should appear a dropdown list for each category with relevant info		
 			*/}
        	<ul>
        	<li><p>Experience</p></li>
        	<li><p>Skills</p></li>
        	<li><p>Education</p></li>
 			</ul>
 			
 		{/* This image will be interactive and will reflect all data contained in Mentee's account		
 			*/}
 			
        <img className="img-respons" src={"../../assets/images/blockchain cv.png"} alt="blockchain cv"/>
      </div>
    )
  }
  

 
export default CVGeneral