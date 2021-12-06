import { Layout, Row, Col, Image, Button, Space, Input, Dropdown, Menu, Collapse, Switch } from 'antd';
import React, {useState} from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { Link } from 'react-router-dom';
import { InfoCircleOutlined, LeftOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
// const { Content } = Layout;

export const GenPosterView = () => {
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();
  const [collapseFlag, setCollapseFlag] = useState(false);
  const [showId, setShow] = useState(0);

  const showAuctions = (store && isConfigured) || isLoading;

  const owner = {
    image: 'Rectangle 914.png', name1: "CURSUS ENIM.", name2: "CURSUS ENIM #7705",
  }

  return (
    <Layout>
    <div className='slp'>
      <Row>
        <Col span={11} className='txt-area'>
          <Link to={`/`}>
            <Image src="./logo.png" preview={false} />
          </Link>
          <p>Congratulations! You Just Purchased ABC!</p>
          <p>you successfully purchase NFT title for</p>
          <p>29 on <span className='font-bold'>naraa</span></p>
          <p>DOM</p>
          <p>Edition 1 of 1</p>
          <p>It is happening again</p>
          <p>#3d#3dscan#animation#building#house</p>
          <p>#photogrammetry#saintpetersburg#surreal#video</p>
          <Space>
            <img src="" />
            <div>
              <span>@Aurory</span>
              <span>Artist</span>
            </div>
          </Space>
        </Col>
        <Col span={1}></Col>
        <Col span={12} className='img-area'>
          <Image src="./Rectangle 914.png" preview={false}  className='lfs owner-img' />
        </Col>
      </Row>          
    </div>
    </Layout>
  );
};
