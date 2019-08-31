import React from "react"
import styled from 'styled-components';
import {GroupConsumer} from "./GroupContext"
import GroupsList from "./GroupsList"
import {
NavLink,
Route
}
 from "react-router-dom";


const Groups = ({ match }) => {



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
      	
      
      
      
      
      
      
      
      
    <li><NavLink to={`${match.url}/Mathematics`}>Mathematics</NavLink></li>
    
    {/* Algebra is a subcategory of Mathematics and it should appear only when 
    Mathematics is clicked and this should work this way with all 
    categories and subcategories  */}
    
    <ul><li><NavLink to={`${match.url}/Mathematics/Algebra`}>Algebra</NavLink></li></ul>
    <li><NavLink to={`${match.url}/ComputerScience`}>Computer Science</NavLink></li>
    <li><NavLink to={`${match.url}/Engeeniering`}>Engeeniering</NavLink></li>
	
  	
  	<Route path={`${match.path}/:name`} render= {({match}) =>( 
  	<div>
  	<h3> {match.params.name} </h3>
  	
  	{/* Each of the buttons should redirect to a specific course like 
  	for example to Algebra in Mathematics category. Depends on which course 
  	a user has chosen  */}
    
  	<div class="button"><NavLink to="/learncourse">START LEARNING</NavLink></div>
  	<div class="button"><NavLink to="/designcourse">DESIGN A COURSE</NavLink></div>
  	
  	{/* If BECOME A MENTOR button clicked then a user is redirected to /members page where 
  	"Mentees you can help with perfecting their skills" will appear on top. 
  	Members are filtered by keyword "Algebra" and "Mathematics" 
  	if we are in course page /mathematics/algebra  */}
  	
  	<div class="button"><NavLink to="/members">BECOME A MENTOR</NavLink></div>
  	
  	
  	</div>)}/>
  	
  
  )
      
      
      
      
      
      
      
      
      {/* Here should appear a "create a group" function  */}
      <div class="button"><NavLink to="/creategroup">+ Create a group</NavLink></div>
      
      {/* Here should appear a "search a group" function with the list of groups and a "join" button */}
      
      
      </div>
      
     
      
    )
  }

 
export default Groups

const TabContainer = styled.div``


