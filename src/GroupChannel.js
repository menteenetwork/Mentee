import React from "react"
import Members from "./Members"

import {
NavLink,
Route
}
 from "react-router-dom";
  
function Group (){
return( 
	<div> 
	
 		<h2>Group name:</h2><h3>Anna's Graphic design classes</h3>
 		<div>
 		{/* Here should appear the webcam boxes and chat messages from https://tox.chat 
 		
 		*/}
 		<img className="img-respons" src={"../../assets/images/icon-user-avatar.jpg"} alt="mentor"/>
 		<img className="img-respons" src={"../../assets/images/icon-user-avatar.jpg"} alt="mentee"/>
 		</div>
 		
 		<div>
 		<NavLink to="/members"><img className="img-responsive" src={"../../assets/images/icon-user.png"} alt="add mentee"/></NavLink>
		</div>
		<div>
 		<NavLink to="/creategroup"><img className="img-responsive" src={"../../assets/images/icon-group.png"} alt="create group"/></NavLink>
 		</div>
 		<div>
 		<NavLink to="/filetransfer"><img className="img-responsive" src={"../../assets/images/icon-transfer.png"} alt="files transfer"/></NavLink>
 		</div>
 		<div>
 		<NavLink to="/mynetworkmentees"><img className="img-responsive" src={"../../assets/images/icon-network.png"} alt="my network"/></NavLink>
 		</div>
  	
  	

  	</div>
  )
}


export default Group
