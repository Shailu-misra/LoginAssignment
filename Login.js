import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
const Signupnew = () => {
  navigate("/signup");}
  const myLogin = async (e) => {
    e.preventDefault();
    const email = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;
    console.log(email + " " + password);

    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:8080/login/",
        params: { email },
      });
      console.log(response);
      if (password === response.data.password) {
        alert("Welcome user");
        navigate("/dashboard");
      } else {
        alert("Incorrect password");
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  return (
    <div className="container center_div">
<form onSubmit={myLogin}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary"style={{marginRight:"10px"}}>Submit</button>
 
  <button type="submit" onClick={Signupnew} className="btn btn-primary" >Sign up</button>
  </form>
</div>
  )
};

export default Login;
