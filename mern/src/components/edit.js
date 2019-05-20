import React, { Component } from 'react'
import axios from 'axios';

export class edit extends Component {
  constructor(props){
    super(props);

    this.state={
      name:'',
      email:'',
      gender:'',
      isAdmin: false
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/mernStack/'+this.props.match.params.id)
      .then(response =>{
        this.setState({
          name:response.data.name,
          email:response.data.email,
          gender:response.data.gender
        })
      })
  }
  render() {
    return (
      <div>
        <p>Welcome  to edit</p>
      </div>
    )
  }
}

export default edit
