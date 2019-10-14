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
      <div className="container-fluid text-center ">
      	<div className="row">
      		<div className="col-10 mx-auto col-lg-2">
      			<div class="circle">
      				<p>{12345} </p>
      			</div>
      				<NavLink to="/">Menteepower</NavLink>
      		</div>
      		<div className="col-10 mx-auto col-lg-2">
      			<div class="circle">
      				<p>{mentorpower}</p>
      			</div>
      				<NavLink to="/">Mentorpower</NavLink>
      		</div>
      		<div className="col-10 mx-auto col-lg-2">
      			<div class="circle">
      				<p>{availableMNT}</p>
      			</div>
      			<NavLink to="/">Available MNT</NavLink>
      		</div>
      		<div className="col-10 mx-auto col-lg-2">
      			<div class="circle">
      				<p>{stakedMNT}</p>
      			</div>
      			<NavLink to="/">Staked MNT</NavLink>
      		</div>
      		<div className="col-10 mx-auto col-lg-2">
      			<div class="circle">
      				<p>{totalMNT}</p>
      			</div>
      				<NavLink to="/">Total MNT</NavLink>
      		</div>
      	
      		
      	</div>
      </div>
      </StyledWrapper>
      )}}
      </MemberConsumer>
    )
  }

 
export default TokenButtons
const StyledWrapper = styled.div`
font-family: 'Oswald', sans-serif;
.button{
	width:175px;
	color:black;
	text-decoration:none;

a:hover {
	color: white;
	text-decoration:none;
}

a:focus {
	outline:none;
}
}
.circle{
	width:50%;
	height:0;
	font-size:20px;
	color:#fff;
	text-align:center;
	line-height:0;
	padding:25% 0;
	border-radius:50%;
	background:#18f099
	}
`