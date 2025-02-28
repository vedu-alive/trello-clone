import { DatePicker, Flex, Form, Input, Modal, Select } from "antd";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import { disabledDate, statusOptions, USERS_LIST } from "../../constants";

const CreateTaskModal = () => {
  const { taskModal, closeTaskModal, createTask, taskStatus } =
    useContext(AppContext);
  const [form] = Form.useForm(); 
  const [loading, setLoading] = useState(false);

  // Reset fields when modal opens
  useEffect(() => {
    if (taskModal) {
      form.setFieldsValue({ status: taskStatus });
    }
  }, [taskStatus, taskModal, form]);

  const handleCancel = () => {
    form.resetFields();
    closeTaskModal();
  };

  const handleFinish = async (values) => {
    try {
      setLoading(true);
      await createTask(values);
      
    } catch (error) {
      console.error("Failed:", error);
    } finally {
      form.resetFields();
      closeTaskModal();
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Create Task"
      open={taskModal}
      onCancel={handleCancel}
      centered
      okText="Create"
      onOk={() => form.submit()} // Manually submit the form on OK click
      confirmLoading={loading} // Disables button while loading
      destroyOnClose={true} // Ensures fresh form state when reopened
    >
      <Form form={form} onFinish={handleFinish} layout="vertical">
        <Form.Item
          label="Task Name"
          name="taskName"
          rules={[{ required: true, message: "Please provide task name!" }]}
        >
          <Input allowClear disabled={loading} />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea allowClear disabled={loading} />
        </Form.Item>

        <Form.Item label="Assigned to" name="assignedTo">
          <Select
            allowClear
            placeholder="Select assignee"
            options={USERS_LIST.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
            disabled={loading}
          />
        </Form.Item>

        <Flex gap={16} align="center">
          <Form.Item
            label="Status"
            name="status"
            style={{ flex: 1 }}
            rules={[{ required: true, message: "Please provide status" }]}
          >
            <Select
              options={statusOptions}
              allowClear
              disabled={loading}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="Due date"
            rules={[{ required: true, message: "Please provide due date" }]}
            name="dueDate"
            style={{ flex: 1 }}
          >
            <DatePicker
              placeholder="Select due date"
              allowClear
              disabled={loading}
              style={{ width: "100%" }}
              disabledDate={disabledDate}
            />
          </Form.Item>
        </Flex>
      </Form>
    </Modal>
  );
};

export default CreateTaskModal;
