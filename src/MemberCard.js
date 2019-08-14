import React, {Component}  from "react"
import styled from "styled-components";
import {MemberConsumer} from "./Context";
import {NavLink,} from "react-router-dom";
import PropTypes from "prop-types";
export default class MemberCard extends Component {
render () {

const {id, name, img, location, about, inNetwork} = this.props.member;
    return (
    <MemberWrapper
      	div className="col-9  col-md-5 col-lg-6 my-1">
        <div className = "card">
        <div className = "images-container p-3" onClick={()=> console.log("you clicked me")}>
        <NavLink to = "/Details">
        <img src = {img} width="70" height="80" 
        alt = "member" className= "card-images-to"/>
      </NavLink>
      <div className="card-flex justify-content-between">
      <p className="align-self-center mb-10">
      {about}
      </p>
      <button className="add-btn" disabled={inNetwork ? true : false} onClick={()=>{console.log('added to the network of members');}}>
      {inNetwork?(<p className="text-capitalize mb-0" disabled>
      {" "}
      in my Network
      </p>)
      :(<i className="fas fa-plus" />)}
      </button>
      </div>
      </div>
      
      
      {/* card footer */}
      <div className="card-footer-flex justify-content-between">
      <h3 className="align-self-center mb-1">
      {name}
      </h3>
      <p className=" font-italic mb-1">
      <span className="mr-1"></span>
      {location}
      </p>
      </div>
      </div>
      </MemberWrapper>
    );
  }
}

MemberCard.propTypes = {
member:PropTypes.shape({
id:PropTypes.number,
img:PropTypes.string,
name:PropTypes.string,
location:PropTypes.string,
about:PropTypes.string,
inNetwork:PropTypes.bool
}).isRequired

}

const MemberWrapper = styled.div`
.card{
	border-color:transparent;
	transition:all 0.5s linear;
}
.card-footer{
	border-color:transparent;
	background: rgba(1,0,0,2.2);
	transition:all 0.5s linear;
	border-top:black
;
}
&:hover{
	.card{
	border:0.04rem solid rgba(1,0,0,2.2);
	box-shadow:2px 2px 5ppx 0px rgba(1,0,0,2.2)
}
	.card-footer {
	background: rgba(247,247,247);
	}}
.images-container{
	position:relative;
	overflow:hidden;
	}	
.card-images-top{
	transition: all 1s linear;
}
.images-container:hover .card-img-top{
	transform:scale(1.2);
	}
.add-btn{
	position:absolute;
	bottom:0;
	right:0;
	
	background:var(--mainGreen);
	border:none;
	color: var(--mainWhite);
	transform:translate(100%,100%);
	transition:all 0.5s linear;
}
.images-container:hover .add-btn {
	transform: translate(0,0);
}
.add-btn:hover{
color: var(--mainWhite);
cursor:pointer;}
`;



