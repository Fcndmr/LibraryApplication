import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthorList() {
    const [authors, setAuthors] = useState([]);
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

      const deleteAuthor = async (authorId) => {
        try {
          const response = await fetch(`http://localhost:7000/api/authors/${authorId}`, {
            method : "DELETE",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({_id : authorId})
          });
          if(response.ok){
            console.log("Yazar başarıyla silindi...");
            navigate("/admin/authors");
          }
        } catch (error) {
          console.log("Sunucu hatası...", error);
        }
      };
    
    useEffect(() => {
        getAuthors();
    },[deleteAuthor]);

    const columns = [
        {
            title: "Image",
            dataIndex: "img",
            width: "25%",
            render: (img, record) => (<img style={{width:"100px"}} alt={`/${record.img}`} src={`/${record.img}`} />)
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: 'Nationality',
            dataIndex: 'nationality',
            key: 'nationality',
        },
        {
          title: 'Birth Year',
          dataIndex: 'birthYear',
          key: 'birthYear',
        },
        {
            title: "Process",
            key: "process",
            render: (record) => (
                <>
                    <Button color="cyan" variant="solid" onClick={() => navigate(`/admin/authors/update/${record._id}`)} style={{margin:"5px"}}>Update</Button>
                    <Button color="danger" variant="solid" onClick={() => deleteAuthor(record._id)}>Delete</Button>
                </>
            )
          }
      ];
  return (
    <>
      <div className="text-4xl">Author List</div>
      <br />
      <hr />
      <br />
      <Table dataSource={authors} columns={columns} />
    </>
  );
}

export default AuthorList;
