import React from "react"


function NetworkUser ({user,value}) {
const{id, name, img, menteepower, count} = user;
const{ removeUser} = value;
    return (
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
        	<img src={img} style={{width: "5rem", height: "5rem"}}
        	className="img-fluid" alt="member" />
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">member : </span>
        	{name}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">menteepower : </span>
        	{menteepower}
        </div>
        
      	<div className="col-10 mx-auto col-lg-2">
         <div className="cart-icon" onClick={()=> removeUser(id)}>
         <i className="fas fa-trash"></i>
      </div>
      </div>
     </div>
    );
  }

 
export default NetworkUser