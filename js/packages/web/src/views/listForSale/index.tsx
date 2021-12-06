import { Layout, Row, Col, Image, Button, Space, Input, Dropdown, Menu, Collapse, Switch } from 'antd';
import React, {useState} from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { Link } from 'react-router-dom';
<script src='https://kit.fontawesome.com/a076d05399.js'></script>
import { InfoCircleOutlined, LeftOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
// const { Content } = Layout;

export const ListForSaleView = () => {
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();
  const [collapseFlag, setCollapseFlag] = useState(false);
  const [showId, setShow] = useState(0);

  const showAuctions = (store && isConfigured) || isLoading;

  const collections = {
    image: 'Rectangle 809.png', collection: 'Degen Ape Academy', name: 'Degen #9086', price: '4.99USD', 
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
  }

  const owner = {
    image: 'Rectangle 914.png', name1: "CURSUS ENIM.", name2: "CURSUS ENIM #7705",
  }

  const { Panel } = Collapse;

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
    </Menu>
  )

  const handleCollapse = () => {
    console.log('here');
    if(collapseFlag){
      setCollapseFlag(false);
    } else {
      setCollapseFlag(true);
    }
  }

  return (
    <Layout>
    <div>
        <div className='lfs owner-bar'>
            <Space align="center" style={{height: "100px"}}>
                <LeftOutlined className='lfs owner-icon'/>
                <Image src={owner.image} preview={false}  className='lfs owner-img' />
                <div style={{paddingLeft: '15px'}}>
                    <h3>{owner.name1}</h3>
                    <span>{owner.name2}</span>
                </div>
            </Space>
        </div>

      <div className="lfs main">
        <Row>
            <Col sm={24} lg={12} className='lfs input-area'>
                <p className='lfs list-top-title'>LIST ITEM FOR SALE</p>
                <Row>
                  <Col span={12} className='lfs subtitle subtitle-space'>
                    <span>Type</span>
                  </Col>
                  <Col span={12} className='lfs subtitle-space'>
                    <InfoCircleOutlined  className='lfs icon-info' />
                  </Col>
                  <Col span={12} className='btn-sub2 sub2-l'>
                    <Button className={showId>0? "btn-default unselected":"btn-default"}
                      onClick={() => { setShow(0); }}
                    >
                      <span style={{marginRight: '10px'}}>&#36;</span>Fixed Price
                    </Button>
                  </Col>
                  <Col span={12} className='btn-sub2 sub2-r'>
                    <Button className={showId>0? "btn-default":"btn-default unselected"}
                        onClick={() => { setShow(1); }}
                      >
                        <span><img src='/Group 1753.png' className='lfs time-icon'/>Timed Auction</span>
                    </Button>
                  </Col>
                </Row>

                <Row style={showId>0? {display: 'none'}:{display: 'flex'}}>
                  <Col span={12} className='lfs subtitle subtitle-space'>
                    <span>Price</span>
                  </Col>
                  <Col span={12}>
                    <InfoCircleOutlined  className='lfs icon-info subtitle-space' />
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={5}>
                    <Dropdown overlay={menu}>
                      <Button className='btn-default' style={{width: '100%'}}>
                        <Space align='center' style={{float: 'left'}}><i className="fab fa-ethereum lfs price-icon"></i>ETH</Space>
                        <Space align='center' style={{float: 'right'}}><DownOutlined /></Space>
                      </Button>
                    </Dropdown>
                  </Col>
                  <Col xs={16} sm={16} md={16} lg={19} style={{paddingLeft: '10px'}}>
                    <Input placeholder='Amount'></Input>
                  </Col>
                  <Col span={24} className='lfs subtitle-space'>
                    <Space direction="vertical" style={{width: '100%'}}>
                      <Collapse collapsible="header" defaultActiveKey={['0']} bordered={false} expandIconPosition="right" onChange={handleCollapse}>
                        <Panel header="More Options" key="1" className='lfs-collapse' style={collapseFlag?{display:"none"}:{display:"block"}} />
                        <div style={collapseFlag?{display:"block", transition:"all 0.5s linear"}:{display:"none", transition:"all 0.5s linear"}}>
                        <Row>
                          <Col span={24}>
                            <p className='lfs subtitle subtitle-space'>Schedule Listing</p>
                            <i className='far fa-calendar-alt lfs icon-input'></i>
                            <Input placeholder='6 months'></Input>
                          </Col>
                          <Col span={12} className='lfs subtitle subtitle-space'>Sell as a bundle</Col>
                          <Col span={12}><Switch className='lfs icon-info subtitle-space' /></Col>
                          <Col span={12} className='lfs subtitle'>Reverse for specific buyer</Col>
                          <Col span={12}><Switch className='lfs icon-info' /></Col>
                        </Row>
                        </div>
                        <Panel header="Fewer Options" key="1" className='lfs-collapse fewer-title lfs subtitle-space' style={collapseFlag?{display:"block"}:{display:"none"}}/>
                      </Collapse>
                    </Space>
                  </Col>
                  <Col span={24}>
                    <Input className='border-bottom'></Input>
                  </Col>
                </Row>

                <Row style={showId>0? {display: 'flex'}:{display: 'none'}}>
                  <Col span={24}>
                    <p className='lfs subtitle subtitle-space'>Method</p>
                    <i className="fas fa-arrow-up lfs icon-input" style={{transform: 'rotate(45deg)'}}></i>
                    <Input placeholder='Sell to highest bidder'></Input>
                  </Col>
                  <Col span={24} className='lfs subtitle subtitle-space'>
                    <span>Starting Price</span>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={5}>
                    <Dropdown overlay={menu}>
                      <Button className='btn-default' style={{width: '100%'}}>
                        <Space align='center' style={{float: 'left'}}><i className="fab fa-ethereum"></i>WETH</Space>
                        <Space align='center' style={{float: 'right'}}><DownOutlined /></Space>
                      </Button>
                    </Dropdown>
                  </Col>
                  <Col xs={16} sm={16} md={16} lg={19} style={{paddingLeft: '10px'}}>
                    <Input placeholder='Amount'></Input>
                  </Col>
                  <Col span={24}>
                    <p className='lfs subtitle subtitle-space'>Duration</p>
                    <i className='far fa-calendar-alt lfs icon-input'></i>
                    <Input placeholder='7 days'></Input>
                  </Col>

                  <Col span={24} className='lfs subtitle-space'>
                    <Space direction="vertical" style={{width: '100%'}}>
                      <Collapse collapsible="header" defaultActiveKey={['0']} bordered={false} expandIconPosition="right" onChange={handleCollapse}>
                        <Panel header="More Options" key="1" className='lfs-collapse' style={collapseFlag?{display:"none"}:{display:"block"}} />
                        <div style={collapseFlag?{display:"block", transition:"all 0.5s linear"}:{display:"none", transition:"all 0.5s linear"}}>
                        <Row>
                          <Col span={12} className='lfs subtitle'>Include reverse price</Col>
                          <Col span={12}><Switch className='lfs icon-info' /></Col>
                        </Row>
                        </div>
                        <Panel header="Fewer Options" key="1" className='lfs-collapse fewer-title lfs subtitle-space' style={collapseFlag?{display:"block"}:{display:"none"}}/>
                      </Collapse>
                    </Space>
                  </Col>
                </Row>

                <Row>
                  <Col span={12} className='lfs subtitle lfs subtitle-space'>
                    <span>Fees</span>
                  </Col>
                  <Col span={12}>
                    <InfoCircleOutlined  className='lfs icon-info lfs subtitle-space' />
                  </Col>
                  <Col span={12} className='lfs fees text-left'>
                    <span>Service Fee</span>
                  </Col>
                  <Col span={12} className='lfs fees text-right'>
                    <span>2.5%</span>
                  </Col>
                  <Col span={12} className='lfs fees text-left'>
                    <span>Creator Royalty</span>
                  </Col>
                  <Col span={12} className='lfs fees text-right'>
                    <span>3.9%</span>
                  </Col>
                  <Col xs={12} sm={8} md={6} lg={6} className='lfs subtitle-space'>
                    <Button className='btn-default' style={{width: '100%'}}>Complete Listing</Button>                    
                  </Col>
                </Row>
            </Col>
            <Col sm={24} lg={12} className='lfs item-attr'>
                <div>
                    <Image src={collections.image} />
                    <Row style={{marginTop: '20px'}}>
                        <Col span={16}><span className="lfs item-collect">{collections.collection}</span></Col>
                        <Col span={8}><span className='lfs item-price-title'>LIST PRICE</span></Col>
                        <Col span={16}><span className="lfs item-name">{collections.name}</span></Col>
                        <Col span={8}><span className="lfs item-price"><i className="fab fa-ethereum"></i>{collections.price}</span></Col>
                    </Row>
                </div>
            </Col>
        </Row>
      </div>
    </div>
    </Layout>
  );
};
