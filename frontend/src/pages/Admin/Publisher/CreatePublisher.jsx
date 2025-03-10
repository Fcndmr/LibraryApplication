import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

function CreatePublisher() {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const navigate = useNavigate();

  const createPublisher = async (values) => {
    try {
        const response = await fetch("http://localhost:7000/api/publishers", {
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(values)
        });
        if(response.ok){
            console.log("Yayınevi başarıyla oluşturuldu...");
            navigate("/admin/publishers");
        }else{
            console.log("Yayınevi oluşturulurken bir hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };

  return (
    <>
      <div className="text-4xl">Create Publisher Panel</div>
      <br />
      <hr />
      <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={createPublisher}
      >
        <Form.Item
          label="Publisher Name"
          name="name"
          rules={[{ required: true, message: "Publisher name enter..." }]}
        >
          <Input placeholder="Publisher name enter..." />
        </Form.Item>
        <Form.Item label="Publisher Website" name="website">
          <Input placeholder="Publisher website enter..."/>
        </Form.Item>
        <Form.Item label="Publisher Image" name="img">
          <Input placeholder="Publisher image enter..." />
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

export default CreatePublisher

