import React from "react";
import { Table, Input, Button, Modal, Form } from "antd";
import {
  PlusOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import useCategory from "../../hooks/adminhook/useCategory";

function BookCategory() {
  const {
    search,
    setSearch,
    filtered,
    modalType,
    visible,
    selected,
    form,
    file,
    setFile,
    openModal,
    setVisible,
    handleSubmit,
  } = useCategory();

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Image",
      dataIndex: "image",
      render: (img) => (
        <img src={img} alt="" className="w-16 h-16 object-cover rounded-md" />
      ),
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="space-x-2">
          <Button
            icon={<EyeOutlined />}
            onClick={() => openModal("view", record)}
          />
          <Button
            icon={<EditOutlined />}
            onClick={() => openModal("edit", record)}
          />
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => openModal("delete", record)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold mb-4">Book Category Management</h2>

      <div className="flex gap-4 mb-4">
        <Input.Search
          placeholder="Search category..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => openModal("add")}
        >
          Add Category
        </Button>
      </div>

      <Table columns={columns} dataSource={filtered} rowKey="_id" />

      <Modal
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        title={
          modalType
            ? modalType.charAt(0).toUpperCase() +
              modalType.slice(1) +
              " Category"
            : ""
        }
      >
        {modalType === "view" ? (
          <div>
            <p>
              <strong>Title:</strong> {selected.title}
            </p>
            <p>
              <strong>Description:</strong> {selected.description}
            </p>
            <img
              src={selected.image}
              alt=""
              className="w-full mt-3 rounded-lg"
            />
          </div>
        ) : modalType === "delete" ? (
          <div className="text-center">
            <p>Are you sure you want to delete?</p>
            <Button danger className="mt-3" onClick={() => handleSubmit({})}>
              Confirm
            </Button>
          </div>
        ) : (
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true }]}
            >
              <Input.TextArea rows={3} />
            </Form.Item>

            <Form.Item
              name="image"
              label="Image URL"
              rules={[{ required: true, message: "Image URL is required" }]}
            >
              <Input
                placeholder="Enter image URL"
                value={file}
                onChange={(e) => setFile(e.target.value)}
              />
            </Form.Item>

            {file && (
              <img
                src={file}
                alt="preview"
                className="w-full h-40 object-cover mt-2 rounded-md"
              />
            )}

            <Button type="primary" htmlType="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        )}
      </Modal>
    </div>
  );
}

export default BookCategory;
