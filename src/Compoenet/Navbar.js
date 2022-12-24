import React from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
const Navbar = (props) => {
  let location = useLocation();
  const navigate = useNavigate();
 const  handleLogout = () =>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"> <img src="favicon-32x32.png" alt="" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={` nav-link ${location.pathname === "/home" ? "active":""}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={` nav-link ${location.pathname === "/about" ? "active":""}`} to="/about">About</Link>
          </li>
        </ul>
      </div>
      {!localStorage.getItem('token')?<form className="form-inline my-2 my-lg-0">
      <Link className="btn btn-outline-success mx-2 my-2 my-sm-0" to="/login" role="button">Login</Link>
      <Link className="btn btn-outline-success mx-2 my-2 my-sm-0" to="/signup" role="button">Signup</Link>
    </form>: <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
    </div>
  </nav>
    );
  }

export default Navbar;
