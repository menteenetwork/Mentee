import React from "react"
import {
NavLink,
Route
}
 from "react-router-dom";
function Groups () {
    return (
    
      <div>
      <nav>
      <ul className="nav">
            
            <li><NavLink to="/mymentees">MY Men</NavLink></li>
            <li><NavLink to="/mymentors">courses</NavLink></li>
            <li><NavLink to="/groups">mission</NavLink></li>
            
         </ul>
       </nav>
        <h2>Mathematics</h2>
        <div class="button"><NavLink to="/mymentees">MY MENTEES</NavLink></div>
  		<div class="button"><NavLink to="/mymentors">MY MENTORS</NavLink></div>
  		<div class="button"><NavLink to="/groups">MY GROUPS</NavLink></div>
      </div>
    )
  }

 
export default Groups

