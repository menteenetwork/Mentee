import React from "react"

import {
  Route,
  HashRouter,
  NavLink,
  Redirect,
  Switch
 } 
 
 from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home"
import Contact from "./components/Contact"
import Courses from "./components/Courses"
import Mission from "./components/Mission"
import Blog from "./components/Blog"
import Whitepaper from "./components/Whitepaper"
import Footer from "./components/Footer"
import NotFoundPage from "./NotFoundPage"
import Index from "./index.css"
import Members from "./Members"
import DesignCourse from "./DesignCourse"
import LearnCourse from "./LearnCourse"
import Groups from "./Groups"
import Group from "./Group"
import GroupChannel from "./GroupChannel"
import CreateGroup from "./CreateGroup"
import ChatHistory from "./ChatHistory"
import MyNetworkMentees from "./MyNetworkMentees"
import MyNetworkMentors from "./MyNetworkMentors"
import MyNetworkGroups from "./MyNetworkGroups"  
import CVCourses from "./CVCourses" 
import Details from "./Details"
import GroupDetails from "./GroupDetails"
import Modal from "./Modal"
import GroupModal from "./GroupModal"
import AllGroups from "./AllGroups"
import Title from "./Title"
import Navbar from"./Navbar"

function Main () {
return ( 
    
    <HashRouter>
    
 	<Switch>
 	
 
    <div>  
    <div className="heroHeader">
    	<ul className="nav">
    	
    	
    	<Navbar />
    	
        
         
         </ul>
   </div>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/mission" component={Mission}/>
            <Route path="/whitepaper" component={Whitepaper}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/login" component={Details}/>
            <Route exact path="/members" component={Members}/>
            <Route exact path="/notfoundpage" component={NotFoundPage}/>
            
            <Route path="/designcourse" component={DesignCourse}/>
            <Route path="/learncourse" component={LearnCourse}/>
            <Route path="/groups" component={Groups}/>
            <Route path="/group" component={Group}/>
            <Route path="/groupchannel" component={GroupChannel}/>
            <Route path="/creategroup" component={CreateGroup}/>
            <Route path="/chathistory" component={ChatHistory}/>
            <Route path="/mynetworkmentees" component={MyNetworkMentees}/>
            <Route path="/mynetworkmentors" component={MyNetworkMentors}/>
            <Route path="/mynetworkgroups" component={MyNetworkGroups}/>
            <Route path="/cvcourses" component={CVCourses}/>
            <Route path="/details" component={Details}/>
            <Route path="/groupdetails" component={GroupDetails}/>
            <Route exact path="/allgroups" component={AllGroups}/>
            
            
        	
        	<div className="Main">
        	
        	
        	</div> 
        	
    </div>
    	
        
        <Footer />
        <GroupModal />
        <Modal />
        </div>
       
    </Switch>  
    </HashRouter>
    
    )
    }
    
    
    
  


export default Main

