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
import Header from "./components/Header"
import Index from "./index.css"
import Members from "./Members"
import NotFoundPage from "./NotFoundPage"
import DesignCourse from "./DesignCourse"
import LearnCourse from "./LearnCourse"
import Groups from "./Groups"
import Group from "./Group"
import GroupChannel from "./GroupChannel"
import CreateGroup from "./CreateGroup"
import ChatHistory from "./ChatHistory"
import MyNetworkMentees from "./MyNetworkMentees"
import MyNetworkMentors from "./MyNetworkMentors" 
import CVCourses from "./CVCourses" 
import Details from "./Details"
import Modal from "./Modal"
import AllGroups from "./AllGroups"


function Main () {
return ( 
    
    <HashRouter>
    <Header />
 	<Switch>
 	
   
    <div>  
    	<ul className="header">
            <li><NavLink exact to="/">home</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
            <li><NavLink to="/courses">courses</NavLink></li>
            <li><NavLink to="/mission">mission</NavLink></li>
            <li><NavLink to="/whitepaper">whitepaper</NavLink></li>
            <li><NavLink to="/blog">blog</NavLink></li>
            <li><NavLink to="/details">login</NavLink></li> 
         </ul>
    

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
            <Redirect to="/NotFoundPage"/>
            <Route path="/designcourse" component={DesignCourse}/>
            <Route path="/learncourse" component={LearnCourse}/>
            <Route path="/groups" component={Groups}/>
            <Route path="/group" component={Group}/>
            <Route path="/groupchannel" component={GroupChannel}/>
            <Route path="/creategroup" component={CreateGroup}/>
            <Route path="/chathistory" component={ChatHistory}/>
            <Route path="/mynetworkmentees" component={MyNetworkMentees}/>
            <Route path="/mynetworkmentors" component={MyNetworkMentors}/>
            <Route path="/cvcourses" component={CVCourses}/>
            <Route path="/details" component={Details}/>
            <Route exact path="/allgroups" component={AllGroups}/>
            
        	
        	<div className="Main">
        	
        	
        	</div> 
        	
    </div>
    	
        
        <Footer />
        <Modal />
        </div>
       
    </Switch>  
    </HashRouter>
    
    )
    }
    
    
    
  


export default Main

