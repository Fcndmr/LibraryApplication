import { InputNumber, Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateAuthor() {
    const [form] = Form.useForm();
  const formLayout = "vertical";
  const params = useParams();
  const navigate = useNavigate();
  const authorId = params.id;

  const getAuthorById = async () => {
    try {
        const response = await fetch(`http://localhost:7000/api/authors/${authorId}`);
        if(response.ok){
            const data = await response.json();
            if(data){
                form.setFieldsValue({
                    name : data.name,
                    img : data.img,
                    _id : authorId,
                    nationality : data.nationality,
                    birthYear : data.birthYear
                })
                console.log(form.getFieldsValue())
            }
        }          
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };

  useEffect(() => {
    getAuthorById()
  });

  const updateAuthor = async (values) => {
    try {
        const response = await fetch(`http://localhost:7000/api/authors/${authorId}`, {
            method : "PUT",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(values)
        });
        if(response.ok){
            console.log("Yazar başarıyla güncellendi...");
            navigate("/admin/authors");
        }else{
            console.log("Yazar güncellenirken bir hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };

  return (
    <>
      <div className="text-4xl">Update Author Panel</div>
      <br />
      <hr />
      <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={updateAuthor}
      >
        <Form.Item label="Author Name" name="name">
          <Input placeholder="Author name enter..." />
        </Form.Item>
        <Form.Item label="Author Image" name="img">
          <Input placeholder="Author image enter..." />
        </Form.Item>
        <Form.Item label="Author Nationality" name="nationality">
          <Input placeholder="Author nationality enter..." />
        </Form.Item>
        <Form.Item label="Author Birth Year" name="birthYear">
          <InputNumber placeholder="Author birth year enter..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default UpdateAuthor;
