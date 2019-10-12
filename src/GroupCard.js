import React, {Component}  from "react"
import styled from "styled-components";
import {GroupConsumer} from "./GroupContext";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';



export default class GroupCard extends Component {
render () {

const {id, name, img, category, subcategory, about, inNetwork} = this.props.group;
    return (
 
		
			
    <GroupWrapper className="col-10  mx-auto col-md-3 col-lg-4 my-3">
        <div className = "card" >
        <img src = {img} width="90" height="90" alt = "group" 
        		className= "card-images-to s"/>
        <GroupConsumer>
        {value=>(
        	<div className = "images-container p-2 " 
        	onClick={()=> value.handleGroup(id)}
        	>
        	
      			<div className="card-flex ">
      			<p className="align-self-center mb-10">
      			{about}
      			</p></div>
        	
      			
      		<button 
      			className="add-btn" 
      			disabled={inNetwork ? true : false} 
      			onClick={()=>{
      				value.addGroup(id);
					value.openModal(id);
						}}
      			>
      		{inNetwork?(
      		<NavLink to = "/mynetworkgroups">
      			<p className="text-capitalize mb-0" disabled>
      			{" "}
      			in my Network
      			</p></NavLink>
      			):(
      			<i className="fas fa-plus" />
						)}
      		</button>
					</div>)}
					</GroupConsumer>
      	
     	
      	
     
      {/* card footer */}
      <NavLink to = "/GroupDetails">
      
      <div className="card-footer d-flex justify-content-between">
      	
        		
      		
      		<div>
      			<h3 className="align-self-left mb-0">
      				{name}
      			</h3>
      			<div className="card-flex justify-content-between">
      				<p className="align-self-left mb-10">
      				{category}
      				<p className=" font-italic mb-1">
      				{subcategory}</p>
      			</p>
      			
      		</div>
      			
      				
      			
      		</div>
      
      	</div>
      	</NavLink>
      </div>
    </GroupWrapper>
   
    );
  }
}


GroupCard.propTypes = {
group:PropTypes.shape({
	id:PropTypes.number,
	img:PropTypes.string,
	name:PropTypes.string,
	category:PropTypes.string,
	subcategory:PropTypes.string,
	inNetwork:PropTypes.bool
}).isRequired

}

const GroupWrapper = styled.div`

.card{
	border-color:transparent;
	transition:all 0.5s linear;
	box-shadow:10px 10px 10px 6px rgba(2,1,0,0.2);
	color:black;
	
}
.card-footer{
	border-color:transparent;
	color: black;
	background-color:white;
	transition:all 0.5s linear;
	
}
&:hover{
	.card{
	transition:all 0.5s linear;
    box-shadow:8px 8px 8px 2px rgba(1,0,0,0.2);
    background: black;
	color:white;
	
}
	.card-footer {
	background: black;
	color:white;
	transition:all 0.5s linear;
    box-shadow:12px 12px 12px 12px rgba(3,2,1,0.2);
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
	width:100%;
	
    height:100%;
    font-size:14px;
	background:var(--lightGreen);
	border:none;
	color: var(--mainWhite);
	transform:translate(100%,100%);
	transition:all 0.5s linear;
}
.images-container:hover .add-btn {
	transform: translate(0,0);
	
}
img{
	border-radius:50%
}


.add-btn:hover{
	background:var(--mainWhite);
	
	color: var(--lightGreen);
	cursor:pointer;}
	

`;



