import { InputNumber, Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateQuote() {
    const [ authors, setAuthors] = useState([]);
    const [ books, setBooks] = useState([]);
    const [form] = Form.useForm();
    const formLayout = "vertical";
    const navigate = useNavigate();
    const params = useParams();
    const quoteId = params.id;

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

    const getQuoteById = async () => {
            try {
                const response = await fetch(`http://localhost:7000/api/quotes/${quoteId}`);
                if(response.ok){
                    const data = await response.json();
                    if(data){
                        form.setFieldsValue({
                            text : data.text,
                            _id : quoteId,
                            author : data.author,
                            book : data.book
                        })
                        console.log(form.getFieldsValue())
                    }
                }          
            } catch (error) {
                console.log("Sunucu hatası...", error);
            }
    };
    
    useEffect(() => {
            getQuoteById();
            getAuthors();
            getBooks();
    }, [quoteId]);

    const updateQuote = async (values) => {
        try {
            const response = await fetch(`http://localhost:7000/api/quotes/${quoteId}`, {
                method : "PUT",
                headers : { "Content-Type" : "application/json"},
                body : JSON.stringify(values)
            });
            if(response.ok){
                console.log("Alıntı başarıyla güncellendi...");
                navigate("/admin/quotes");
            }else{
                console.log("Alıntı güncellenirken bir hata oluştu...");
            }
        } catch (error) {
            console.log("Sunucu hatası...", error);
        }
    };

  return (
    <>
      <div className="text-4xl">Update Quote Panel</div>
      <br />
      <hr />
      <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={updateQuote}
      >
        <Form.Item
          label="Quote Text"
          name="text"
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
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UpdateQuote
