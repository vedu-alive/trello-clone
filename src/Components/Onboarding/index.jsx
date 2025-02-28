import { useContext, useState } from "react";
import './index.css';
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE } from "../../constants";
import { AppContext } from "../../context/context";

function Onboarding() {
  const [isLogin, setIsLogin] = useState(true);
  const { setAuthenticated } = useContext(AppContext)
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const nav = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_DATA));
    if (
      savedUser &&
      savedUser.email === userDetails.email &&
      savedUser.password === userDetails.password
    ) {
      setAuthenticated(true);
      nav('/', {replace: true});
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem(LOCAL_STORAGE.USER_DATA, JSON.stringify(userDetails));
    setAuthenticated(true);
    nav("/", { replace: true });
    setIsLogin(true);
  };

  return (
    <div className="onboarding">
      <div className="form-container">
        <h1>{isLogin ? "Login" : "Register"}</h1>
        <form className="form" onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={userDetails.username}
                onChange={handleInputChange}
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        <p className="switch-text" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Register here"
            : "Already have an account? Login here"}
        </p>
      </div>
    </div>
  );
}

export default Onboarding;
