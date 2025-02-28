import { Form, Input, Modal } from "antd";
import { useContext, useState } from "react";
import { AppContext } from "../../context/context";

const CreateProjectModal = () => {
  const { projectModal, closeProjectModal, createProject } =
    useContext(AppContext);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    form.resetFields();
    closeProjectModal();
  };

  const handleFinish = async (values) => {
    try {
      setLoading(true);
      await createProject(values);
    } catch (error) {
      console.error("Failed:", error);
    } finally {
      form.resetFields();
      closeProjectModal();
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Create Project"
      open={projectModal}
      onCancel={handleCancel}
      centered
      onOk={() => form.submit()} // Correctly submits the form
      confirmLoading={loading} // Prevents multiple submissions
      destroyOnClose={true} // Resets the form when modal closes
    >
      <Form form={form} onFinish={handleFinish} layout="vertical">
        <Form.Item
          label="Project Name"
          name="projectName"
          rules={[{ required: true, message: "Please provide project name!" }]}
        >
          <Input allowClear disabled={loading} />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input.TextArea allowClear disabled={loading} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateProjectModal;
