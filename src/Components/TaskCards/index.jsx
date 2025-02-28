import { Avatar, Button, Card, Flex, Tag } from "antd";
import { useDrag } from "react-dnd";
import { DRAGGABLE_ITEM, USERS_LIST } from "../../constants";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";
import { DeleteOutlined } from "@ant-design/icons";
import './index.css';

const TaskCards = ({ task, boardId }) => {
  const { openShowTaskModal, deleteTask, setLoadingKanban } =
    useContext(AppContext);
  

  const [{ isDragging }, drag, preview] = useDrag({
    type: DRAGGABLE_ITEM.TASK,
    item: { ...task, boardId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: () => true,
  });

  const userName = task?.assignedTo && USERS_LIST[task?.assignedTo - 1]?.name;

  const getColor = (date) => {
    if (!date) return;
    const today = new Date();
    const dueDate = new Date(date);
    const diffTime = dueDate - today;
    // Get the difference in days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 0) {
      return "red";
    } else if (diffDays < 3) {
      return "orange";
    } else {
      return "green";
    }
  };

  const handleDelete = async (e) => {
    try {
      setLoadingKanban(true);
      e.stopPropagation();
      await deleteTask({ taskId: task.id, boardId });
    } catch (error) {
      console.error("Failed:", error);
    } finally {
      setLoadingKanban(false);
    }
  };

  useEffect(() => {
    document.body.style.cursor = isDragging ? "grabbing" : "auto";
    return () => {
      document.body.style.cursor = "auto"; // Cleanup on unmount
    };
  }, [isDragging]);

  return (
    <>
      {isDragging ? (
        <div ref={preview} />
      ) : (
        <Card
          ref={drag}
          title={task.title}
          style={{ cursor: "grab" }}
          onClick={() => openShowTaskModal({ ...task, boardId })}
          className="task-card"
          extra={
            <Tag style={{ margin: 0 }} color={getColor(task?.dueDate)}>
              {task?.dueDate}
            </Tag>
          }
        >
          <Flex vertical justify="space-between">
            <p className="task-card-description">{task.description}</p>
            <Flex align="center" justify="space-between">
              {userName && (
                <Flex align="center" gap={8}>
                  <Avatar size="small">{userName?.[0]}</Avatar>
                  <span>{userName}</span>
                </Flex>
              )}
              <Button
                onClick={handleDelete}
                danger
                type="text"
                icon={<DeleteOutlined color="red" />}
              />
            </Flex>
          </Flex>
        </Card>
      )}
    </>
  );
};

export default TaskCards;
