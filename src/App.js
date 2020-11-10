import React, {component} from 'react' ;

import './App.css';
import {Button , Form ,FormGroup ,Label, Input}
from 'reactstrap' ;
import {FacebookLoginButton} from 'react-social-login-buttons' ;
class App extends React.Component{
   render(){
  return (
    <Form className="login-form">
      <h1>
<span className="sp" > my website</span>
         </h1>
         <h2> welcome</h2>
         <FormGroup>
           <Label> Email</Label>
<Input type="email" placeholder="email"/>
         </FormGroup>
         <FormGroup>
         <label>  password   </label>
         <Input type="password" placeholder='password'/>
         </FormGroup>
         <Button className="text-center pt-3"> login</Button> 
<div>
  Or with facebook account
</div>
<FacebookLoginButton className= "fb"/>
<div className="text-center"><a href="signe-up"> signe up</a>   
<span className="si"></span>
<a href="signe-up"> forget  password </a>
</div> 
    </Form>
  );
}
 }
export default App;
