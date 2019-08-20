import React, {Component}  from "react"
import {MembersData} from "./MembersData"
import {MemberDetail} from "./MembersData"


const MemberContext = React.createContext ();
//Provider
//Consumer

class MemberProvider extends Component {
	state ={
	members: [],
	MyNetworkMentees: [],
	MemberDetail:[],
	modalOpen:false,
	modalMember:[],
	
	};
	
	componentDidMount(){
	this.setMembers();
	}

setMembers = ()=>{
let tempMembers = [];
MembersData.forEach(user=>{
const singleUser = {...user};
tempMembers = [...tempMembers,singleUser];
});
this.setState(()=>{	
return {members:tempMembers};
});
};


getUser = id =>{
	const member = this.state.members.find(user => user.id ===id);
	return member;
}

handleDetail = (id) =>{
const member = this.getUser(id);
this.setState(()=>{
return {MemberDetail:member}
});

};
	
addMember = id =>{
	let tempMembers = [...this.state.members];
	const index = tempMembers.indexOf(this.getUser(id));
	const member = tempMembers[index];
	member.inNetwork = true;
	member.count = 1;
	const menteepower = member.menteepower;
	member.menteepower = menteepower;
	
this.setState(()=>{
return {members: tempMembers, MyNetworkMentees:[...this.state.MyNetworkMentees, member]}
},
() => {console.log(this.state);}
);	
};

openModal = id =>{
	const member = this.getUser(id);
	this.setState(()=>{
	return{modalMember: member, modalOpen: true}
	})
	}

closeModal = () =>{
this.setState(()=>{
	return{modalOpen:false}
	})

}

removeUser = (id) =>{
	let tempMembers = [...this.state.members];
	let tempNetwork = [...this.state.MyNetworkMentees];
	
tempNetwork = tempNetwork.filter(user => user.id !== id);

const index = tempMembers.indexOf(this.getUser());
let removedMember = tempMembers[index];
removedMember.inNetwork = false;
removedMember.count = 0;


this.setState(()=>{
	return{
		MyNetworkMentees:[...tempNetwork],
		members:[...tempMembers]
	
}
})
}

	render() {
	
    return (
    
    
      <MemberContext.Provider value={{
...this.state,
      handleDetail:this.handleDetail,
      addMember: this.addMember,
      openModal: this.openModal,
      closeModal: this.closeModal,
      removeUser: this.removeUser,
      }}
      >
      
      	{this.props.children}
      </MemberContext.Provider>
    );
    
    
  }
  }

const MemberConsumer = MemberContext.Consumer;

export {MemberProvider, MemberConsumer};