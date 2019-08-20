import React from "react"
import styled from 'styled-components';
import {MemberConsumer} from "./Context.js";
import {ButtonContainer} from "./Button";
import {NavLink} from "react-router-dom";



function Modal () {
    return (
      <MemberConsumer>
      {(value) =>{
      const {modalOpen, closeModal} = value;
      const{img,title,name} = value.modalMember;
      
      if(!modalOpen){
      return null;
      }
      else{
      	return(
      	<ModalContainer>
			<div claddName="container">
				<div className="row">
					<div id="modal" 
					className="col-8 mx-auto col-md-6 col-lg-8 
					text-center">
						<h4 className="text-muted">{name}</h4>
						<h5>was added to your network</h5>
						<img src={img} className="img-fluid"
						alt="member" />
						<h5>{title}</h5>
						
						<NavLink to="/Members">
						<ButtonContainer onClick={()=>closeModal()}>
						Members
						</ButtonContainer>
						</NavLink>
						<NavLink to="/MyNetworkMentees">
						<ButtonContainer MyNetworkMentees onClick={()=>closeModal()}>
						My Network
						</ButtonContainer>
						</NavLink>
					</div>
				</div>
			</div>
      	</ModalContainer>
      	);
      }
      
      }}
      </MemberConsumer>
    )
  }

 
export default Modal

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
#modal{
	background: var(--mainWhite);`