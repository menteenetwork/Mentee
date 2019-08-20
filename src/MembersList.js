import React from "react"
import NetworkUser from "./NetworkUser"
 
function MembersList ({value}) 
{
const{MyNetworkMentees} = value;

    return (
      <div className="container-fluid">
      	{MyNetworkMentees.map(user=>{
      	return <NetworkUser key={user.id} user={user} 
      	value={value}/>
      	})}
        
      </div>
    )
  }

 
export default MembersList