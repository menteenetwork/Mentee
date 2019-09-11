import React, {Component}  from "react"
import {GroupsData} from "./GroupsData"
import {GroupDetail} from "./GroupsData"



const GroupContext = React.createContext ();
//Provider
//Consumer

class GroupProvider extends Component {
	state ={
	groups: [],
	MyNetworkGroups: [],
	GroupDetail:[],
	modalOpen:false,
	modalGroup:[],
	
    
	};
	
	componentDidMount(){
	this.setGroups();
	}

setGroups = ()=>{
let tempGroups = [];
GroupsData.forEach(user=>{
const singleUser = {...user};
tempGroups = [...tempGroups,singleUser];
});
this.setState(()=>{	
return {groups:tempGroups};
});
};




getUser = id =>{
	const group = this.state.groups.find(user => user.id ===id);
	return group;
}

handleGroup = (id) =>{
const group = this.getUser(id);
this.setState(()=>{
return {GroupDetail:group}
});

};
	
addGroup = id =>{
	let tempGroups = [...this.state.groups];
	const index = tempGroups.indexOf(this.getUser(id));
	const group = tempGroups[index];
	group.inNetwork = true;
	group.count = 1;
	
this.setState(()=>{
return {groups: tempGroups, MyNetworkGroups:[...this.state.MyNetworkGroups, group]}
},
() => {console.log(this.state);}
);	
};

openModal = id =>{
	const group = this.getUser(id);
	this.setState(()=>{
	return{modalGroup: group, modalOpen: true}
	})
	}

closeModal = () =>{
this.setState(()=>{
	return{modalOpen:false}
	})

}

removeUser = (id) =>{
	let tempGroups = [...this.state.groups];
	let tempNetwork = [...this.state.MyNetworkGroups];
	
tempNetwork = tempNetwork.filter(user => user.id !== id);

	const index = tempGroups.indexOf(this.getUser());
	let removedGroup = tempGroups[index];
	removedGroup.inNetwork = false;
	removedGroup.count = 0;

this.setState(()=>{
	return{
		MyNetworkGroups:[...tempNetwork],
		groups:[...tempGroups]
	
}
})
}




	render() {
	
    return (
    
    
      <GroupContext.Provider value={{
...this.state,
      handleGroup:this.handleGroup,
      addGroup: this.addGroup,
      openModal: this.openModal,
      closeModal: this.closeModal,
      removeUser: this.removeUser,
      }}
      >
      
      	{this.props.children}
      </GroupContext.Provider>
    );
    
    
  }
  }

const GroupConsumer = GroupContext.Consumer;

export {GroupProvider, GroupConsumer};