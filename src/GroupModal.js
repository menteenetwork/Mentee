import React from "react"
import styled from 'styled-components';
import {GroupConsumer} from "./GroupContext.js";
import {ButtonContainer} from "./Button";
import {NavLink} from "react-router-dom";



function GroupModal () {
    return (
      <GroupConsumer>
      {(value) =>{
      const {modalOpen, closeModal} = value;
      const{img,title,name,category} = value.modalGroup;
      
      if(!modalOpen){
      return null;
      }
      else{
      	return(
      	<ModalContainer>
			<div className="container">
				<div className="row">
					<div id="modal" 
					className="col-8 mx-auto col-md-6 col-lg-8 
					text-center">
						<h4 className="text-muted">{name}</h4>
						<p>was added to your network</p>
						<img src={img} className="img"
						alt="group" width="100" height="100"/>
						<h5>{title}</h5>
						
						<NavLink to="/AllGroups">
						<ButtonContainer onClick={()=>closeModal()}>
						All Groups
						</ButtonContainer>
						</NavLink>
						<NavLink to="/MyNetworkGroups">
						<ButtonContainer Groups onClick={()=>closeModal()}>
						My Groups
						</ButtonContainer>
						</NavLink>
					</div>
				</div>
			</div>
      	</ModalContainer>
      	);
      }
      
      }}
      </GroupConsumer>
    )
  }

 
export default GroupModal

const ModalContainer = styled.div`

  	position: fixed;
  	top: 50%;
  	left: 50%;
  	/* bring your own prefixes */
  	transform: translate(-50%, -50%);
	border-radius: 1rem;
	background:var(--mainWhite);
	display:flex;
	align-items:center;
	box-shadow:2px 2px 5px 0px rgba(1,0,0,0.2);
	img{border-radius:50%}
	
	`