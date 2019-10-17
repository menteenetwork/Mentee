import React from "react"
 import ReactDOM from 'react-dom';
import {MembersData} from "./MembersData"
 
class SearchUser extends React.Component {
state = {
    filter: "",
    data: MembersData}

handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
  const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
    );
  });
 
    
  
    return (
      <div>
         <input value={filter} onChange={this.handleChange}  placeholder="Search for members..."/>
         <i class="fa fa-search" aria-hidden="true"></i>
         
        {filteredData.map(item => (
          <div key={item.profession} className="filter" >
          				
            <div>
              {item.name} {item.location} - {item.about} - {item.profession}
            </div>
            	
          	</div>
        
        ))}  
      </div>
    );
  }
}

 
export default SearchUser
