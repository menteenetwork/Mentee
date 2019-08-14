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
      
      {/* title */}
      <div className="row">
      <div className="col-10 mx-auto text-center text-slanted text-black my-5">
      <h1>{Title}</h1>
      </div>
      </div>
      {/* end title */}
      </div>
      );
      }}
      </MemberConsumer>
    )
  }

 
export default Details
