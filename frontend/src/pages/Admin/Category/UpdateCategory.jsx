import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCategory() {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const params = useParams();
  const navigate = useNavigate();
  const categoryId = params.id;

  const getCategoryById = async () => {
    try {
        const response = await fetch(`http://localhost:7000/api/categories/${categoryId}`);
        if(response.ok){
            const data = await response.json();
            if(data){
                form.setFieldsValue({
                    name : data.name,
                    description : data.description,
                    _id : categoryId,
                })
                console.log(form.getFieldsValue())
            }
        }          
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };

  useEffect(() => {
    getCategoryById()
  });

  const updateCategory = async (values) => {
    try {
        const response = await fetch(`http://localhost:7000/api/categories/${categoryId}`, {
            method : "PUT",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(values)
        });
        if(response.ok){
            console.log("Kategori başarıyla güncellendi...");
            navigate("/admin/categories");
        }else{
            console.log("Kategori güncellenirken bir hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };

  return (
    <>
      <div className="text-4xl">Update Category Panel</div>
      <br />
      <hr />
      <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={updateCategory}
      >
        <Form.Item label="Category Name" name="name">
          <Input placeholder="Category name enter..." />
        </Form.Item>
        <Form.Item label="Category Description" name="description">
          <Input.TextArea placeholder="Category description enter..." rows={5}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UpdateCategory
