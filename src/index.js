import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import {MemberProvider} from "./Context"; 
import {

  HashRouter,
  
 }
 from "react-router-dom";
 
ReactDOM.render(
  <MemberProvider>
  	<HashRouter>
  		<Main/> 
  	</HashRouter>
  </MemberProvider>,
  document.getElementById("root")
);