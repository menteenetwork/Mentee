import React from "react"
import {
  NavLink,  
 } 
 from "react-router-dom";
 
function Home () {
    return (
      <div>
      <i class="fas fa-home"></i>
        <h2>BE THE CHANGE 
		YOU WANT TO SEE
		IN THE WORLD</h2>
		<h3>Discover the potential of knowledge and experience sharing.
Join the community of people whose main objective is helping others 
in disclosing their potential driving to personal success </h3>
        
        <p>WHY YOU SHOULD BECOME A MENTEE</p>
        <li><i class="fas fa-users"></i><NavLink to="/members">Find mentors</NavLink></li>
        <li><i class="fas fa-tools"></i><NavLink to="/">Perform tasks</NavLink></li>
        <li><i class="fas fa-search"></i><NavLink to="/members">Be discovered</NavLink></li>
        <li><i class="far fa-address-card"></i><NavLink to="/profile">Forge your CV</NavLink></li>
        
        <h4>Access the power of mentors</h4>
		<p>Learn, gain new skills, record them on the blockchain, and prove others what you really know doing</p>
		
		<p>WHY YOU SHOULD BECOME A MENTOR</p>
		<ul>
		
			<li>Gain satisfaction from helping others</li>
			<li>Give people access to your knowledge and experience</li>
			<li>Help others becoming better humans and achieving their personal goals</li>
			<li>Be rewarded with their gratitude and Mentorpower</li>
		</ul>
		<h4>If you are an employer</h4>
		<p>The personal development of people is the key to the success of every organisation.

Become a mentor so you can shape mentees into future employees you will want to incorporate into your business. Choose those who perform best and better meet the needs of your business. 

Search easily mentees with the set of skills you want</p>
<p>HOW DOES IT WORK</p>
<p>Mentee is a platform built on the EOS blockchain. Create an EOS account, get Scatter extension and login. Your MNT tokens will give you access to the mentorship while the EOS account will let you doing the crowdfunding without anyone asking any fees from the donations you receive.</p>
      <ul>
      <li>Create EOS account</li>
      <li>Get Scatter</li>
      <li>Get MNT tokens</li>
      <li>Stake your tokens</li>
      <li>Find mentors</li>
      <li>Start mentorship</li>
      <li>Get votes and rewards</li>
      <li>Forge your blockchains CV</li>
      <li>Show emplyers your real skills</li>
      </ul>
      <p>Have a question? Join us on Telegram</p>
      <p>Telegram icon <a href="https://t.me/menteenetwork">here</a></p>
      
      </div>
     
      
    )
  }

 
export default Home