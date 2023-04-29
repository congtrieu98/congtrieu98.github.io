import {Layout, PageHeader} from "antd";
import React from "react"

const ProductList = () => {
    console.log("vaof ddaay ")
    return (
        <Layout className="layoutContent">
            <PageHeader
            ghost={false}
            title={"Product List"}
            className="customPageHeader"
            />
            <Layout.Content>

            </Layout.Content>
        </Layout>
    )
}

export default ProductList;