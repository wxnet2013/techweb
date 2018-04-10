import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Pagination } from 'antd';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './index.scss';

const Home = () => (
  <div>
    home
    <Header />
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
    <Button><Icon type="link"/>ddddd</Button>
    <Link to="/about">关于</Link>
    <Footer />
  </div>
);

export default Home;
