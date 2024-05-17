import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import './custom.css';
import './output.css';
import ProtectedRoutes from './components/ProtectedRoutes';
import { Home } from "./components/Home";
import { AdminDashboard } from "./components/pages/AdminDashboard";
import { Login } from "./components/pages/Login";
import Schedules from "./components/Schedules";
import PageNotFound from './components/pages/PageNotFound';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
        <Route element={<Home />} path="/" exact />
          <Route element={<Login />} path="/login" />
          <Route element={<ProtectedRoutes />}>
            <Route element={<AdminDashboard />} path="/users" />
            <Route element={<Schedules />} path="/schedules" />
          </Route>
          <Route element={<PageNotFound />} path="*" />
        </Routes>
      </Layout>
    );
  }
}
