import React from "react"

function MembersPage () {
    return (
      <div>
        
        <ul>
        {["Alice Smith", "Alexandra McCartney", "Xi Zhao", "David Clooney", "Joe Black"].map((user,idx)=>{
        return <li key={idx}>{user}</li>;})}
        </ul>
      </div>
    )
  }

 
export default MembersPage
