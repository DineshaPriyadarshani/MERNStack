import React, { Component } from 'react'
import axios from 'axios';

export class edit extends Component {
  constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeisAdmin = this.onChangeisAdmin.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    this.state={
      name:'',
      email:'',
      gender:'',
      isAdmin: false
    }
  }

  onChangeName(e) {
    this.setState({
        name: e.target.value
    });
}

onChangeEmail(e) {
    this.setState({
        email: e.target.value
    });
}

onChangeGender(e) {
    this.setState({
        gender: e.target.value
    });
}

onChangeisAdmin(e) {
    this.setState({
        isAdmin: !this.state.isAdmin
    });
}

onSubmit(e) {
  e.preventDefault();
  const obj = {
      name: this.state.name,
      email: this.state.email,
      gender: this.state.gender,
      isAdmin: this.state.isAdmin
  };
  console.log(obj);
  axios.post('http://localhost:4000/mernStack/update/'+this.props.match.params.id, obj)
      .then(res => console.log(res.data));
  
  this.props.history.push('/');
}

  componentDidMount(){
    axios.get('http://localhost:4000/mernStack/'+this.props.match.params.id)
      .then(response =>{
        this.setState({
          name:response.data.name,
          email:response.data.email,
          gender:response.data.gender,
          isAdmin:response.data.isAdmin
        })
      })
      .catch(function(error){
        console.log(error);
      })
  }
  render() {
    return (
      <div>
                <h3 align="center">Update</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />

</div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="gender" 
                                    id="female" 
                                    value="female"
                                    checked={this.state.gender==='female'} 
                                    onChange={this.onChangeGender}
                                    />
                            <label className="form-check-label">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="gender" 
                                    id="male" 
                                    value="male" 
                                    checked={this.state.gender==='male'} 
                                    onChange={this.onChangeGender}
                                    />
                                    <label className="form-check-label">Male</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="isAdmin"
                                type="checkbox"
                                name="isAdmin"
                                onChange={this.onChangeisAdmin}
                                checked={this.state.isAdmin}
                                value={this.state.isAdmin}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Admin
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update " className="btn btn-primary" />
                    </div>
                </form>
            </div>
    )
  }
}

export default edit
