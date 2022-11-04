import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (error) {
      setErr(error.response.data);
    }
  };

  console.log(err);
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Pavel Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            saepe voluptate illo cum officiis, corporis, sunt, sequi aliquam
            fugiat ullam assumenda? Quidem, impedit? Delectus, nemo?
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Username"
              name="username"
            />
            <input
              onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              onChange={handleChange}
              type="password"
              placeholder="Password"
              name="password"
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Name"
              name="name"
            />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
