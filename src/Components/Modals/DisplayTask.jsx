import { Button, DatePicker, Flex, Form, Input, Modal, Select, Spin } from "antd";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import { disabledDate, statusOptions, USERS_LIST } from "../../constants";
import dayjs from "dayjs";
import './index.css';
import { DeleteOutlined } from "@ant-design/icons";

const DisplayTask = () => {
  const { showTaskModal, closeShowTaskModal, selectedTask, updateTask, setLoadingKanban, deleteTask } =
    useContext(AppContext);
  const [form] = Form.useForm();
  const [varient, setVarient] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const handleFormChange = () => {
    const initialValues = {
      taskName: selectedTask?.title,
      description: selectedTask?.description,
      assignedTo: selectedTask?.assignedTo,
      dueDate: selectedTask?.dueDate
        ? dayjs(selectedTask.dueDate, "MM/DD/YYYY")
        : null,
      status: selectedTask?.boardId,
    };

    const currentValues = form.getFieldsValue();

    // Check if any value is different from initialValues
    const hasChanged = Object.keys(initialValues).some(
      (key) =>
        JSON.stringify(currentValues[key]) !==
        JSON.stringify(initialValues[key])
    );

    setIsChanged(hasChanged);
  };

  const handleFinish = async (values) => {
    try {
      setLoading(true);
      await updateTask({...values, oldStatus: selectedTask.boardId});
      
    } catch (error) {
      console.error("Failed:", error);
    } finally {
      form.resetFields();
      closeShowTaskModal();
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoadingKanban(true);
      setLoading(true);
      await deleteTask({ taskId: selectedTask?.id, boardId: selectedTask?.boardId });
    } catch (error) {
      console.error("Failed:", error);
    } finally {
      setLoadingKanban(false);
      setLoading(false);
      closeShowTaskModal();
    }
  };

  useEffect(() => {
    if (showTaskModal) {
      const initial = {
        taskName: selectedTask?.title,
        description: selectedTask?.description,
        assignedTo: selectedTask?.assignedTo,
        dueDate: selectedTask?.dueDate
          ? dayjs(selectedTask.dueDate, "MM/DD/YYYY")
          : null,
        status: selectedTask?.boardId,
      };

      form.setFieldsValue(initial);
      setVarient("");
      setIsChanged(false);
    }
  }, [selectedTask, showTaskModal, form]);

  const onBlur = () => {
    setVarient("");
  }

  return (
    <Modal
      open={showTaskModal}
      onCancel={closeShowTaskModal}
      onOk={() => form.submit()} // Submit only if data changed
      okButtonProps={{ disabled: !isChanged }} // OK button enabled only when changes exist
      okText="Save"
      destroyOnClose={true}
      title={`Task ID: ${selectedTask?.id}`}
      confirmLoading={loading}
      centered
      footer={[
        <Button
          key="delete"
          icon={<DeleteOutlined />}
          danger
          onClick={handleDelete}
        />,
        <Button key="cancel" onClick={closeShowTaskModal}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => form.submit()}
          disabled={!isChanged}
          loading={loading}
        >
          Save
        </Button>,
      ]}
    >
      <Spin spinning={loading}>
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          onValuesChange={handleFormChange}
          onFinish={handleFinish}
        >
          <Form.Item
            label="Task Name"
            name="taskName"
            className="custom-form-item-class"
            rules={[{ required: true, message: "Please provide task name!" }]}
          >
            <Input
              variant={varient === "taskName" ? "outlined" : "borderless"}
              onFocus={() => setVarient("taskName")}
              onBlur={onBlur}
            />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            className="custom-form-item-class"
          >
            <Input.TextArea
              name="description"
              variant={varient === "description" ? "outlined" : "borderless"}
              onFocus={() => setVarient("description")}
              onBlur={onBlur}
            />
          </Form.Item>
          <Form.Item
            label="Assigned to"
            name="assignedTo"
            className="custom-form-item-class"
          >
            <Select
              allowClear
              variant={varient === "assignedTo" ? "outlined" : "borderless"}
              onFocus={() => setVarient("assignedTo")}
              placeholder="Select assignee"
              onBlur={onBlur}
              options={USERS_LIST.map((item) => ({
                label: item.name,
                value: item.id,
              }))}
            />
          </Form.Item>
          <Flex gap={16} align="center">
            <Form.Item
              label="Status"
              name="status"
              style={{ flex: 1 }}
              className="custom-form-item-class"
            >
              <Select
                options={statusOptions}
                onBlur={onBlur}
                style={{ width: "100%" }}
                variant={varient === "status" ? "outlined" : "borderless"}
                onFocus={() => setVarient("status")}
              />
            </Form.Item>
            <Form.Item
              label="Due date"
              name="dueDate"
              style={{ flex: 1 }}
              className="custom-form-item-class"
            >
              <DatePicker
                variant={varient === "dueDate" ? "outlined" : "borderless"}
                onFocus={() => setVarient("dueDate")}
                placeholder="Select due date"
                format="MM/DD/YYYY"
                style={{ width: "100%" }}
                onBlur={onBlur}
                disabledDate={disabledDate}
              />
            </Form.Item>
          </Flex>
        </Form>
      </Spin>
    </Modal>
  );
};

export default DisplayTask;
