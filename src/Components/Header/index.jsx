import { ArrowLeftOutlined, LogoutOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import { PageHeaders } from "../../constants";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const Header = () => {
  const { pathname } = useLocation();
  const { openProjectModal, openTaskModal, setAuthenticated } = useContext(AppContext);
  const nav = useNavigate();
  const flag = pathname.includes("projects");

  return (
    <Flex align="center" justify="space-between" className="header">
      <Flex align="center" gap={8}>
        {flag && (
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() => nav(-1)}
          />
        )}
        <h1 className="header-title">
          {flag ? "Projects" : PageHeaders[pathname]}
        </h1>
      </Flex>
      <Flex align="center" gap={8}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={flag ? openTaskModal : openProjectModal}
        >
          {flag ? "Add Task" : "Add Project"}
        </Button>
        <Tooltip title="Logout">
          <Button
            onClick={() => setAuthenticated(false)}
            icon={<LogoutOutlined style={{transform: 'rotate(-180deg)'}} />}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Header;
