import { InputNumber, Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";


function CreateAuthor() {
    const [form] = Form.useForm();
  const formLayout = "vertical";
  const navigate = useNavigate();
  const createAuthor = async (values) => {
    try {
        const response = await fetch("http://localhost:7000/api/authors", {
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(values)
        });
        if(response.ok){
            console.log("Yazar başarıyla oluşturuldu...");
            navigate("/admin/authors");
        }else{
            console.log("Yazar oluşturulurken bir hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };
  return (
    <>
      <div className="text-4xl">Create Author Panel</div>
      <br />
      <hr />
      <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={createAuthor}
      >
        <Form.Item
          label="Author Name"
          name="name"
          rules={[{ required: true, message: "Author name enter..." }]}
        >
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
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateAuthor;
