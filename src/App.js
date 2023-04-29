import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/admin/dashboard.layout';

import './App.css'
import DashboardPage from './pages/admin/dashboard';
import ProductList from './pages/admin/products/product-list.container';
import OrderList from './pages/admin/orders/order-list.container';
import OrderDetail from './pages/admin/orders/order-detail.container';
import Login from './pages/login';
import HomePage from './pages/client/home/homePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<DashboardLayout />}>
          <Route path="" element={<DashboardPage />} />
          <Route path="product/list" element={<ProductList />} />
          <Route path="order/list" element={<OrderList />} />
          <Route path="order/list/:id" element={<OrderDetail />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
