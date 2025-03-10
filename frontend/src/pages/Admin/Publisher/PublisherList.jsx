import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PublisherList() {
    const [publishers, setPublishers] = useState([]);
    const navigate = useNavigate();

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

    const deletePublisher = async (publisherId) => {
        try {
          const response = await fetch(`http://localhost:7000/api/publishers/${publisherId}`, {
            method : "DELETE",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({_id : publisherId})
          });
          if(response.ok){
            console.log("Yayınevi başarıyla silindi...");
            navigate("/admin/publishers");
          }
        } catch (error) {
          console.log("Sunucu hatası...", error);
        }
    };

    useEffect(() => {
        getPublishers();
    },[deletePublisher]);

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
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: "Process",
            key: "process",
            render: (record) => (
                <>
                    <Button color="cyan" variant="solid" onClick={() => navigate(`/admin/publishers/update/${record._id}`)} style={{margin:"5px"}}>Update</Button>
                    <Button color="danger" variant="solid" onClick={() => deletePublisher(record._id)}>Delete</Button>
                </>
            )
          }
      ];
  return (
    <>
      <div className="text-4xl">Publisher List</div>
      <br />
      <hr />
      <br />
      <Table dataSource={publishers} columns={columns} />
    </>
  )
}

export default PublisherList

