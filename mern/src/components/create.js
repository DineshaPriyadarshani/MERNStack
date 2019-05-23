import React, { Component } from 'react'
import axios from 'axios';
export class create extends Component {
    constructor(props){
        super(props);

        this.state={
            name:'',
            email:'',
            gender:'',
            isAdmin:false
        }
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeGender=this.onChangeGender.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
            
        });
    }
    onChangeEmail(e){
        this.setState({
           
            email:e.target.value,
            
        });
    }
    onChangeGender(e){
        this.setState({
            gender:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        
        console.log("Form submitted");
        console.log(this.state.name);

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            isAdmin: this.state.isAdmin
        };
        console.log(newUser);
        axios.post('http://localhost:4000/mernStack/add', newUser)
            .then(res=> console.log(res.data));

        this.setState({
            name:'',
            email:'',
            gender:'',
            isAdmin:false
        })
    }

  render() {
    return (
        <div style={{marginTop: 10, marginRight:10}}>
        {/* <div className="card" style="width: 18rem;"> */}
        <h3>Create New User</h3>
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
                            id="male" 
                            value="male"
                            checked={this.state.gender==='male'} 
                            onChange={this.onChangeGender}
                            />
                    <label className="form-check-label">Male</label>
                </div>
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
            </div>
            <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
                </div>
            
    )
  }
}

export default create
