import React from "react"
 
function GroupColumns () {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
      	<div className="row">
      		<div className="col-10 mx-auto col-lg-2">
      			<p className="text-uppercase">Group</p>
      		</div>
      		<div className="col-10 mx-auto col-lg-2">
      			<p className="text-uppercase">Name</p>
      		</div>
      		<div className="col-10 mx-auto col-lg-2">
      			<p className="text-uppercase">Category
      			</p>
      		</div>
      		<div className="col-10 mx-auto col-lg-2">
      			<p className="text-uppercase">Contact</p>
      		</div>
      		<div className="col-10 mx-auto col-lg-2">
      			<p className="text-uppercase">Subcategory</p>
      		</div>
      	
      		<div className="col-10 mx-auto col-lg-2">
      			<p className="text-uppercase">Remove</p>
      		</div>
      		
      	</div>
      </div>
    )
  }

 
export default GroupColumns