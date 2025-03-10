import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BookList() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    const getBooks = async () => {
        try {
            const [ bookResponse, authorResponse, publisherResponse, categoryResponse] = await Promise.all(
                [
                    fetch("http://localhost:7000/api/books"),
                    fetch("http://localhost:7000/api/authors"),
                    fetch("http://localhost:7000/api/publishers"),
                    fetch("http://localhost:7000/api/categories")
                ]
            );
            if(!bookResponse.ok || !authorResponse.ok || !publisherResponse.ok || !categoryResponse.ok){
                console.log("Veri getirilirken bir hata meydana geldi...");
            }else{
                const [ bookList, authorList, publisherList, categoryList] = await Promise.all(
                    [
                        bookResponse.json(),
                        authorResponse.json(),
                        publisherResponse.json(),
                        categoryResponse.json()
                    ]
                );
                const dataSource = bookList.map( book => {
                    const authorId = book.author;
                    const author = authorList.find(author => author._id === authorId);
                    const publisherId = book.publisher;
                    const publisher = publisherList.find(publisher => publisher._id === publisherId);
                    const categoryId = book.category;
                    const category = categoryList.find(category => category._id === categoryId);
                    return{
                        ...book,
                        authorName : author ? author.name : "",
                        publisherName : publisher ? publisher.name : "",
                        categoryName : category ? category.name : ""
                    }
                });
                setBooks(dataSource);
            }  
        } catch (error) {
            console.log("Sunucu hatası...", error);
        }
    };

    const deleteBook = async (bookId) => {
        try {
          const response = await fetch(`http://localhost:7000/api/books/${bookId}`, {
            method : "DELETE",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({_id : bookId})
          });
          if(response.ok){
            console.log("Kitap başarıyla silindi...");
            navigate("/admin/books");
          }
        } catch (error) {
          console.log("Sunucu hatası...", error);
        }
    };

    useEffect(() => {
        getBooks();
    },[deleteBook]);

    const columns = [
        {
            title: "Image",
            dataIndex: "img",
            width: "25%",
            render: (img, record) => (<img style={{width:"100px"}} alt={`/${record.img}`} src={`/${record.img}`} />)
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
            title: 'Author',
            dataIndex: 'authorName',
            key: 'authorName',
        },
        {
            title: 'Category',
            dataIndex: 'categoryName',
            key: 'categoryName',
        },
        {
            title: 'Publisher',
            dataIndex: 'publisherName',
            key: 'publisherName',
        },
        {
          title: 'Page Count',
          dataIndex: 'pageCount',
          key: 'pageCount',
        },
        {
            title: 'Published Year',
            dataIndex: 'publishedYear',
            key: 'publishedYear',
        },
        {
            title: "Process",
            key: "process",
            render: (record) => (
                <>
                    <Button color="cyan" variant="solid" onClick={() => navigate(`/admin/books/update/${record._id}`)} style={{margin:"5px"}}>Update</Button>
                    <Button color="danger" variant="solid" onClick={() => deleteBook(record._id)}>Delete</Button>
                </>
            )
          }
      ];

  return (
    <>
      <div className="text-4xl">Book List</div>
      <br />
      <hr />
      <br />
      <Table dataSource={books} columns={columns} />
    </>
  )
}

export default BookList
