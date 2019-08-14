import React, {Component}  from "react"
import {MembersData} from "./MembersData"
import { MemberDetail} from "./MembersData"


const MemberContext = React.createContext ();
//Provider
//Consumer

class MemberProvider extends Component {
	state ={
	members: [],
	detailMember: MemberDetail
	
	};
	
	componentDidMount(){
	this.setMembers();
	}
setMembers = ()=>{
let tempMembers = [];
MembersData.forEach(user=>{
const singleUser = {...user};
tempMembers = [...tempMembers,singleUser];
})
this.setState(()=>{	
return {members:tempMembers}
})
}

handleDetail = () =>{
console.log("hello from detail");
};
	
addMember = () =>{
console.log("hello from add to network");
};



	render() {
	
    return (
    
    
      <MemberContext.Provider value={{
...this.state,
     handleDetail:this.handleDetail,
      addMember: this.addMember
      }}
      >
      
      	{this.props.children}
      </MemberContext.Provider>
    );
    
    
  }
  }

const MemberConsumer = MemberContext.Consumer;

export {MemberProvider, MemberConsumer};