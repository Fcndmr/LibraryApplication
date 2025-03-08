import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import {
  AppstoreOutlined,
  DashboardOutlined,
  UserOutlined,
  BarcodeOutlined,
  BookOutlined,
  HomeOutlined
} from "@ant-design/icons";

function AdminLayout({children}) {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "DashBoard",
      path: "/admin",
      onClick: () => {
        navigate("/admin");
      },
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Author",
      path: "/admin/authors",
      children: [
        {
          key: "2-1",
          icon: <UserOutlined />,
          label: "Add Author",
          path: "/admin/authors/create",
          onClick: () => {
            navigate("/admin/authors/create");
          },
        },
        {
          key: "2-2",
          icon: <UserOutlined />,
          label: "Author List",
          path: "/admin/authors",
          onClick: () => {
            navigate("/admin/authors");
          },
        },
      ],
    },
    {
      key: "3",
      icon: <BookOutlined />,
      label: "Book",
      path: "/admin/book",
      children: [
        {
          key: "3-1",
          icon: <BookOutlined />,
          label: "Add Book",
          path: "/admin/books/create",
          onClick: () => {
            navigate("/admin/books/create");
          },
        },
        {
          key: "3-2",
          icon: <BookOutlined />,
          label: "Book List",
          path: "/admin/books",
          onClick: () => {
            navigate("/admin/books");
          },
        },
      ],
    },
    {
      key: "4",
      icon: <AppstoreOutlined />,
      label: "Category",
      path: "/admin/categories",
      children: [
        {
          key: "4-1",
          icon: <AppstoreOutlined />,
          label: "Add Category",
          path: "/admin/categories/create",
          onClick: () => {
            navigate("/admin/categories/create");
          },
        },
        {
          key: "4-2",
          icon: <AppstoreOutlined />,
          label: "Category List",
          path: "/admin/categories",
          onClick: () => {
            navigate("/admin/categories");
          },
        },
      ],
    },
    {
      key: "5",
      icon: <HomeOutlined />,
      label: "Publisher",
      path: "/admin/publishers",
      children: [
        {
          key: "5-1",
          icon: <HomeOutlined />,
          label: "Add Publisher",
          path: "/admin/publishers/create",
          onClick: () => {
            navigate("/admin/publishers/create");
          },
        },
        {
          key: "5-2",
          icon: <HomeOutlined />,
          label: "Publisher List",
          path: "/admin/publishers",
          onClick: () => {
            navigate("/admin/publishers");
          },
        },
      ],
    },
    {
        key: "6",
        icon: <BarcodeOutlined />,
        label: "Quote",
        path: "/admin/quotes",
        children: [
          {
            key: "5-1",
            icon: <BarcodeOutlined />,
            label: "Add Quote",
            path: "/admin/quotes/create",
            onClick: () => {
              navigate("/admin/quotes/create");
            },
          },
          {
            key: "5-2",
            icon: <BarcodeOutlined />,
            label: "Quote List",
            path: "/admin/quotes",
            onClick: () => {
              navigate("/admin/quotes");
            },
          },
        ],
      },
  ];
  return (
    <>
      <div className="admin-layout">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider width="20%" style={{ color: "white" }}>
            <Menu
              mode="inline"
              theme="dark"
              items={items}
              style={{ width: "100" }}
            />
          </Sider>
          <Layout>
            <Header style={{ color: "white" }}>Header</Header>
            <Content style={{padding:"30px"}}>{children}</Content>
            <Footer style={{}}>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
}

export default AdminLayout;

