import { Button, Form, Input } from "antd";
import { useNavigate } from 
"react-router-dom";

function CreateUser() {
    const [form] = Form.useForm();
  const formLayout = "vertical";
  const navigate = useNavigate();

  const createUser = async (values) => {
    try {
        const response = await fetch("http://localhost:7000/api/auth/register", {
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(values)
        });
        if(response.ok){
            console.log("Kullanıcı başarıyla oluşturuldu...");
            navigate("/admin/users");
        }else{
            console.log("Kullanıcı oluşturulurken bir hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };
  return (
    <>
        <h1>Create User Panel</h1>
    <br /><hr /><br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={createUser}
      >
        <Form.Item label="User Username" name="username">
          <Input placeholder="User username enter..." />
        </Form.Item>
        <Form.Item label="User Email" name="email">
          <Input placeholder="User email enter..." />
        </Form.Item>
        <Form.Item label="User Password" name="password">
          <Input.Password placeholder="User password enter..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Create</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CreateUser