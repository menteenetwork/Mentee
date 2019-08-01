import React from "react"
import {
  Route,
  HashRouter,
  NavLink,
  Redirect,
  Switch
 } 
 
 from "react-router-dom";
import Home from "./components/Home"
import Stuff from "./components/Stuff";
import Contact from "./components/Contact"
import Courses from "./components/Courses"
import Mission from "./components/Mission"
import Blog from "./components/Blog";
import Whitepaper from "./components/Whitepaper"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Index from "./index.css"
import MembersPage from "./Members"
import MemberCard from "./MemberCard"
import NotFoundPage from "./NotFoundPage"
import DesignCourse from "./DesignCourse"
import LearnCourse from "./LearnCourse"
import Groups from "./Groups"


 
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
            <li><NavLink to="/profile">login</NavLink></li>
            <li><NavLink to="/stuff">stuff</NavLink></li>  
         </ul>
    

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/mission" component={Mission}/>
            <Route path="/whitepaper" component={Whitepaper}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile}/>
            <Route exact path="/members" component={MembersPage}/>
            <Route exact path="/notfoundpage" component={NotFoundPage}/>
            <Redirect to="/NotFoundPage"/>
            <Route path="/designcourse" component={DesignCourse}/>
            <Route path="/learncourse" component={LearnCourse}/>
            <Route path="/groups" component={Groups}/>
        	<div className="Main">
        	
        	
        	</div> 
        	
    </div>
    		
        <Stuff />
        <Footer />
       
        </div>
       
    </Switch>  
    </HashRouter>
    )
    }
    
    
    
  


export default Main

