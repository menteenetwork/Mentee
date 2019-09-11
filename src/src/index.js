import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import {MemberProvider} from "./Context"; 
import {GroupProvider} from "./GroupContext"; 
import {

  HashRouter,
  
 }
 from "react-router-dom";
 
ReactDOM.render(

  <MemberProvider>
  <GroupProvider>
  	<HashRouter>
  		<Main/> 
  	</HashRouter>
  	</GroupProvider>
  </MemberProvider>
  ,
  document.getElementById("root")
);