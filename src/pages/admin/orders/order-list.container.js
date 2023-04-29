import React, { useState } from 'react';
import { Card, Row, PageHeader, Col, Layout, DatePicker, Input, Button, Tag, Space } from "antd";
import { SearchOutlined, DeleteOutlined} from "@ant-design/icons";
import TableCustom from "../../../components/TableCustom/table";
import { Link, useNavigate } from "react-router-dom";

const breadcrumbItemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return (last || route.path !== '') ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={`/${paths.join('/')}`}>{route.breadcrumbName}</Link>
    );
  };
const OrderList = () => {
  const navigate = useNavigate();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  console.log(selectedRowKeys)
  const onSelectChange = selectedRowKeys => {
    
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onchange: onSelectChange
  };
  
    const columns = [
      {
        title: "OrderId",
        key: "orderId",
        render: (record) => {
          return <Button type="link" size="small" onClick={() => navigate(`${record?.id}`)}>{record?.orderId}</Button>
        }
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
        id: "1",
        name: "John Brown",
        orderId: 3233254,
        date: 15 - 10 - 2023,
        address: "New York No. 1 Lake Park",
        tags: "Pending",
        customer: 'Trieu nguyen'
      },
      {
        id: "2",
        name: "Jim Green",
        orderId: 4254522,
        date: 20 - 10 - 2023,
        address: "London No. 1 Lake Park",
        tags: "Pending",
        customer: 'Trieu nguyen'
      },
      {
        id: "3",
        name: "Joe Black",
        orderId: 32559456,
        date: 18 - 10 - 2023,
        address: "Sidney No. 1 Lake Park",
        tags: "Cancel",
        customer: 'Trieu nguyen'
      },
      {
        id: "4",
        name: "Joe Black",
        orderId: 32559456,
        date: 18 - 10 - 2023,
        address: "Sidney No. 1 Lake Park",
        tags: "Completed",
        customer: 'Trieu nguyen'
      },
    ];

    const routes = [
      {
        path: '/dashboard/inbound',
        breadcrumbName: 'Order',
      },
      {
        path: '/receipt',
        breadcrumbName: 'Order List',
      },
    ];
  return (
    <Layout className="layoutContent">
      <PageHeader
        ghost={false}
        className="customPageHeader"
        breadcrumb={{
            routes,
            itemRender: breadcrumbItemRender,
          }}
      />

      <Layout.Content>
        <Card className="cardSearch">
          <Row gutter={[16, 16]}>
            <Col>
              <label>{"Ngày đặt"}</label>
            </Col>
            <Col xxl={{ span: 4 }} sm={6} xs={16}>
              <DatePicker.RangePicker placeholder={["Từ", "Tới"]} />
            </Col>
            <Col>
              <label>{"Từ khóa"}</label>
            </Col>
            <Col xxl={{ span: 4 }} sm={6} xs={16}>
              <Input placeholder="Nhập từ khóa tìm kiếm!" />
            </Col>
            <Col xxl={{ span: 4 }} sm={6} xs={16}>
              <Button
              type={'primary'}
              ghost
              icon={<SearchOutlined />}
              >
                {'Search'}
              </Button>
            </Col>
          </Row>
        </Card>
        <TableCustom
        className="layoutContent"
        title={() => (
          <Row>
            <Col span={12}>
              <h3>Order List</h3>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Button type="primary">
                {"Xóa"}
                <DeleteOutlined />
              </Button>
            </Col>
          </Row>
        )}
        rowKey="id"
        rowSelection={rowSelection}
        dataSource={data}
        columns={columns}
        scroll={{x: 526}}

      />
      </Layout.Content>
    </Layout>
  );
};

export default OrderList;
