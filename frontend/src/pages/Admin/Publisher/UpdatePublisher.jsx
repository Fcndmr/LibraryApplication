import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePublisher() {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const params = useParams();
  const navigate = useNavigate();
  const publisherId = params.id;

  const getPublisherById = async () => {
    try {
        const response = await fetch(`http://localhost:7000/api/publishers/${publisherId}`);
        if(response.ok){
            const data = await response.json();
            if(data){
                form.setFieldsValue({
                    name : data.name,
                    website : data.website,
                    img : data.img,
                    _id : publisherId,
                })
                console.log(form.getFieldsValue())
            }
        }          
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };

  useEffect(() => {
    getPublisherById()
  });

  const updatePublisher = async (values) => {
    try {
        const response = await fetch(`http://localhost:7000/api/publishers/${publisherId}`, {
            method : "PUT",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(values)
        });
        if(response.ok){
            console.log("Yayınevi başarıyla güncellendi...");
            navigate("/admin/publishers");
        }else{
            console.log("Yayınevi güncellenirken bir hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };

  return (
    <>
      <div className="text-4xl">Update Publisher Panel</div>
      <br />
      <hr />
      <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={updatePublisher}
      >
        <Form.Item label="Publisher Name" name="name">
          <Input placeholder="Publisher name enter..." />
        </Form.Item>
        <Form.Item label="Publisher Website" name="website">
          <Input placeholder="Publisher website enter..." />
        </Form.Item>
        <Form.Item label="Publisher Image" name="img">
          <Input placeholder="Publisher image enter..." />
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

export default UpdatePublisher
