import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
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
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
