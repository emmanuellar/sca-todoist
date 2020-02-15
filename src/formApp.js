import React from 'react';
import Form from './form';
import './App.css';


class formApp extends React.Component{
  onSubmit = (fields) =>{
console.log("App comp got: ", fields);
  }
  render(){
    return(
      <div className="app">
      <h3>A simple React form</h3>
        <Form onSubmit={fields => this.onSubmit(fields)}/>
      </div>
    );
  }
}

export default formApp;
