import { alignProperty } from "@mui/material/styles/cssUtils";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, SetCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNWNmMmViYzYwMTVmYjM2YTJiM2M0In0sImlhdCI6MTY2MTM1NzE4Mn0.--OpoTcxh9dz8YqgtuWmAcF-UYQoKV083kvXvMJT_vk"
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.sucess) {
      //redirect to home
      localStorage.setItem("token", json.authtoken);
      alert("sucessfully login");
      navigate("/");
    } else {
      alert("enter valid credentials");
    }
  };

  const onchange = (e) => {
    SetCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div  className = "signup">
    <div className="container my-5"><h1>Sign Up</h1></div>
    <div className="container my-3" id="signup">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label forhtml="inputEmail3" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              onChange={onchange}
              name="name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label forhtml="inputPassword3" className="col-sm-2 col-form-label">
            E-mail
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={onchange}
              name="email"
            />
          </div>
        </div>
        <div className="form-group row">
          <label forhtml="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={onchange}
              name="password"
              minLength={5}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signup;
