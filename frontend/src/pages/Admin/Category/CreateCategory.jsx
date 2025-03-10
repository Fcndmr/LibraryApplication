import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

function CreateCategory() {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const navigate = useNavigate();

  const createCategory = async (values) => {
    try {
        const response = await fetch("http://localhost:7000/api/categories", {
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(values)
        });
        if(response.ok){
            console.log("Kategori başarıyla oluşturuldu...");
            navigate("/admin/categories");
        }else{
            console.log("Kategori oluşturulurken bir hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };
  return (
    <>
      <div className="text-4xl">Create Category Panel</div>
      <br />
      <hr />
      <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={createCategory}
      >
        <Form.Item
          label="Category Name"
          name="name"
          rules={[{ required: true, message: "Category name enter..." }]}
        >
          <Input placeholder="Category name enter..." />
        </Form.Item>
        <Form.Item label="Category Description" name="description">
          <Input.TextArea placeholder="Category description enter..." rows={5}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CreateCategory
