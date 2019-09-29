import React from "react"
import {MemberConsumer} from"./Context";
import {NavLink} from "react-router-dom";
import {ButtonContainer} from "./Button"
import Title from "./Title"
import styled from 'styled-components';
import EOSIOClient from './EOSIOClient'

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
  }


function Details () {
	
	var eosio = new EOSIOClient("mentee-react");
	try{  
  
		sleep(500).then(() => {
	   console.log("you clicked")
	   //this.eosio.login()
	   eosio.login();
	   
		})
   
	   }
	   catch(err)
	   {
		 console.log(err)
		 alert("Unable to find scatter 1")
	   }
	
    return (
    

    <MyContainer>
    <div class="page-body">
	<div class="font-s">
      <MemberConsumer>
      	{value  =>{
      const {id, name, img, about,profession,menteepower, location, inNetwork}=
      value.MemberDetail;
      return(
      <div>
      <h2>User profile</h2>
        
        {/* "+" button adds user to personal network of mentees. If added then toggle to "-"		
 			*/}
        <h2>+</h2>
        <p>menteepower</p>
        <p>mentorpower</p>
        <p>available MNT</p>
        <p>staked MNT</p>
        <p>total MNT</p>
		
      	
      	<div className="container py-5">
      
      	{/* name */}
      	<div className="row">
      	<div className="col-10 mx-auto text-center text-slanted text-black my-5">
      	<h1>{name}</h1>
      </div>
      </div>
      {/* end name */}
    	{/* member info */}
       
       <MyContainer>
       <div className="col-10 mx-auto col-md-6 my-3 ">
       	<img src={img} className="img-fluid mx-auto" style={{width: "30rem", height: "30rem"}} alt="member"/>
       	<div class="button my-3 mx-auto" ><NavLink to="/MyNetworkMentees">MY NETWORK</NavLink></div>
       	
       	</div>
       </MyContainer>
       
       	 {/* about member text */}
       	 <span className="container-fluid my-3">
       	 	<h2>About me:</h2>
       	 	<h4 className="text-title text-uppercase text-muted mt-3 mb-2"></h4>
       		<p className="text-muted lead">{about}</p>
       			<div>
		<NavLink to="/Members">
			<ButtonContainer>back to members</ButtonContainer>
		</NavLink>
			<ButtonContainer MyNetworkMentees
				disabled={inNetwork? true:false}
					onClick={() => {
					value.addMember(id);
					value.openModal(id);
					}}
					>
					{inNetwork? "in Network" : "add to network"}
					</ButtonContainer>
       			
      
      
    <div class="section"></div>
      	<h2>Account activity timeline</h2>  
      	
{/* Here should appear a timeline including Menteepower, Mentorpower transactions 
      	 in different time intervals: 7 dyas, 1 month, 3 months, 6 months, 1 year */}
      	 
      	<h2>Blockchain CV</h2> 
      	
    		<MyContainer>
         		<div class="btn-group button"><NavLink to="/Details">OVERVIEW</NavLink></div>
        		 <div class="btn-group button"><NavLink to="/CVCourses">COURSES</NavLink></div>
        	</MyContainer>
 		
 		  
 {/* Here should appear a dropdown list for each category with relevant info		
 			*/}
 			
        	<ul>
        	<li><p>Experience</p></li>
        	<li><p>Skills</p></li>
        	<li><p>Education</p></li>
 			</ul>
 			
{/* This image will be interactive and will reflect all data contained in Mentee's account */}
 			
        		<img class="img-respons" src={"../../assets/images/blockchain cv.png"} alt="blockchain cv"/>
        		
      		
 				
 </div>
 			</span>
       	</div>
    </div>
      );
      }}
      
      </MemberConsumer>
      </div>
      </div>
      </MyContainer>
      
    )
  }

 
export default Details

const MyContainer = styled.div`

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
