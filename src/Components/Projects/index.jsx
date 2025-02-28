import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import "./index.css";
import KanbanBoard from "./KanbanBoard";
import { Flex, Spin } from "antd";

const Projects = () => {
  const { selectedProject, loadingKanban } = useContext(AppContext);
  const [tasks, setTasks] = useState();
  useEffect(() => {
    if (selectedProject?.tasks) {
      setTasks(selectedProject?.tasks);
    }
  }, [selectedProject]);

  return (
    <Spin spinning={loadingKanban}>
      <Flex vertical gap={16} className="projects">
        <h1 className="project-title">{selectedProject?.title}</h1>
        <p className="project-description">{selectedProject?.description}</p>
        <div className="project-kanban-container">
          {tasks?.map((task) => (
            <KanbanBoard key={task.id} task={task} />
          ))}
        </div>
      </Flex>
    </Spin>
  );
};

export default Projects;
