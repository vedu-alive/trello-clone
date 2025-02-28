import { BrowserRouter, Route, Routes } from "react-router-dom";
import Onboarding from "../Components/Onboarding";
import Layout from "../Components/Layout";
import { ROUTES } from "../constants";
import Dashboard from "../Components/Dashboard";
import Projects from "../Components/Projects";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.ONBOARDING} element={<Onboarding />} />\
        <Route path={ROUTES.MAIN} element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path={ROUTES.PROJECTS} element={<Projects/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
