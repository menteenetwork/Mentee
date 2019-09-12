import React from "react"
import {GroupConsumer} from"./GroupContext";
import {NavLink} from "react-router-dom";
import {ButtonContainer} from "./Button"
import Title from "./Title"
import styled from 'styled-components';
import Members from "./Members"
import MembersList from "./MembersList"
import EmptyGroup from "./EmptyGroup"
import GroupMembers from "./GroupMembers"

function GroupDetails () {
    return (
    <div class="page-body">
		<div class="body-section">
			<StyledWrapper>
      <GroupConsumer>
      	{value  =>{
      const {id, name, img, about,category, subcategory, inNetwork}=
      value.GroupDetail;
      
       
         	
         	
      
      return(
      <div>
      <h2>Group profile</h2>
        
        
      	<div className="container py-5">
      
      	{/* name category subcategory */}
      	<div className="row">
      		<div className="col-10 mx-auto text-center text-slanted text-black my-5">
      			<h1>{name}</h1>
      			<h3>{category}</h3>
      			<h4>{subcategory}</h4>
      			<NavLink to="/GroupChannel">
      			<ButtonContainer>Group channel</ButtonContainer></NavLink>
      		</div>    		
     	</div>
     	      
    	{/* image */}  
       
        	<div className="col-10 mx-auto col-md-6 my-3 ">
       			<img src={img} className="img-fluid mx-auto" style={{width: "30rem", height: "30rem"}} alt="group"/>
       			<div class="button my-3 mx-auto" ><NavLink to="/MyNetworkGroups">MY GROUPS</NavLink></div>
       		</div>
       
       
       	 {/* about group text */}
       	<div className="container-fluid my-3">
       	 	<h2>About me:</h2>
       	 	<h4 className="text-title text-uppercase text-muted mt-3 mb-2"></h4>
       		<p className="text-muted lead">{about}</p>
       		
       		<div>
				<NavLink to="/AllGroups">
					<ButtonContainer>back to groups</ButtonContainer>
				</NavLink>
				<ButtonContainer AllGroups
				disabled={inNetwork? true:false}
					onClick={() => {
					value.addGroup(id);
					value.openModal(id);
					}}
					>
					{inNetwork? "in Network" : "add to network"}
					</ButtonContainer>
       			
       		</div>
       		</div>
       		<div><GroupMembers /></div>
    </div>
    </div>
      );
      }}
      
         
        
     
      </GroupConsumer>
      </StyledWrapper>
  	</div>
</div>
    )
  }

 
export default GroupDetails

const StyledWrapper = styled.div`

img{
	border-radius:50%;
	
}

.button{
	margin: 0 auto
	
.active {
  color: white;
  
  }
}


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

