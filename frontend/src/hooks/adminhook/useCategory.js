import { useState, useEffect } from "react";
import { getApi, postApi, putApi, deleteApi } from "../../services/api";
import { message } from "antd";
import { useForm } from "antd/es/form/Form";

export default function useCategory() {
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [modalType, setModalType] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [form] = useForm();
  const [file, setFile] = useState(null);

  // Fetch All Categories
  useEffect(() => {
    (async () => {
      try {
        const res = await getApi("/bookCategory");
        setCategories(res);
        setFiltered(res);
      } catch (err) {
        message.error("Error fetching categories");
      }
    })();
  }, []);

  // Search Filter
  useEffect(() => {
    if (!search) return setFiltered(categories);
    setFiltered(
      categories.filter((c) =>
        c.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, categories]);

  const openModal = (type, record = null) => {
    setModalType(type);
    setSelected(record);
    if (type === "edit") form.setFieldsValue(record);
    setVisible(true);
  };

  const handleSubmit = async (values) => {
    let formData = new FormData();
    console.log(formData);
    formData.append("title", values.title);
    formData.append("description", values.description);
    if (file) formData.append("image", file);

    try {
      let res;
      if (modalType === "add") {
        res = await postApi("/bookCategory", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setCategories([...categories, res]);
      } else if (modalType === "edit") {
        res = await putApi(`/bookCategory/${selected._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setCategories(
          categories.map((c) => (c._id === selected._id ? res : c))
        );
      } else if (modalType === "delete") {
        await deleteApi(`/bookCategory/${selected._id}`);
        setCategories(categories.filter((c) => c._id !== selected._id));
      }

      message.success(`Category ${modalType} successful`);
      setVisible(false);
      setFile(null);
      form.resetFields();
    } catch (err) {
      message.error("Operation failed");
    }
  };

  return {
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
  };
}
