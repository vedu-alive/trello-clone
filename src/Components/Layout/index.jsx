import { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header";
import CreateProjectModal from "../Modals/CreateProject";
import CreateTaskModal from "../Modals/CreateTask";
import './index.css';
import DisplayTask from "../Modals/DisplayTask";
import { AppContext } from "../../context/context";

export default function Layout() {
  const {authenticated} = useContext(AppContext);
  const nav = useNavigate();
  useEffect(() => {
    if (!authenticated) nav("/onboarding");
  }, [authenticated, nav]);
  return (
      <div>
        <Header />
        <div className="layout">
          <Outlet />
        </div>
      <CreateProjectModal />
      <CreateTaskModal />
      <DisplayTask/>
      </div>
  );
}
