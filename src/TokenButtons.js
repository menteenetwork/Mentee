import React from "react"
import {NavLink} from "react-router-dom"
import styled from 'styled-components'
import {MemberConsumer} from"./Context";

function TokenButtons () {
    return (
    <MemberConsumer>
     
      	{value  =>{
      	const {id, name, img, about,profession,menteepower,mentorpower, location, availableMNT,stakedMNT, totalMNT, inNetwork}=
      	value.MemberDetail;
      	return(
    <StyledWrapper>
        	<div class="d-flex flex-row bd-highlight mb-3 align-items-center">
      				<div class="p-2 bd-highlight ">
      					<div class="circle">
      						<p>{menteepower}</p>
      					</div>
      				</div>
      				<div class="p-2 bd-highlight">
      					<NavLink to="/">Menteepower</NavLink>
      				</div>
      		</div>
      
      
      
      
        	<div class="d-flex flex-row bd-highlight mb-3 align-items-center">
      				<div class="p-2 bd-highlight ">
      					<div class="circle">
      						<p>{mentorpower}</p>
      					</div>
      				</div>
      				<div class="p-2 bd-highlight">
      					<NavLink to="/">Mentorpower</NavLink>
      				</div>
      		</div>
      
      		
      
        	<div class="d-flex flex-row bd-highlight mb-3 align-items-center">
      				<div class="p-2 bd-highlight ">
      					<div class="circle">
      						<p>{availableMNT}</p>
      					</div>
      				</div>
      				<div class="p-2 bd-highlight">
      					<NavLink to="/">Available MNT</NavLink>
      				</div>
      		</div>
      	
      
        	<div class="d-flex flex-row bd-highlight mb-3 align-items-center">
      				<div class="p-2 bd-highlight ">
      					<div class="circle">
      						<p>{stakedMNT}</p>
      					</div>
      				</div>
      				<div class="p-2 bd-highlight">
      					<NavLink to="/">Staked MNT</NavLink>
      				</div>
      		</div>
     
      	
      
        <div class="d-flex flex-row bd-highlight mb-3 align-items-center">
      				<div class="p-2 bd-highlight ">
      					<div class="circle">
      						<p>{totalMNT}</p>
      					</div>
      				</div>
      				<div class="p-2 bd-highlight">
      					<NavLink to="/">Total MNT</NavLink>
      				</div>
      		</div>
   
      	
      
      </StyledWrapper>
      )}}
      </MemberConsumer>
    )
  }

 
export default TokenButtons
const StyledWrapper = styled.div`
.card{
	font-family: 'Oswald', sans-serif;
	width:100%;
	height:100%;
	color: black;
	border:2px;
  	padding: 0px;
  	text-align: center;
  	margin:0 px;
  	left:0 px;
 	position:relative;}

.button{
	width:175px;
	color:black;
	text-decoration:none;
}
a:hover {
	color: var(--mainGreen);
	text-decoration:none;
}

a:focus {
	outline:none;
}
.col-2{
width:100px;
height:100px;
float:left;
}

.circle{
	left:0px;
	width:50px;
	height:50px;
	font-size:20px;
	color:#fff;
	text-align:middle;
	line-height:0;
	padding:50% 0;
	border-radius:50%;
	background:#18f099
	}
.row{
	left:0px;
	background:grey;
	border-style:solid;
	border-radius:35px;
	border-color: grey;
	border-size:1px;
	}
.row:hover {
	color: var(--mainGreen);
	text-decoration:none;
	background:white;
	
}

.flex-row {
	width:100%;
  border-bottom:0.5px;
  border-top:0px;
  border-left:0px;
  border-right:0px;
  border-color:#ededed;
  border-style:solid;
  border-radius:30px;
	
}	
.flex-row:hover{
	background:#ededed;
	color:white;
	border-radius:30px;
	transition:all 0.5s linear;
}

`