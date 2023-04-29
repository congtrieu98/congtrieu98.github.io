import { Button, Card, Col, Layout, Row, Space, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import Cards from "./Cards/Cards";
import TableCustom from "../../../components/TableCustom/table";

const DashboardPage = () => {
  const columns = [
    {
      title: "OrderId",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Product name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      render: (value) => {
        let color =
          value === "Completed"
            ? "green"
            : value === "Cancel"
            ? "red"
            : "yellow";
        return <Tag color={color}>{value.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Space size="middle">
            <Button type="link">
              <DeleteOutlined />
            </Button>
          </Space>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      orderId: 3233254,
      date: 15 - 10 - 2023,
      address: "New York No. 1 Lake Park",
      tags: "Pending",
      customer: 'Trieu nguyen'
    },
    {
      key: "2",
      name: "Jim Green",
      orderId: 4254522,
      date: 20 - 10 - 2023,
      address: "London No. 1 Lake Park",
      tags: "Pending",
      customer: 'Trieu nguyen'
    },
    {
      key: "3",
      name: "Joe Black",
      orderId: 32559456,
      date: 18 - 10 - 2023,
      address: "Sidney No. 1 Lake Park",
      tags: "Cancel",
      customer: 'Trieu nguyen'
    },
    {
      key: "3",
      name: "Joe Black",
      orderId: 32559456,
      date: 18 - 10 - 2023,
      address: "Sidney No. 1 Lake Park",
      tags: "Completed",
      customer: 'Trieu nguyen'
    },
  ];

  return (
    <Layout>
      <Layout.Content>
        <Card>
          <Cards />
        </Card>
      </Layout.Content>
      <TableCustom
        className="layoutContent"
        pagination={false}
        title={() => (
          <Row>
            <Col span={12}>
              <h3>Recent Order</h3>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Button type="primary">
                {"Xóa"}
                <DeleteOutlined />
              </Button>
            </Col>
          </Row>
        )}
        dataSource={data}
        columns={columns}
      />
    </Layout>
  );
}

export default DashboardPage;
