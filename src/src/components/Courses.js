import React from "react"
import {NavLink,Route} from "react-router-dom";
import styled from "styled-components"; 

  
const Courses = ({ match }) => {
return( 
	<div class="page-body">
	<div> 
	<div class="body-section">
	<StyleWrapper>
	<div class="font-s">
	<h2>Courses</h2>
	
	
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
  	<div class="button"><NavLink to="/members">SEARCH A MENTOR</NavLink></div>
 	<div class="button"><NavLink to="/allgroups">SEARCH A GROUP</NavLink></div>
    
  	<div class="button"><NavLink to="/learncourse">START A COURSE</NavLink></div>
  	<div class="button"><NavLink to="/members">BECOME A MENTOR</NavLink></div>
  	<div class="button"><NavLink to="/designcourse">DESIGN A COURSE</NavLink></div>
  	
  	{/* If BECOME A MENTOR button clicked then a user is redirected to /members page where 
  	"Mentees you can help with perfecting their skills" will appear on top. 
  	Members are filtered by keyword "Algebra" and "Mathematics" 
  	if we are in course page /mathematics/algebra  */}
  	
  	
  	
  	
  	</div>)}/>
  	</div>
  	</StyleWrapper>
  	</div></div>
  
  </div>)
}
 
export default Courses

const StyleWrapper = styled.div`

.font-s{
 a{
	color:black;
	text-decoration:none;
}}

.font-s{
a:hover{
	color:var(--darkGreen);
	text-decoration:none;

}
a.active {
	color:var(--darkGreen);
	text-decoration:none;
}
`