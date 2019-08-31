import React from "react"
import GroupUser from "./GroupUser"
 
function GroupsList ({value}) 
{
const{MyNetworkGroups} = value;

    return (
      <div className="container-fluid">
      	{MyNetworkGroups.map(user=>{
      	return <GroupUser key={user.id} user={user} 
      	value={value}/>
      	})}
        
      </div>
    )
  }

 
export default GroupsList