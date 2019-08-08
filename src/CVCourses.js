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
         
         {/* Here should appear a dropdown list of all transactions by specific memo message keywords. 
         For example I need to filter one accounts transactions with memo message containing "Science" keyword  
         and display only those transactions.		
 			*/}
        	<ul>
        	<li><p>Science</p></li>
        	<li><p>Computing</p></li>
        	<li><p>Arts</p></li>
 			</ul>
 			
 		</div>
 			
        
    )
  }
  

 
export default CVGeneral