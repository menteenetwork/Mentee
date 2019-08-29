import React from "react"
import NetworkUser from "./NetworkUser"
 
function GroupsList ({value}) 
{
const{Groups} = value;

    return (
      <div className="container-fluid">
      	{Groups.map(user=>{
      	return <NetworkUser key={user.id} user={user} 
      	value={value}/>
      	})}
        
      </div>
    )
  }

 
export default GroupsList