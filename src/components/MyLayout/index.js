import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import logo from '../../logo.svg';
import './style.css'
const { Header, Sider, Content, Footer } = Layout;

export default class MyLayout extends React.Component {
  render() {
    return (
      <Layout className="container">
        <Sider collapsed={false}>
          <div className="logo-container">
            <img src={logo} className="logo-img" alt="这里是logo"/>
            <span className="logo-text">小农之家管理系统</span>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span>首页</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="user" />
              <span>用户管理</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="video-camera" />
              <span>专家审核</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="setting" />
              <span>系统设置</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="right-container">
          <Header className="right-header">
            用户资料
          </Header>
          <Content className="right-content">
            Content
          </Content>
          <Footer className="right-footer">
            &copy; 2018 隋堤倦客
          </Footer>
        </Layout>
      </Layout>
    );
  }
}