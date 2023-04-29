import { Menu, Layout, Affix } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import {
  HddOutlined,
  RedditOutlined,
  CustomerServiceOutlined,
  UserOutlined,
  DollarOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

import "./Dashboard.css";

const { SubMenu } = Menu;
const { Sider, Header } = Layout;

const DashboardLayout = () => {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState([]);

  useEffect(() => {
    // Take all pathName
    const seletedPathName = [
    "/dashboard/product/list", 
    "/dashboard/order/list",
    ]?.find(
      (key) => pathName.startsWith(key)
    );
    setSelectedKeys(seletedPathName);

    if (
      //Take pathName of dashboard
      ["/dashboard"]?.some((key) => pathName.startsWith(key))
    ) {
      setDefaultOpenKeys(["/dashboard"]);
    }

    if (
      //Take pathName of products
      ["/dashboard/product/list"]?.some((key) => pathName.startsWith(key))
    ) {
      setDefaultOpenKeys(["/dashboard/product"]);
    }

    if (
      //Take pathName of orders
      ["/dashboard/order/list"]?.some((key) => pathName.startsWith(key))
    ) {
      setDefaultOpenKeys(["/dashboard/order"]);
    }
  }, [pathName]);

  return (
    <Layout className="dashboard-layout ">
      <Affix offsetTop={0} style={{ zIndex: 1 }} className="affix">
        <Sider
          className="sider sider-collaps"
          collapsible
          breakpoint="lg"
          collapsedWidth="64px"
        >
          <div className="logo" onClick={() => navigate("/dashboard")} />
          <div>
            <Menu
              mode="inline"
              className="menu-sidebar"
              selectedKeys={selectedKeys}
              openKeys={defaultOpenKeys}
              onOpenChange={(openKeys) => setDefaultOpenKeys(openKeys)}
            >
              <SubMenu
                key={"/dashboard"}
                title={"Dashboard"}
                icon={<DashboardOutlined />}
              >
                <Menu.Item
                  onClick={() => navigate("/dashboard")}
                  key="/dashboard"
                >
                  {"Dashboard"}
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key={"/dashboard/product"}
                title={"Products"}
                icon={<HddOutlined />}
              >
                <Menu.Item
                  onClick={() => navigate("/dashboard/product/list")}
                  key="/dashboard/product/list"
                >
                  {"Product1 1"}
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key={"/dashboard/posts"}
                title={"Posts"}
                icon={<RedditOutlined />}
              >
                <Menu.Item>{"Posts 1"}</Menu.Item>
                <Menu.Item>{"Posts 2"}</Menu.Item>
              </SubMenu>
              <SubMenu
                key={"/dashboard/order"}
                title={"Order"}
                icon={<DollarOutlined />}
              >
                <Menu.Item
                  onClick={() => navigate("/dashboard/order/list")}
                  key="/dashboard/order/list"
                >
                  {"Order List"}
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key={"/dashboard/customer"}
                title={"Customer"}
                icon={<CustomerServiceOutlined />}
              >
                <Menu.Item>{"Customer 1"}</Menu.Item>
                <Menu.Item>{"Customer 1"}</Menu.Item>
              </SubMenu>
              <SubMenu
                key={"/dashboard/users"}
                title={"Users"}
                icon={<UserOutlined />}
              >
                <Menu.Item>{"Users 1"}</Menu.Item>
                <Menu.Item>{"Users 1"}</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </Sider>
      </Affix>
      <Layout className="site-layout">
        <Affix offsetTop={0} style={{ zIndex: 0 }} className="affix">
          <Header className="site-layout-background"></Header>
          {/* When use child router into parent router, we must add this Outlet element to locate position display child component when route match */}
          <Outlet />
        </Affix>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
