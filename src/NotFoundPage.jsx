import React, {Component} from "react"
import styled from "styled-components"; 


export default class NotFoundPage extends Component {

render() {
console.log(this.props);
    return (
     <div class="page-body">
		<div class="body-section">
			<StyledWrapper>
      <div className="container">
      <div className="row">
      <div className="col-10 mx-auto text-center text-title
      text-lowercase pt-5">
      <h1 className="display-3">404 error</h1>
      
      <h2>page not found</h2>
      <h3>the requested URL
      <span className="text-danger">
      {this.props.location.pathname}</span>{" "}was not found</h3>
       </div>
      </div>
      </div>
      </StyledWrapper>
  	</div>
</div>
    )
  }
}

const StyledWrapper = styled.div`

.font-s{
 a{
	color:black;
	text-decoration:none;
}}

.font-s{
a:hover{
	color:var(--darkGreen);
	text-decoration:none;

}
a.active {
	color:var(--darkGreen);
	text-decoration:none;
}
`