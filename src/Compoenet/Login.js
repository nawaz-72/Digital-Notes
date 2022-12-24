import React,{useState} from "react";
import {useNavigate} from "react-router-dom";


const Login = (props) => {
    const[credentials, SetCredentials] = useState({email:"", password:""})
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
            const response = await fetch(`http://localhost:5000/api/auth/login`,{
              method: 'POST',
              headers:{
                'Content-Type': 'application/json',
                //'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNWNmMmViYzYwMTVmYjM2YTJiM2M0In0sImlhdCI6MTY2MTM1NzE4Mn0.--OpoTcxh9dz8YqgtuWmAcF-UYQoKV083kvXvMJT_vk"
              },body: JSON.stringify({email: credentials.email, password: credentials.password})
            });
            const json = await response.json();
            console.log(json);
            if(json.sucess)
            {
                //redirect to home
               localStorage.setItem('token',json.authtoken)
               alert("successfull login");
               navigate('/'); 
            }
            else
            {
              alert("credentials not valid")
            }
    }

    const onchange = (e) =>
    {
        SetCredentials({...credentials,[e.target.name]: e.target.value})
    }
  return (
    <div id="loginbox">
    <div className="container my-5" id="login"><h1>Login</h1></div>
    < div className="container my-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label forhtml="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange = {onchange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange = {onchange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
