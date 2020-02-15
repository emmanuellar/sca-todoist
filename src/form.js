import React from 'react';
import './App.css';
import App from './App'
import { Switch, Route, Link } from 'react-router-dom';

class Form extends React.Component {
  state ={
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  };
  change =e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // onSubmit = (e) => { 
  //     e.preventDefault(); 
  //     this.props.onSubmit(this.state);
  // }

  render(){
    return(
      <div>
      <form>
      <input 
        name = 'firstName'
        placeholder ='firstname' 
        value = {this.state.firstName}
        onChange={e => this.change(e)}
        />
      <input 
        name = 'lastName'
        placeholder ='lastname' 
        value = {this.state.lastName}
        onChange={e => this.change(e)}
        />
      <input 
        name="username"
        placeholder ='username' 
        value = {this.state.username}
        onChange={e => this.change(e)}
        />
      <input 
        name = "email"
        placeholder ='email' 
        value = {this.state.email}
        onChange={e => this.change(e)}
        />
      <input 
        type= "password"
        name = "password"
        placeholder ='password' 
        value = {this.state.password}
        onChange={e => this.change(e)}
        />

        {/* <button onClick={ (e) => this.onSubmit(e)}>Submit</button> */}
        <Link className="link" to='/todo'>Submit</Link>
        <Route
          path="/todo" component={App} exact 
        />
      </form>

     </div>
    );
  }
}

export default Form;
//
