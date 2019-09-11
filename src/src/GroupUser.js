import React from "react"
import styled from 'styled-components';
import {NavLink} from "react-router-dom";


function GroupUser ({user,value}) {
const{id, name, img, category, subcategory, count} = user;
const{ removeUser} = value;
const{ chatUser} = value;
    return (
    <MyContainer>
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
        <NavLink to = "/GroupDetails">
        	<img src={img}  style={{width: "5rem", height: "5rem"}}
        	className="img-fluid" alt="group" />
        	</NavLink>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">group : </span>
        	{name}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">profession : </span>
        	{category}
        </div>
        <div className="col-10 mx-auto col-lg-2">
         <div className="chat-icon" onClick={()=> chatUser(id)}>
         <i class="far fa-comments"></i>
         </div>
      </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">MNT : </span>
        	{subcategory}
        </div>
        
      	<div className="col-10 mx-auto col-lg-2">
         <div className="cart-icon" onClick={()=> removeUser(id)}>
         <i className="fas fa-trash"></i>
         </div>
         </div>
         
      
     </div>
     </MyContainer>
    );
  }

 
export default GroupUser

const MyContainer = styled.div`
img{border-radius:50%}`