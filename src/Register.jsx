import { useState } from "react";
import Button from "./Button";

function Register() {
    const name = "John";
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mailid, setEmailid] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const validatepassword = ()=> {
        if(password==confirmPassword){
            alert("password validated successfully")
        }
        else
        {
            alert("Password and confirm Password are not same")
        }
    }
  return (
    <div>
       <h1>Registration Form</h1>
      <div className="Register-form">
        <label> First Name : <input type="text" placeholder="First Name" value={firstName} onChange= {(e)=>setFirstName(e.target.value)} /></label>
        <label> Last Name : <input type="text" placeholder="Last Name" value={lastName} onChange= {(e)=>setLastName(e.target.value)} /> </label>
        <label>Email id : <input type="text" placeholder="Email" value="mailid" onChange={(e)=>setEmailid(e.target.value)}/></label>
        <label>Password : <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /></label>
        <label>Confirm Password : <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} /></label>
    </div>
    <button className="button" onClick={validatepassword}>Sign Up</button>
    </div>
    
  )
}

export default Register;
