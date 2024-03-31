import React, { Component } from 'react'

export default class AddContact extends Component {

 state ={
  name: "",
  email:""
 };

  add = (e)=>{
  e.preventDefault();
  if(this.state.name==="" && this.state.email===""){
    alert("All the filed are mandatory!")
    return;
  }
  console.log(this.state)
  this.props.addContactHandler(this.state)
  this.setState({name:"", email:""})
  

 }
 



  render() {
    return (
      <div className= 'main'>
    
        <form className= 'form' onSubmit={this.add}>
        <h2>Name</h2>
        <div className= "form-floating mb-3 ">
  <input type="text" className= "form-control" id="floatingInput" placeholder=""
  value ={this.state.name}
  onChange={(e)=>this.setState({name: e.target.value})}
  
  />
  <label for="floatingInput">Name</label>
</div>
<h2>Email</h2>
<div class= "form-floating mb-3">
  <input type="email" className= "form-control" id="floatingInput" placeholder="name@example.com"
  value={this.state.email}
  onChange={(e)=>this.setState({email: e.target.value})}
  
  
  />
  <label for="floatingInput">Email address</label>
</div>
<button type="submit" className= "btn btn-primary mb-3">Add</button>

</form>
      </div>
    )
  }
}
