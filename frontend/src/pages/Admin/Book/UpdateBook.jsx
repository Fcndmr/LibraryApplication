import { InputNumber, Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBook() {
    const [ authors, setAuthors] = useState([]);
    const [ publishers, setPublishers] = useState([]);
    const [ categories, setCategories] = useState([]);
    const [form] = Form.useForm();
    const formLayout = "vertical";
    const navigate = useNavigate();
    const params = useParams();
    const bookId = params.id;

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

    const getPublishers = async () => {
        try {
            const response = await fetch("http://localhost:7000/api/publishers");
            if (response.ok) {
              const data = await response.json();
              setPublishers(data);
            } else {
              console.log("Yayınevlerini getirirken bir sorun oluştu...");
            }
          } catch (error) {
            console.log("Sunucu hatası...", error);
          }
    };

    const getCategories = async () => {
        try {
            const response = await fetch("http://localhost:7000/api/categories");
            if (response.ok) {
              const data = await response.json();
              setCategories(data);
            } else {
              console.log("Kategorileri getirirken bir sorun oluştu...");
            }
          } catch (error) {
            console.log("Sunucu hatası...", error);
          }
    };

    const getBookById = async () => {
        try {
            const response = await fetch(`http://localhost:7000/api/books/${bookId}`);
            if(response.ok){
                const data = await response.json();
                if(data){
                    form.setFieldsValue({
                        title : data.title,
                        img : data.img,
                        _id : bookId,
                        pageCount : data.pageCount,
                        publishedYear : data.publishedYear,
                        category : data.category,
                        author : data.author,
                        publisher : data.publisher
                    })
                    console.log(form.getFieldsValue())
                }
            }          
        } catch (error) {
            console.log("Sunucu hatası...", error);
        }
    };

    useEffect(() => {
        getBookById();
        getAuthors();
        getPublishers();
        getCategories();
    }, [bookId]);

    const updateBook = async (values) => {
        try {
            const response = await fetch(`http://localhost:7000/api/books/${bookId}`, {
                method : "PUT",
                headers : { "Content-Type" : "application/json"},
                body : JSON.stringify(values)
            });
            if(response.ok){
                console.log("kitap başarıyla güncellendi...");
                navigate("/admin/books");
            }else{
                console.log("Kitap güncellenirken bir hata oluştu...");
            }
        } catch (error) {
            console.log("Sunucu hatası...", error);
        }
    };

  return (
    <>
      <div className="text-4xl">Update Book Panel</div>
      <br />
      <hr />
      <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={updateBook}
      >
        <Form.Item
          label="Book Title"
          name="title"
        >
          <Input placeholder="Book name enter..." />
        </Form.Item>
        <Form.Item label="Book Image" name="img">
          <Input placeholder="Book image enter..." />
        </Form.Item>
        <Form.Item label="Book Page Count" name="pageCount">
          <InputNumber placeholder="Book page count enter..." />
        </Form.Item>
        <Form.Item label="Book Published Year" name="publishedYear">
          <InputNumber placeholder="Book published year enter..." />
        </Form.Item>
        <Form.Item label="Author" name="author">
            <Select>
            {
                authors.map(author => (<Select.Option key={author._id} value={author._id}>{author.name}</Select.Option>))
            }
            </Select>
        </Form.Item>
        <Form.Item label="Category" name="category">
            <Select>
            {
                categories.map(category => (<Select.Option key={category._id} value={category._id}>{category.name}</Select.Option>))
            }
            </Select>
        </Form.Item>
        <Form.Item label="Publisher" name="publisher">
            <Select>
            {
                publishers.map(publisher => (<Select.Option key={publisher._id} value={publisher._id}>{publisher.name}</Select.Option>))
            }
            </Select>
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

export default UpdateBook
