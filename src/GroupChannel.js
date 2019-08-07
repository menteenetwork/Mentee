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
 		
 		{/* The icons should connect to the specific components: Members, CreateGroup, FileTransfer, MyNetworkMentees  
 		
 		*/}
 		<div>
 		<img className="img-responsive" src={"../../assets/images/icon-user.png"} alt="add mentee" a href="/members" />
		<Route exact path="/members" component={Members}/>
		</div>
		<div>
 		<img className="img-responsive" src={"../../assets/images/icon-group.png"} alt="create group"/>
 		</div>
 		<div>
 		<img className="img-responsive" src={"../../assets/images/icon-transfer.png"} alt="files transfer"/>
 		</div>
 		<div>
 		<img className="img-responsive" src={"../../assets/images/icon-network.png"} alt="my network"/>
 		</div>
  	
  	

  	</div>
  )
}


export default Group
