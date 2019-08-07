import React from "react"
import {
NavLink,
}
 from "react-router-dom";
 

function MyNetworkMentors () {
    return (
      <div>
         
         <div class="button"><NavLink to="/mynetworkmentees">MY MENTEES</NavLink></div>
         <div class="button"><NavLink to="/mynetworkmentors">MY MENTORS</NavLink></div>
         <div class="button"><NavLink to="/groups">MY GROUPS</NavLink></div>
        	<ul>
        	<p>+  Search mentor
        	</p>
        	{/* Here should appear a search field for mentees
        
       	 	Here should appear a list of mentees user has in his own network		
 			*/}
 			<p>Alice<div class="button"><NavLink to="/chathistory">CHAT</NavLink></div></p>
  			<p>Alice<div class="button"><NavLink to="/chathistory">CHAT</NavLink></div></p>
 			<p>Alice<div class="button"><NavLink to="/chathistory">CHAT</NavLink></div></p>
 			<p>Alice<div class="button"><NavLink to="/chathistory">CHAT</NavLink></div></p>
 			</ul>
        
      </div>
    )
  }

 
export default MyNetworkMentors