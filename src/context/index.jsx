import { useState } from "react";
import { sampleProjects, TASK_NAME, TASK_STATUS } from "../constants";
import { AppContext } from "./context";
import dayjs from "dayjs";

export const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState(sampleProjects);
  const [selectedProject, setSelectedProject] = useState();
  const [projectModal, setProjectModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);
  const [taskStatus, setTaskStatus] = useState(TASK_STATUS.READY);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTask, setSelectedTask] = useState();
  const [loadingKanban, setLoadingKanban] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  // create project
  const createProject = (values) =>
    new Promise((resolve) => {
      const { description, projectName } = values;

      setProjects((prevProjects) => {
        const newProject = {
          id: prevProjects.length ? Date.now() : 1,
          title: projectName,
          description,
          coverImage: "/linkedIn.png",
          tasks: Object.values(TASK_STATUS).map((status) => ({
            id: status,
            title: TASK_NAME[status],
            tasks: [],
          })),
        };

        return [newProject, ...prevProjects];
      });

      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

  // create task
  const createTask = (values) =>
    new Promise((resolve) => {
      const { assignedTo, description, dueDate, status, taskName } = values;

      setProjects((prevProjects) => {
        return prevProjects.map((project) => {
          if (project.id === selectedProject.id) {
            // Clone the project to avoid mutation
            const updatedProject = structuredClone(project);

            // Find the correct task column
            const statusColumn = updatedProject.tasks.find(
              (task) => task.id === status
            );
            if (!statusColumn) return project; // Safety check

            // Generate a unique task ID
            const newTask = {
              id: statusColumn.tasks.length
                ? Date.now()
                : 1,
              title: taskName,
              description,
              assignedTo,
              dueDate: dayjs(dueDate).format("MM/DD/YYYY"),
            };

            statusColumn.tasks = [newTask, ...statusColumn.tasks];

            return updatedProject;
          }
          return project;
        });
      });

      setSelectedProject((prevSelectedProject) => {
        if (
          !prevSelectedProject ||
          prevSelectedProject.id !== selectedProject.id
        )
          return prevSelectedProject;

        // Deep clone
        const updatedSelectedProject = structuredClone(prevSelectedProject);
        const statusColumn = updatedSelectedProject.tasks.find(
          (task) => task.id === status
        );
        if (statusColumn) {
          statusColumn.tasks = [
            {
              id: statusColumn.tasks.length
                ? Math.max(...statusColumn.tasks.map((t) => t.id)) + 1
                : 1,
              title: taskName,
              description,
              assignedTo,
              dueDate: dayjs(dueDate).format("MM/DD/YYYY"),
            },
            ...statusColumn.tasks,
          ];
        }

        return updatedSelectedProject;
      });

      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
// update task status
  const changeTaskStatus = ({ task, fromId, toId }) => {
    return new Promise((resolve) => {
      setProjects((prevProjects) => {
        return prevProjects.map((project) => {
          if (project.id === selectedProject.id) {
            // Clone the selected project deeply
            const updatedProject = structuredClone(project);

            // Find the old status column and remove the task
            const fromColumn = updatedProject.tasks.find(
              (col) => col.id === fromId
            );
            if (fromColumn) {
              fromColumn.tasks = fromColumn.tasks.filter(
                (t) => t.id !== task.id
              );
            }

            // Find the new status column and add the task
            const toColumn = updatedProject.tasks.find(
              (col) => col.id === toId
            );
            if (toColumn) {
              toColumn.tasks.push({ ...task }); // Ensure we push a new object to avoid mutability issues
            }

            return updatedProject;
          }
          return project;
        });
      });

      // Ensure selectedProject updates correctly
      setSelectedProject((prevSelectedProject) => {
        if (
          !prevSelectedProject ||
          prevSelectedProject.id !== selectedProject.id
        )
          return prevSelectedProject;

        // Clone selectedProject
        const updatedSelectedProject = structuredClone(prevSelectedProject);

        // Update the task in the selectedProject
        const fromColumn = updatedSelectedProject.tasks.find(
          (col) => col.id === fromId
        );
        if (fromColumn) {
          fromColumn.tasks = fromColumn.tasks.filter((t) => t.id !== task.id);
        }

        const toColumn = updatedSelectedProject.tasks.find(
          (col) => col.id === toId
        );
        if (toColumn) {
          toColumn.tasks.push({ ...task });
        }

        return updatedSelectedProject;
      });

      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };
// update task
  const updateTask = ({
    taskName,
    status,
    assignedTo,
    oldStatus,
    dueDate,
    description,
  }) => {
    return new Promise((resolve) => {
      setProjects((prevProjects) => {
        return prevProjects.map((project) => {
          if (project.id === selectedProject.id) {
            // Clone the selected project deeply
            const updatedProject = structuredClone(project);

            // Find the old status column and remove the task
            const fromColumn = updatedProject.tasks.find(
              (col) => col.id === oldStatus
            );
            if (fromColumn) {
              fromColumn.tasks = fromColumn.tasks.filter(
                (t) => t.id !== selectedTask.id
              );
            }

            // Find the new status column and add the task
            const toColumn = updatedProject.tasks.find(
              (col) => col.id === status
            );
            if (toColumn) {
              toColumn.tasks.push({
                ...selectedTask,
                title: taskName,
                description,
                assignedTo,
                dueDate: dayjs(dueDate).format("MM/DD/YYYY"),
              });
            }

            return updatedProject;
          }
          return project;
        });
      });

      // Ensure selectedProject updates correctly
      setSelectedProject((prevSelectedProject) => {
        if (
          !prevSelectedProject ||
          prevSelectedProject.id !== selectedProject.id
        )
          return prevSelectedProject;

        // Clone selectedProject
        const updatedSelectedProject = structuredClone(prevSelectedProject);

        // Update the task in the selectedProject
        const fromColumn = updatedSelectedProject.tasks.find(
          (col) => col.id === oldStatus
        );
        if (fromColumn) {
          fromColumn.tasks = fromColumn.tasks.filter(
            (t) => t.id !== selectedTask.id
          );
        }

        const toColumn = updatedSelectedProject.tasks.find(
          (col) => col.id === status
        );
        if (toColumn) {
          toColumn.tasks.push({
            ...selectedTask,
            title: taskName,
            description,
            assignedTo,
            dueDate: dayjs(dueDate).format("MM/DD/YYYY"),
          });
        }

        return updatedSelectedProject;
      });

      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };
// delete task
  const deleteTask = ({ taskId, boardId }) => {
    return new Promise((resolve) => {
      setProjects((prevProjects) => {
        return prevProjects.map((project) => {
          if (project.id === selectedProject.id) {
            // Clone the selected project deeply
            const updatedProject = structuredClone(project);

            // Find the column and remove the task
            const column = updatedProject.tasks.find((col) => col.id === boardId);
            if (column) {
              column.tasks = column.tasks.filter((t) => t.id !== taskId);
            }

            return updatedProject;
          }
          return project;
        });
      });

      // Ensure selectedProject updates correctly
      setSelectedProject((prevSelectedProject) => {
        if (
          !prevSelectedProject ||
          prevSelectedProject.id !== selectedProject.id
        )
          return prevSelectedProject;

        // Clone selectedProject
        const updatedSelectedProject = structuredClone(prevSelectedProject);

        // Update the task in the selectedProject
        const column = updatedSelectedProject.tasks.find(
          (col) => col.id === boardId
        );
        if (column) {
          column.tasks = column.tasks.filter((t) => t.id !== taskId);
        }

        return updatedSelectedProject;
      });

      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }

  // modal functions
  const openProjectModal = () => {
    setProjectModal(true);
  };
  const closeProjectModal = () => {
    setProjectModal(false);
  };
  const openTaskModal = () => {
    setTaskModal(true);
  };
  const closeTaskModal = () => {
    setTaskStatus(TASK_STATUS.READY);
    setTaskModal(false);
  };
  const OpenTaskModalWithStatus = (status) => {
    setTaskStatus(status);
    setTaskModal(true);
  };
  const openShowTaskModal = (task) => {
    setSelectedTask(task);
    setShowTaskModal(true);
  };
  const closeShowTaskModal = () => {
    setShowTaskModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        projects,
        selectedProject,
        setSelectedProject,
        projectModal,
        taskModal,
        createProject,
        createTask,
        openProjectModal,
        closeProjectModal,
        openTaskModal,
        closeTaskModal,
        taskStatus,
        OpenTaskModalWithStatus,
        showTaskModal,
        openShowTaskModal,
        closeShowTaskModal,
        currentPage,
        setCurrentPage,
        selectedTask,
        changeTaskStatus,
        loadingKanban,
        setLoadingKanban,
        updateTask,
        deleteTask,
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
