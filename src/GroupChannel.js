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
 		<img className="img-respons" src={"../../assets/images/icon-user-avatar.jpg"} alt="mentor"/>
 		<img className="img-respons" src={"../../assets/images/icon-user-avatar.jpg"} alt="mentee"/>
 		</div>
 		<div class="chat.field"></div>
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
