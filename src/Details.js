import React from "react"
import {MemberConsumer} from"./Context";
import {NavLink} from "react-router-dom";
import {ButtonContainer} from "./Button"
import Title from "./Title"
import styled from 'styled-components';
import EOSIOClient from './EOSIOClient';
import Token from './EOSIOClient';
import TokenButtons from './TokenButtons'

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
     
			
      <MemberConsumer>
     
      	{value  =>{
      	const {id, name, img, about,profession,menteepower,mentorpower, location, availableMNT,stakedMNT, totalMNT, inNetwork}=
      	value.MemberDetail;
      	
      	return(
      	 <div class="font-s">
        	<div class="card">
        		<div class="section">
        			<div className="col-10 mx-auto">
        				<strong><h1>{name}</h1></strong>
        				<NavLink to = "/PlanetDetails">
        					<img src={img}   style={{width: "15rem", height: "15rem"}}
        					className="img-fluid" alt="mentee" />
        				</NavLink>
        					<div>	
        					<p>Location : {location}</p>
        					<p>Profession: {profession}</p>
        					</div>
        			</div>
        		<div className="container py-5">
        			<div class=" my-3 mx-auto" >
        			< TokenButtons />
        			</div>
        		</div>
        	
        		<span className="col-10 mx-auto">	
       	 			<h2>About me:</h2>
       	 			<h4 className="text-title text-uppercase text-muted mt-3 mb-2"></h4>
       				<p className="text-muted lead">{about}</p>
       			</span>
        		
        	
        
      	
    <div className="container py-5">
    	<MyContainer>
      		<div class="button my-3 mx-auto" ><NavLink to="/MyNetworkMentees">MY NETWORK</NavLink>
       			</div>
 
			<ButtonContainer MyNetworkMentees
				disabled={inNetwork? true:false}
					onClick={() => {
					value.addMember(id);
					value.openModal(id);
					}}
					>
					{inNetwork? "in Network" : "add to network"}
			</ButtonContainer>
		</MyContainer>
 		<div class="section">
 		</div>
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
    </div>	
    </div>		
  </div>

      );
      }}
      
      </MemberConsumer>
      		
  
    </MyContainer>
      
    )
  }

 
export default Details

const MyContainer = styled.div`

	font-family: 'Oswald', sans-serif;
	width:100%;
	height:100%;
	color: black;
	border:0 px;
  	padding: 0 px;
  	text-align: center;
  	margin:0 px;
  	left:0 px;
  	right:0px;
 	position:relative;
img{
	border-radius:50%;
	border-style:solid;
	border-width: 2rem;
	border-color: rgba(0,230,142,1);
	background: -moz-linear-gradient(left, rgba(0,230,142,1) 0%, rgba(0,230,142,1) 5%, rgba(0,149,168,1) 100%);
	background: -webkit-gradient(left top, right top, color-stop(0%, rgba(0,230,142,1)), color-stop(5%, rgba(0,230,142,1)), color-stop(100%, rgba(0,149,168,1)));
	background: -webkit-linear-gradient(left, rgba(0,230,142,1) 0%, rgba(0,230,142,1) 5%, rgba(0,149,168,1) 100%);
	background: -o-linear-gradient(left, rgba(0,230,142,1) 0%, rgba(0,230,142,1) 5%, rgba(0,149,168,1) 100%);
	background: -ms-linear-gradient(left, rgba(0,230,142,1) 0%, rgba(0,230,142,1) 5%, rgba(0,149,168,1) 100%);
	background: linear-gradient(to right, rgba(0,230,142,1) 0%, rgba(0,230,142,1) 5%, rgba(0,149,168,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00e68e', endColorstr='#0095a8', GradientType=1 );
   	
}

.button{
	color:black;

a:hover{
	color:white;
	text-decoration:none;
}}
.font-s{
color:black;
 a{
	color:black;
	text-decoration:none;
}}



h1{
	font-size:60px;
	font-weight:900;
	}

`
