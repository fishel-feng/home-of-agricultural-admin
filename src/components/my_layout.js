import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import logo from '../logo.svg';
const { Header, Sider, Content, Footer } = Layout;

export default class MyLayout extends React.Component {
  render() {
    return (
      <Layout style={{height: '100vh'}}>
        <Sider collapsed={false}>
          <div style={{color: '#ccc'}}>
            <img src={logo} alt="" style={{width: '64px', height: '64px'}}/>
            <span style={{lineHeight: '64px'}}>小农之家管理系统</span>
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
        <Layout>
          <Header style={{ background: '#35484d', color: '#ccc', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            用户资料
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff'}}>
            Content
          </Content>
          <Footer style={{ background: '#35484d', color: '#ccc', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            &copy; 2018 隋堤倦客
          </Footer>
        </Layout>
      </Layout>
    );
  }
}