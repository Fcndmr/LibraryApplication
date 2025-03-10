import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function QuoteList() {
    const [quotes, setQuotes] = useState([]);
    const navigate = useNavigate();

    const getQuotes = async () => {
        try {
            const [ quoteResponse, bookResponse, authorResponse] = await Promise.all(
                [
                    fetch("http://localhost:7000/api/quotes"),
                    fetch("http://localhost:7000/api/books"),
                    fetch("http://localhost:7000/api/authors")
                ]
            );
            if(!bookResponse.ok || !authorResponse.ok || !quoteResponse.ok){
                console.log("Veri getirilirken bir hata meydana geldi...");
            }else{
                const [ quoteList, bookList, authorList] = await Promise.all(
                    [
                        quoteResponse.json(),
                        bookResponse.json(),
                        authorResponse.json()
                    ]
                );
                const dataSource = quoteList.map( quote => {
                    const authorId = quote.author;
                    const author = authorList.find(author => author._id === authorId);
                    const bookId = quote.book;
                    const book = bookList.find(book => book._id === bookId);
                    return{
                        ...quote,
                        authorName : author ? author.name : "",
                        bookName : book ? book.title : ""
                    }
                });
                setQuotes(dataSource);
            }  
        } catch (error) {
            console.log("Sunucu hatası...", error);
        }
    };

    const deleteQuote = async (quoteId) => {
        try {
          const response = await fetch(`http://localhost:7000/api/quotes/${quoteId}`, {
            method : "DELETE",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({_id : quoteId})
          });
          if(response.ok){
            console.log("Alıntı başarıyla silindi...");
            navigate("/admin/quotes");
          }
        } catch (error) {
          console.log("Sunucu hatası...", error);
        }
    };

    useEffect(() => {
        getQuotes();
    },[deleteQuote]);

    const columns = [
        {
          title: 'Text',
          dataIndex: 'text',
          key: 'text',
        },
        {
            title: 'Author',
            dataIndex: 'authorName',
            key: 'authorName',
        },
        {
            title: 'Book',
            dataIndex: 'bookName',
            key: 'bookName',
        },
        {
            title: "Process",
            key: "process",
            render: (record) => (
                <>
                    <Button color="cyan" variant="solid" onClick={() => navigate(`/admin/quotes/update/${record._id}`)} style={{margin:"5px"}}>Update</Button>
                    <Button color="danger" variant="solid" onClick={() => deleteQuote(record._id)}>Delete</Button>
                </>
            )
          }
      ];
  return (
    <>
      <div className="text-4xl">Quote List</div>
      <br />
      <hr />
      <br />
      <Table dataSource={quotes} columns={columns} />
    </>
  )
}

export default QuoteList
