import { Card, Layout, PageHeader, Row } from "antd";
import { Link } from "react-router-dom";

const breadcrumbItemRender = (route, params, routes, paths) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last || route.path !== "" ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={`/${paths.join("/")}`}>{route.breadcrumbName}</Link>
  );
};
const OrderDetail = () => {
  const routes = [
    {
      path: "/dashboard/order/list",
      breadcrumbName: "Order",
    },
    {
      path: "/dashboard/order/detail",
      breadcrumbName: "Order Detail",
    },
  ];
  return (
    <Layout className="layoutContent">
      <PageHeader
        title="Order Detail"
        ghost={false}
        className="customPageHeader"
        breadcrumb={{
          routes,
          itemRender: breadcrumbItemRender,
        }}
      />
      <Layout.Content>
        <Card>
          <Row>

          </Row>
        </Card>
      </Layout.Content>
    </Layout>
  );
};

export default OrderDetail;
