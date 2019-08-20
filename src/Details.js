import React from "react"
import {MemberConsumer} from"./Context";
import {NavLink} from "react-router-dom";
import {ButtonContainer} from "./Button"
import Title from "./Title"

function Details () {
    return (
      <MemberConsumer>
      	{value  =>{
      const {id, name, img, about, location, inNetwork}=
      value.MemberDetail;
      return(
      	<div className="container py-5">
      
      	{/* name */}
      	<div className="row">
      	<div className="col-10 mx-auto text-center text-slanted text-black my-5">
      	<h1>{name}</h1>
      </div>
      </div>
      {/* end name */}
    	{/* member info */}
       <div className="row">
       <div className="col-10 mx-auto col-md-6 my-3">
       	<img src={img} className="img-fluid" alt="member"/>
       	</div>
       	 {/* about member text */}
       	 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
       	 <h2>About : {name}</h2>
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
					{inNetwork? "inNetwork" : "add to network"}
					</ButtonContainer>
       			</div>
       		</div>
       	 </div>
      </div>
      );
      }}
      </MemberConsumer>
    )
  }

 
export default Details
