import React from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';

import { AppBar } from '../AppBar';
import { Footer } from '../Footer';

const { Header, Content } = Layout;

export const AppLayout = React.memo((props: any) => {
  const state = useSelector((state: any) => state);
  return (
    <>
      <Layout id={'main-layout'}>
        <Header className="App-Bar">
          <AppBar />
        </Header>
        <Content
          style={{
            overflow: 'scroll',
            padding: '0px 50px',
          }}
        >
          {props.children}
        </Content>
        <Footer />
      </Layout>
    </>
  );
});
