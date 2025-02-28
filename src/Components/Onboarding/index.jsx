import { useContext, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE } from "../../constants";
import { AppContext } from "../../context/context";
import { Button, Card, Flex, Form, Input, Typography } from "antd";

function Onboarding() {
  const [isLogin, setIsLogin] = useState(true);
  const { setAuthenticated } = useContext(AppContext);
  const nav = useNavigate();

  const handleLogin = (value) => {
    const savedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_DATA));
    if (
      savedUser &&
      savedUser.email === value.email &&
      savedUser.password === value.password
    ) {
      setAuthenticated(true);
      nav("/", { replace: true });
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleRegister = (value) => {
    localStorage.setItem(LOCAL_STORAGE.USER_DATA, JSON.stringify(value));
    setAuthenticated(true);
    nav("/", { replace: true });
    setIsLogin(true);
  };

  return (
    <div className="onboarding">
      <Card className="form-container">
        <Flex vertical gap={16}>
          <h1 className="onboarding-title">{isLogin ? "Login" : "Register"}</h1>
          <Form
            requiredMark={false}
            layout="vertical"
            onFinish={isLogin ? handleLogin : handleRegister}
          >
            {!isLogin && (
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please provide your username!" },
                ]}
              >
                <Input type="text" name="username" placeholder="Username" />
              </Form.Item>
            )}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please provide your email!",
                },
              ]}
            >
              <Input type="email" name="email" placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please provide your password!" },
              ]}
            >
              <Input.Password
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Item>
            <Button htmlType="submit" type="primary" style={{ width: "100%" }}>
              {isLogin ? "Login" : "Register"}
            </Button>
          </Form>
          <Typography.Text
            className="switch-text"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            {isLogin ? (
              <Typography.Link>Register here</Typography.Link>
            ) : (
              <Typography.Link>Login here</Typography.Link>
            )}
          </Typography.Text>
        </Flex>
      </Card>
    </div>
  );
}

export default Onboarding;
