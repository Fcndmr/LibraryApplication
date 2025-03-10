import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateQuote() {
    const [ authors, setAuthors] = useState([]);
    const [ books, setBooks] = useState([]);
    const [form] = Form.useForm();
    const formLayout = "vertical";
    const navigate = useNavigate();

    const getAuthors = async () => {
        try {
            const response = await fetch("http://localhost:7000/api/authors");
            if (response.ok) {
              const data = await response.json();
              setAuthors(data);
            } else {
              console.log("Yazarları getirirken bir sorun oluştu...");
            }
          } catch (error) {
            console.log("Sunucu hatası...", error);
          }
    };

    const getBooks = async () => {
        try {
            const response = await fetch("http://localhost:7000/api/books");
            if (response.ok) {
              const data = await response.json();
              setBooks(data);
            } else {
              console.log("Kitapları getirirken bir sorun oluştu...");
            }
          } catch (error) {
            console.log("Sunucu hatası...", error);
          }
    };

    useEffect(() => {
            getAuthors();
            getBooks();
    }, []);

    const createQuote = async (values) => {
        try {
            const response = await fetch("http://localhost:7000/api/quotes", {
                method : "POST",
                headers : { "Content-Type" : "application/json"},
                body : JSON.stringify({...values})
            });
            if(response.ok){
                console.log("Alıntı başarıyla oluşturuldu...");
                navigate("/admin/quotes");
            }else{
                console.log("Alıntı oluşturulurken bir hata oluştu...");
            }
        } catch (error) {
            console.log("Sunucu hatası...", error);
        }
    };

  return (
    <>
      <div className="text-4xl">Create Quote Panel</div>
      <br />
      <hr />
      <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={createQuote}
      >
        <Form.Item
          label="Quote Text"
          name="text"
          rules={[{ required: true, message: "Quote text enter..." }]}
        >
          <Input.TextArea placeholder="Quote text enter..." rows={10}/>
        </Form.Item>
        <Form.Item label="Author" name="author">
            <Select>
            {
                authors.map(author => (<Select.Option key={author._id} value={author._id}>{author.name}</Select.Option>))
            }
            </Select>
        </Form.Item>
        <Form.Item label="Book" name="book">
            <Select>
            {
                books.map(book => (<Select.Option key={book._id} value={book._id}>{book.title}</Select.Option>))
            }
            </Select>
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

export default CreateQuote

