import React from "react"
import styled from 'styled-components';
import {
NavLink,
Route
}
 from "react-router-dom";
function Groups () {
    return (
    
      <div>
      <nav>
     
       </nav>
        
        <TabContainer>
         <div class="btn-group button"><NavLink to="/mynetworkmentees">MY MENTEES</NavLink></div>
         <div class="btn-group button"><NavLink to="/mynetworkmentors">MY MENTORS</NavLink></div>
         <div class="btn-group button"><NavLink to="/groups">MY GROUPS</NavLink></div>
        </TabContainer>
        <h2>Mathematics</h2>
    
	{/* Here should appear different groups a mentee has joined  */}
      	<ul>
      		<li><h3><NavLink to="/group">Anna's Graphic design classes</NavLink></h3></li>
      		<li><h3>Joe's Java Script group</h3></li>
      	</ul>
      	
      {/* Here should appear a "create a group" function  */}
      <h3>+ Create a group</h3>
      
      {/* Here should appear a "search a group" function with the list of groups and a "join" button */}
      <h3>Search a group</h3>
      
      
      </div>
      
     
      
    )
  }

 
export default Groups

const TabContainer = styled.div``