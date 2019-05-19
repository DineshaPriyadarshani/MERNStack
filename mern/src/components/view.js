import React, { Component } from 'react'
import { Link }  from 'react-router-dom';
import axios from 'axios';

const Users = props =>(
  <tr>
    <td>{props.users.name}</td>
    <td>{props.users.email}</td>
    <td>{props.users.gender}</td>
    <td> 
      <Link to={"/edit/"+props.user._id}>Edit</Link>
    </td>
  </tr>
)
export class view extends Component {
  constructor(props){
    super(props);
    this.state={users: []};
  }

  componentDidMount{
    axios.get('http://localhost:4000/mernStack/')
      .then(response=>{
        this.ListeningStateChangedEvent({ users: response.data});
      })
      .catch(function(error){
        console.log(error);
      })
    }

    Users(){
      return this.state.users.map(function(currentUser, i){
        return <User user={currentUser} key={i} />;
      })
    }

  render() {
    return (
      <div>
        <h3>Users List</h3>
        <table className="table table-striped" style={{marginTop:20}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>isAdmin</th>
            </tr>
          </thead>
          <tbody>
            {this.Users()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default view
