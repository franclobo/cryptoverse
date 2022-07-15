import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';

import {
  Homepage, Cryptocurrencies, CryptoDetails, Navbar,
} from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link>
          <br />
          All Rights Reserved.
        </Typography.Title>
      </div>
    </div>
  </div>
);

export default App;
