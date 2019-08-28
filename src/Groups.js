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
        
        
         <div class="btn-group button"><NavLink to="/mynetworkmentees">MY MENTEES</NavLink></div>
         <div class="btn-group button"><NavLink to="/mynetworkmentors">MY MENTORS</NavLink></div>
         <div class="btn-group button"><NavLink to="/groups">MY GROUPS</NavLink></div>
        
        <TabContainer>
        	<div className="searchBar">
        	
          		<form>
            		<input placeholder="Search a group">
            		</input>
            		<button type="submit">SEARCH</button>
          		</form>
        	
     	 	</div>
        	</TabContainer>
        	
{/* Here should appear different groups mentee joined and they should be sorted by course 
category. For example Math related groups, Engineering related groups etc. */}
        <h2>Mathematics</h2>
    
      	<ul>
      		<li><h3><NavLink to="/group">Anna's Graphic design classes</NavLink></h3></li>
      		<li><h3>Joe's Java Script group</h3></li>
      	</ul>
      	
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {/* Here should appear a "create a group" function  */}
      <div class="button"><NavLink to="/creategroup">+ Create a group</NavLink></div>
      
      {/* Here should appear a "search a group" function with the list of groups and a "join" button */}
      
      
      </div>
      
     
      
    )
  }

 
export default Groups

const TabContainer = styled.div``


