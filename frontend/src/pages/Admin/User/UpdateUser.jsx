import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
    const [form] = Form.useForm();
  const formLayout = "vertical";
  const params = useParams();
  const navigate = useNavigate();
  const userId = params.id;

  const getUserById = async () => {
    try {
        const response = await fetch(`http://localhost:7000/api/users/${userId}`);
        if(response.ok){
            const data = await response.json();
            if(data){
                form.setFieldsValue({
                    username : data.username,
                    email : data.email,
                    password : "",
                    _id : userId
                })
                console.log(form.getFieldsValue())
            }
        }          
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  }

  useEffect(() => {
    getUserById()
  }, []);

  const updateUser = async (values) => {
    try {
        const updatedValues = { ...values };
        if (!values.password) {
          delete updatedValues.password;
        }
        const response = await fetch(`http://localhost:7000/api/users/${userId}`, {
            method : "PUT",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(updatedValues)
        });
        if(response.ok){
            console.log("Kullanıcı başarıyla güncellendi...");
            navigate("/admin/users");
        }else{
            console.log("Kullanıcı güncellenirken bir hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };
  return (
    <>
      <h1>Update User Panel</h1>
    <br /><hr /><br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={updateUser}
      >
        <Form.Item label="User Username" name="username">
          <Input placeholder="User username enter..." />
        </Form.Item>
        <Form.Item label="User Email" name="email">
          <Input placeholder="User email enter..." />
        </Form.Item>
        <Form.Item label="User Password" name="password">
          <Input.Password placeholder="Enter new password (Optional)" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Update</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UpdateUser