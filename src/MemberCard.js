import React, {Component}  from "react"
import styled from "styled-components";
import {MemberConsumer} from "./Context";
import {NavLink,} from "react-router-dom";
import PropTypes from 'prop-types';



export default class MemberCard extends Component {
render () {

const {id, name, img, menteepower, location, about, inNetwork} = this.props.member;
    return (
  
    <MemberWrapper className="col-9  col-md-5 col-lg-6 my-2">
        <div className = "card">
        <MemberConsumer>
        {value=>(
        	<div className = "images-container p-2 " 
        	onClick={()=> value.handleDetail(id)}
        	>
        	<NavLink to = "/Details">
        		<img src = {img} width="90" height="110" alt = "member" 
        		className= "card-images-to s"/>
      		</NavLink>
      			<div className="card-flex justify-content-between">
      			<p className="align-self-center mb-10">
      			{menteepower}
      			</p></div>
      			<div className="card-flex justify-content-between">
      			<p className="align-self-center mb-10">
      			{about}
      			</p></div>
      		<button 
      			className="add-btn" 
      			disabled={inNetwork ? true : false} 
      			onClick={()=>{
      				value.addMember(id);
					value.openModal(id);
						}}
      			>
      		{inNetwork?(
      			<p className="text-capitalize mb-0" disabled>
      			{" "}
      			in my Network
      			</p>
      			):(
      			<i className="fas fa-plus" />
						)}
      		</button>
					</div>)}
					</MemberConsumer>
      	
     	
      	
     
      {/* card footer */}
      <div className="card-footer d-flex justify-content-between">
      	<h3 className="align-self-center mb-0">
      	{name}
      	</h3>
      <p className=" font-italic mb-1">
      	<span className="mr-1"></span>
      	{location}
      	</p>
      	</div>
      	
      </div>
    </MemberWrapper>
   
    );
  }
}

MemberCard.propTypes = {
member:PropTypes.shape({
	id:PropTypes.number,
	img:PropTypes.string,
	name:PropTypes.string,
	location:PropTypes.string,
	about:PropTypes.string,
	menteepower:PropTypes.string,
	inNetwork:PropTypes.bool
}).isRequired

}

const MemberWrapper = styled.div`
.card{
	border-color:transparent;
	transition:all 0.5s linear;
}
.card-footer{
	border-color:transparent;
	background: rgba(1,0,0,0.2);
	transition:all 0.5s linear;
	
;
}
&:hover{
	.card{
	border:0.06rem solid rgba(1,0,0,0.3);
	box-shadow:2px 2px 5px 0px rgba(1,0,0,0.2)
}
.card-footer {
	background: rgba(247,247,247);
	}}
.images-container{
	position:relative;
	overflow:hidden;
	
	}	
.card-images-top{
	transition: all 1s linear;
}
.images-container:hover .card-img-top{
	transform:scale(1.2);
	
	}

.add-btn{
	position:absolute;
	bottom:0;
	right:0;
	
	background:var(--lightGreen);
	border:none;
	color: var(--mainWhite);
	transform:translate(100%,100%);
	transition:all 0.5s linear;
}
.images-container:hover .add-btn {
	transform: translate(0,0);
	
}
.border-radius{
border-radius=50%;
}

.add-btn:hover{
background:var(--mainWhite);
border:0.06rem solid;
color: var(--lightGreen);
cursor:pointer;}
`;



