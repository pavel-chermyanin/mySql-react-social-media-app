import React, { useEffect, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(login(inputs)).then(() => {
        console.log("navigate");
        navigate("/");
      });
    } catch (error) {
      setErr(error.response.data);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            saepe voluptate illo cum officiis, corporis, sunt, sequi aliquam
            fugiat ullam assumenda? Quidem, impedit? Delectus, nemo?
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="Username"
            />
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
