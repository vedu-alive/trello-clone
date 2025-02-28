import { useContext, useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "../../constants";
import ProjectCards from "../ProjectCards";
import "./index.css";
import { Flex, Pagination } from "antd";
import { AppContext } from "../../context/context";

const Dashboard = () => {
  const { projects, currentPage, setCurrentPage } = useContext(AppContext);
  const [projectsList, setProjectsList] = useState([]);

  const paginatedProjects = projectsList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setProjectsList(projects);
  }, [projects]);
  return (
    <Flex vertical justify="space-between" gap={16} className="dashboard">
      <div className="project-container">
        {paginatedProjects.map((project) => (
          <ProjectCards key={project.id} project={project} />
        ))}
      </div>
      <Pagination
        className="pagination"
        total={projectsList?.length}
        defaultPageSize={ITEMS_PER_PAGE}
        onChange={(page) => setCurrentPage(page)}
        current={currentPage}
      />
    </Flex>
  );
};

export default Dashboard;
