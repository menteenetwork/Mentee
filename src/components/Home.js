import React from "react";
import Title from "../Title";
import {
  NavLink,  
 } 
 from "react-router-dom";
 import Pulse from 'react-reveal/Pulse';
 import Reveal from 'react-reveal/Reveal';
 import HomeCards from "../HomeCards";
 import styled from "styled-components"; 
	
function Home () {

const heading = {
	fontSize: '92px',
	color: 'white',
	fontFamily: 'Anton',
	margin: 40,
}
    return (
    
      <div>
  
    
      <React.Fragment> 
      
         <div class="media">
         
       	<h1 style={heading}>BE THE CHANGE<div>
         			YOU WANT TO SEE <div>
         			IN THE WORLD
         			</div>
         			</div>
         			</h1></div>

         	
  		 		
   		
   		<div class="media-body">
  			<img src={"../../assets/images/ikar-boy.png"} class="img-fluid"  class="ml-3" style={{width: "43rem", height: "43rem"}} alt="Ikar">
			</img>
		</div>
		
		</React.Fragment>
		
		
		<div className="font-xl">
			<div className="container py-5">
      			<div className="row text-white">
		
		<h3>Discover the potential of knowledge and experience sharing.
		<div>
		Join the community of people whose main objective is helping others
		<div> 
		in disclosing their potential driving to personal success </div></div></h3>
		
		</div>
		<div>
		
		</div>
        </div>
        </div>
        

        
	<div className="body">        
    	<div className="font-xl">
			<div className="container py-5">
      			<div className="row">
      				<div className="mx-auto text-center text-slanted text-black my-5">
      					<h2><strong>Access the power of mentors</strong></h2>
						<p>Learn, gain new skills, record them on the blockchain, and prove others what you really know doing</p>
					</div>
					
				</div>
			</div>
			
		</div> 
    
     <div class="section">
    </div>
    
       <StyleWrapper>
        	<div className="card">
      			<div className="font-xl">		     				
        			<div className="mx-auto text-center text-slanted text-black my-5">
        			  <h2><strong>WHY YOU SHOULD BECOME A MENTEE</strong></h2>
        			</div>
        			<HomeCards />
        		</div>
			</div>
		</StyleWrapper>		
			
    <div class="section">
    </div>     
        
		
		
	<div className="font-xl">
			<div className="container py-5">
      			<div className="row">
      				<div className="mx-auto text-center text-slanted text-black my-5">
      								<h2><strong>WHY YOU SHOULD BECOME A MENTOR</strong></h2>
		
			Gain satisfaction from helping others<div></div>
			Give people access to your knowledge and experience<div></div>
			Help others becoming better humans and achieving their personal goals<div></div>
			Be rewarded with their gratitude and Mentorpower<div></div>
	
					</div>
				</div>
			</div>
		</div>
    
    
    <div class="section">
    </div>
        
		<div className="font-xl">
			<div className="container py-5">
      			<div className="row">
      				<div className="mx-auto text-center text-slanted text-black my-5">
       					<h2>If you are an employer</h2>		
      				</div>
		<p>The personal development of people is the key to the success of every organisation.<div></div>
		Become a mentor so you can shape mentees into future employees you will want to incorporate into your business.<div></div>
 		Choose those who perform best and better meet the needs of your business. 
		<div></div>
		Search easily mentees with the set of skills you want</p>
				</div>				
			</div>
    	</div>

		<div className="font-xl">
			<div className="container py-5">
      			<div className="row">
      				<div className="mx-auto text-center text-slanted text-black my-5">
      					<h2><strong>HOW DOES IT WORK</strong></h2>
<p>Mentee is a platform built on the EOS blockchain. Create an EOS account, get Scatter extension and login. Your MNT tokens will give you access to the mentorship while the EOS account will let you doing the crowdfunding without anyone asking any fees from the donations you receive.</p>
      				</div>
				</div>
			</div>
		</div>

			<div className="mx-auto text-center text-slanted text-black my-5">
     	 		<img src={"../../assets/images/howitworks.png"}  alt="instructions">
				</img>
	 		</div>
	 		
      <div className="font-s">
			<div className="container py-5">
      				<div className="mx-auto text-center text-slanted text-black my-5">
      					 <p>Have a question? Join us on Telegram</p>
     					<i class="fab fa-telegram fa-3x"></i>
      					<a href="https://t.me/menteenetwork"></a>
      				</div>
			</div>
		</div>
			
	
      </div>
       
</div>

    )
  }

 
export default Home

const StyleWrapper = styled.div`
.card{
	left:0%;
	width:100%;
	padding:10px;
	background-color: #ededed;
	border:0px;

}

`
