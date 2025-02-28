import { Button, Flex, Spin } from "antd";
import TaskCards from "../TaskCards";
import { MoreOutlined, PlusOutlined } from "@ant-design/icons";
import { useDrop } from "react-dnd";
import { DRAGGABLE_ITEM } from "../../constants";
import { useContext, useState } from "react";
import { AppContext } from "../../context/context";

const KanbanBoard = ({ task }) => {
  const { OpenTaskModalWithStatus, changeTaskStatus, setLoadingKanban } =
    useContext(AppContext);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: DRAGGABLE_ITEM.TASK,
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  async function handleDrop(monitor) {
    if (monitor?.boardId === task.id) return;
    setLoadingKanban(true);
    try {
      const updateTask = {
        assignedTo: monitor?.assignedTo,
        description: monitor?.description ?? "",
        dueDate: monitor?.dueDate,
        id: monitor?.id,
        title: monitor?.title,
      };
      const fromId = monitor?.boardId;
      const toId = task.id;
      await changeTaskStatus({ task: updateTask, fromId, toId });
      
    } catch (error) {
      console.error("Failed:", error);
    } finally {
      setLoadingKanban(false);
    }
  }

  const handlePlus = () => {
    OpenTaskModalWithStatus(task.id);
  };

  return (
      <Flex
        vertical
        gap={10}
        className={`kanban-board ${isOver ? "isOver" : ""}`}
        ref={drop}
        key={task.id}
      >
        <Flex align="center" justify="space-between">
          <p className="kanban-title">{task.title}</p>
          <Flex align="center" gap={8}>
            <Button type="text" icon={<PlusOutlined />} onClick={handlePlus} />
            <Button type="text" icon={<MoreOutlined />} />
          </Flex>
        </Flex>
        <Flex vertical gap={10} style={{ overflowY: "auto" }}>
          {task?.tasks?.map((item) => (
            <TaskCards key={item.id} boardId={task?.id} task={item} />
          ))}
        </Flex>
      </Flex>
  );
};

export default KanbanBoard;
