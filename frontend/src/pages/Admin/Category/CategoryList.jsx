import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CategoryList() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

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

    const deleteCategory = async (categoryId) => {
        try {
          const response = await fetch(`http://localhost:7000/api/categories/${categoryId}`, {
            method : "DELETE",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({_id : categoryId})
          });
          if(response.ok){
            console.log("Kategori başarıyla silindi...");
            navigate("/admin/categories");
          }
        } catch (error) {
          console.log("Sunucu hatası...", error);
        }
    };

    useEffect(() => {
        getCategories();
    },[deleteCategory]);

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: "Process",
            key: "process",
            render: (record) => (
                <>
                    <Button color="cyan" variant="solid" onClick={() => navigate(`/admin/categories/update/${record._id}`)} style={{margin:"5px"}}>Update</Button>
                    <Button color="danger" variant="solid" onClick={() => deleteCategory(record._id)}>Delete</Button>
                </>
            )
          }
      ];
  return (
    <>
      <div className="text-4xl">Category List</div>
      <br />
      <hr />
      <br />
      <Table dataSource={categories} columns={columns} />
    </>
  )
}

export default CategoryList
