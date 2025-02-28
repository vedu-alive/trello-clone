import { useNavigate } from "react-router-dom";
import "./index.css";
import { ROUTES } from "../../constants";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Card, Flex } from "antd";

const ProjectCards = ({ project }) => {
  const nav = useNavigate();
  const { setSelectedProject } = useContext(AppContext);

  const handleClick = () => {
    setSelectedProject(project);
    nav(ROUTES.PROJECTS.replace(":id", project?.id));
  };

  return (
    <Card
      hoverable
      className="project-card"
      key={project?.id}
      onClick={handleClick}
      cover={
        <img
          src={project?.coverImage}
          alt={project?.title}
          className="project-card-img"
        />
      }
    >
      <Flex vertical gap={8}>
        <h3 className="project-card-title">{project?.title}</h3>
        <p className="project-card-description">{project?.description}</p>
      </Flex>
    </Card>
  );
};

export default ProjectCards;
