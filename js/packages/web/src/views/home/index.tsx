import { Layout, Row, Col, Image, Button, Space, Input, Carousel } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { SalesListView } from './components/SalesList';
import { SetupView } from './setup';
import { Link } from 'react-router-dom';

export const HomeView = () => {
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();

  const showAuctions = (store && isConfigured) || isLoading;

  const collections = [
    {
      image: 'Rectangle 809.png',
      name1: 'Degen Ape Academy',
      text1: '962.7K',
      text2: 'Total Volume',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
    {
      image: 'Rectangle 810.png',
      name1: 'Solana Monkey Business',
      text1: '962.7K',
      text2: 'Total Volume',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
    {
      image: 'Rectangle 811.png',
      name1: 'Aurory',
      text1: '962.7K',
      text2: 'Total Volume',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
    {
      image: 'Rectangle 812.png',
      name1: 'Frakt',
      text1: '962.7K',
      text2: 'Total Volume',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
  ];

  const arts = [
    {
      image: 'Rectangle 6.svg',
      name1: 'Metaverse Blast',
      text1: '8.24Ξ ($25,089)',
      text2: 'List Price',
      text3: '15Ξ ($9,160)',
      text4: 'Last sale price',
      name2: '@jhone Doe',
      avatar: 'avatar.svg',
      number: '41',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
    {
      image: 'Rectangle 6.svg',
      name1: 'Metaverse Blast',
      text1: '8.24Ξ ($25,089)',
      text2: 'List Price',
      text3: '15Ξ ($9,160)',
      text4: 'Last sale price',
      name2: '@jhone Doe',
      avatar: 'avatar.svg',
      number: '41',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
    {
      image: 'Rectangle 6.svg',
      name1: 'Metaverse Blast',
      text1: '8.24Ξ ($25,089)',
      text2: 'List Price',
      text3: '15Ξ ($9,160)',
      text4: 'Last sale price',
      name2: '@jhone Doe',
      avatar: 'avatar.svg',
      number: '41',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
    {
      image: 'Rectangle 6.svg',
      name1: 'Metaverse Blast',
      text1: '8.24Ξ ($25,089)',
      text2: 'List Price',
      text3: '15Ξ ($9,160)',
      text4: 'Last sale price',
      name2: '@jhone Doe',
      avatar: 'avatar.svg',
      number: '41',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
  ];

  const creators = [
    {
      image1: 'Rectangle 839.png',
      image2: 'Rectangle 840.png',
      image3: 'Rectangle 841.png',
      text1: 'Milkformyaccount',
      text2: '28',
    },
    {
      image1: 'Rectangle 839.png',
      image2: 'Rectangle 840.png',
      image3: 'Rectangle 841.png',
      text1: 'Leeple',
      text2: '13',
    },
    {
      image1: 'Rectangle 839.png',
      image2: 'Rectangle 840.png',
      image3: 'Rectangle 841.png',
      text1: 'The Young Abstract',
      text2: '04',
    },
    {
      image1: 'Rectangle 839.png',
      image2: 'Rectangle 840.png',
      image3: 'Rectangle 841.png',
      text1: 'Nolan Bunshell',
      text2: '11',
    },
  ];

  // const items = [
  //   {title: 'Trending Artists', images: ['./img/Ellipse 7.svg', './img/Ellipse 8.svg', './img/Ellipse 9.svg', './img/Ellipse 10.svg', './img/Ellipse 10.svg']},
  //   {title: 'Top Collectors', images: ['./img/Ellipse 7.svg', './img/Ellipse 8.svg', './img/Ellipse 9.svg', './img/Ellipse 10.svg', './img/Ellipse 10.svg']}
  // ];

  const [visible, setVisible] = React.useState(true);

  return (
    <Layout>
      <div className="rectangle2 space_entire">
        <Row style={{ marginBottom: '50px', marginLeft: '100px' }}>
          <Col span={12}>
            <h1 className="section-title">Collect Digital Art</h1>
            <h4>Buy and sell NFTs from the world’s top artists</h4>
            <Link to={`/`}>
              <Button size="large" className="start_collecting">
                Start Collecting
              </Button>
            </Link>
          </Col>
          <Col span={12}>
            <h4 className="feature_img">FEATURED ART</h4>
            <Image src="./Art.svg" preview={false} width="100%" />
          </Col>
          <Col span={12}></Col>
          <Col span={3}>
            <h4>ARTIST</h4>
            <div className="space-align-block">
              <Space align="center">
                <Image src="./avatar.svg" preview={false} />
                <span className="mock-block" style={{ color: 'black' }}>
                  @jhone Doe
                </span>
              </Space>
            </div>
          </Col>
          <Col span={3} className="pic">
            <div style={{ marginTop: '30px' }}>
              <p style={{ color: '#1341FF', fontSize: '12px' }}>
                8.24Ξ ($25,089)
              </p>
              <p style={{ color: '#1341FF', fontSize: '10px' }}>List Price</p>
            </div>
          </Col>
          <Col span={3} className="pic">
            <div style={{ marginTop: '30px' }}>
              <p style={{ color: '#1341FF', fontSize: '12px' }}>15Ξ ($9,160)</p>
              <p style={{ color: '#1341FF', fontSize: '10px' }}>
                Last sale price
              </p>
            </div>
          </Col>
          <Col span={3}>
            <p
              style={{
                color: '#616368',
                textAlign: 'right',
                marginTop: '45px',
              }}
            >
              41
            </p>
          </Col>
        </Row>
      </div>
      <div className="little_space">
        <h2>Top Collectibles</h2>

        <Carousel dotPosition="bottom" className="carousel1">
          <div>
            <Row gutter={16}>
              {collections.map((collection, index) => (
                <Col span={6} className="gutter-row" key={index}>
                  <Image
                    src={collection.image}
                    preview={false}
                    className="rectangle6"
                  />
                  <div>
                    <h3 style={{ color: 'black', fontSize: '20px' }}>
                      {collection.name1}
                    </h3>
                    <div className="inline collect-stat">
                      <img src="https://img.icons8.com/material-outlined/24/000000/final-state.png" />
                      <span className="text1">{collection.text1}</span>
                      <span className="text2">{collection.text2}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <Row gutter={16}>
              {collections.map((collection, index) => (
                <Col span={6} className="gutter-row" key={index}>
                  <Image
                    src={collection.image}
                    preview={false}
                    className="rectangle6"
                  />
                  <div>
                    <h3 style={{ color: 'black', fontSize: '20px' }}>
                      {collection.name1}
                    </h3>
                    <div className="inline collect-stat">
                      <img src="https://img.icons8.com/material-outlined/24/000000/final-state.png" />
                      <span className="text1">{collection.text1}</span>
                      <span className="text2">{collection.text2}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <Row gutter={16}>
              {collections.map((collection, index) => (
                <Col span={6} className="gutter-row" key={index}>
                  <Image
                    src={collection.image}
                    preview={false}
                    className="rectangle6"
                  />
                  <div>
                    <h3 style={{ color: 'black', fontSize: '20px' }}>
                      {collection.name1}
                    </h3>
                    <div className="inline collect-stat">
                      <img src="https://img.icons8.com/material-outlined/24/000000/final-state.png" />
                      <span className="text1">{collection.text1}</span>
                      <span className="text2">{collection.text2}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Carousel>
        <div style={{ textAlign: 'center' }}>
          <Button size="large" className="collections">
            <Link to={`/collections/`}>
              See other collections
            </Link>
          </Button>
        </div>
      </div>
      <div className="little_space">
        <h2>Top Art</h2>
        <Carousel dotPosition="bottom" className="carousel1">
          <div>
            <Row gutter={16}>
              {arts.map((arts, index) => (
                <Col span={6} className="gutter-row" key={index}>
                  <Image
                    src={arts.image}
                    preview={false}
                    className="rectangle6"
                  />
                  <div>
                    <h3 style={{ color: 'black', fontSize: '20px' }}>
                      {arts.name1}
                    </h3>
                    <Row>
                      <Col span={8}>
                        <p style={{ color: '#1341FF', fontSize: '12px' }}>
                          {arts.text1}
                        </p>
                        <p style={{ color: '#1341FF', fontSize: '10px' }}>
                          {arts.text2}
                        </p>
                      </Col>
                      <Col span={8}>
                        <p style={{ color: '#1341FF', fontSize: '12px' }}>
                          {arts.text3}
                        </p>
                        <p style={{ color: '#1341FF', fontSize: '10px' }}>
                          {arts.text4}
                        </p>
                      </Col>
                      <Col span={8}></Col>
                    </Row>
                    <hr />
                    <Row style={{ paddingTop: '10px' }}>
                      <Col span={12}>
                        <div className="space-align-block">
                          <Space align="center">
                            <Image src={arts.avatar} preview={false} />
                            <div style={{ paddingLeft: '15px' }}>
                              <h3
                                style={{ color: 'black', marginBottom: '-3px' }}
                              >
                                ARTIST
                              </h3>
                              <span
                                className="mock-block"
                                style={{ color: 'black' }}
                              >
                                {arts.name2}
                              </span>
                            </div>
                          </Space>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          className="space-align-block"
                          style={{ marginTop: '20px', textAlign: 'right' }}
                        >
                          <Space>
                            <HeartFilled
                              style={{ color: '#C4C4C4', fontSize: '20px' }}
                            />
                            <span
                              className="mock-block"
                              style={{ color: '#C4C4C4' }}
                            >
                              {arts.number}
                            </span>
                          </Space>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <Row gutter={16}>
              {arts.map((arts, index) => (
                <Col span={6} className="gutter-row" key={index}>
                  <Image
                    src={arts.image}
                    preview={false}
                    className="rectangle6"
                  />
                  <div>
                    <h3 style={{ color: 'black', fontSize: '20px' }}>
                      {arts.name1}
                    </h3>
                    <Row>
                      <Col span={8}>
                        <p style={{ color: '#1341FF', fontSize: '12px' }}>
                          {arts.text1}
                        </p>
                        <p style={{ color: '#1341FF', fontSize: '10px' }}>
                          {arts.text2}
                        </p>
                      </Col>
                      <Col span={8}>
                        <p style={{ color: '#1341FF', fontSize: '12px' }}>
                          {arts.text3}
                        </p>
                        <p style={{ color: '#1341FF', fontSize: '10px' }}>
                          {arts.text4}
                        </p>
                      </Col>
                      <Col span={8}></Col>
                    </Row>
                    <hr />
                    <Row style={{ paddingTop: '10px' }}>
                      <Col span={12}>
                        <div className="space-align-block">
                          <Space align="center">
                            <Image src={arts.avatar} preview={false} />
                            <div style={{ paddingLeft: '15px' }}>
                              <h3
                                style={{ color: 'black', marginBottom: '-3px' }}
                              >
                                ARTIST
                              </h3>
                              <span
                                className="mock-block"
                                style={{ color: 'black' }}
                              >
                                {arts.name2}
                              </span>
                            </div>
                          </Space>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          className="space-align-block"
                          style={{ marginTop: '20px', textAlign: 'right' }}
                        >
                          <Space>
                            <HeartFilled
                              style={{ color: '#C4C4C4', fontSize: '20px' }}
                            />
                            <span
                              className="mock-block"
                              style={{ color: '#C4C4C4' }}
                            >
                              {arts.number}
                            </span>
                          </Space>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <Row gutter={16}>
              {arts.map((arts, index) => (
                <Col span={6} className="gutter-row" key={index}>
                  <Image
                    src={arts.image}
                    preview={false}
                    className="rectangle6"
                  />
                  <div>
                    <h3 style={{ color: 'black', fontSize: '20px' }}>
                      {arts.name1}
                    </h3>
                    <Row>
                      <Col span={8}>
                        <p style={{ color: '#1341FF', fontSize: '12px' }}>
                          {arts.text1}
                        </p>
                        <p style={{ color: '#1341FF', fontSize: '10px' }}>
                          {arts.text2}
                        </p>
                      </Col>
                      <Col span={8}>
                        <p style={{ color: '#1341FF', fontSize: '12px' }}>
                          {arts.text3}
                        </p>
                        <p style={{ color: '#1341FF', fontSize: '10px' }}>
                          {arts.text4}
                        </p>
                      </Col>
                      <Col span={8}></Col>
                    </Row>
                    <hr />
                    <Row style={{ paddingTop: '10px' }}>
                      <Col span={12}>
                        <div className="space-align-block">
                          <Space align="center">
                            <Image src={arts.avatar} preview={false} />
                            <div style={{ paddingLeft: '15px' }}>
                              <h3
                                style={{ color: 'black', marginBottom: '-3px' }}
                              >
                                ARTIST
                              </h3>
                              <span
                                className="mock-block"
                                style={{ color: 'black' }}
                              >
                                {arts.name2}
                              </span>
                            </div>
                          </Space>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          className="space-align-block"
                          style={{ marginTop: '20px', textAlign: 'right' }}
                        >
                          <Space>
                            <HeartFilled
                              style={{ color: '#C4C4C4', fontSize: '20px' }}
                            />
                            <span
                              className="mock-block"
                              style={{ color: '#C4C4C4' }}
                            >
                              {arts.number}
                            </span>
                          </Space>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Carousel>
        <div style={{ textAlign: 'center' }}>
          <Button size="large" className="collections">
            <Link to={`/artworks/`}>
              See other artworks
            </Link>
          </Button>
        </div>
      </div>
      <div className="little_space">
        <h2>Top Photographies</h2>
        <Carousel dotPosition="bottom" className="carousel1">
          <div>
            <Row gutter={16}>
              {arts.map((arts, index) => (
                <Col span={6} className="gutter-row" key={index}>
                  <Image
                    src={arts.image}
                    preview={false}
                    className="rectangle6"
                  />
                  <div>
                    <h3 style={{ color: 'black', fontSize: '20px' }}>
                      {arts.name1}
                    </h3>
                    <Row>
                      <Col span={8}>
                        <p style={{ color: '#1341FF', fontSize: '12px' }}>
                          {arts.text1}
                        </p>
                        <p style={{ color: '#1341FF', fontSize: '10px' }}>
                          {arts.text2}
                        </p>
                      </Col>
                      <Col span={8}>
                        <p style={{ color: '#1341FF', fontSize: '12px' }}>
                          {arts.text3}
                        </p>
                        <p style={{ color: '#1341FF', fontSize: '10px' }}>
                          {arts.text4}
                        </p>
                      </Col>
                      <Col span={8}></Col>
                    </Row>
                    <hr />
                    <Row style={{ paddingTop: '10px' }}>
                      <Col span={12}>
                        <div className="space-align-block">
                          <Space align="center">
                            <Image src={arts.avatar} preview={false} />
                            <div style={{ paddingLeft: '15px' }}>
                              <h3
                                style={{ color: 'black', marginBottom: '-3px' }}
                              >
                                ARTIST
                              </h3>
                              <span
                                className="mock-block"
                                style={{ color: 'black' }}
                              >
                                {arts.name2}
                              </span>
                            </div>
                          </Space>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          className="space-align-block"
                          style={{ marginTop: '20px', textAlign: 'right' }}
                        >
                          <Space>
                            <HeartFilled
                              style={{ color: '#C4C4C4', fontSize: '20px' }}
                            />
                            <span
                              className="mock-block"
                              style={{ color: '#C4C4C4' }}
                            >
                              {arts.number}
                            </span>
                          </Space>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <Row gutter={16}>
              {arts.map((arts, index) => (
                <Col span={6} className="gutter-row" key={index}>
                  <Image
                    src={arts.image}
                    preview={false}
                    className="rectangle6"
                  />
                  <div>
                    <h3 style={{ color: 'black', fontSize: '20px' }}>
                      {arts.name1}
                    </h3>
                    <Row>
                      <Col span={8}>
                        <p style={{ color: '#1341FF', fontSize: '12px' }}>
                          {arts.text1}
                        </p>
                        <p style={{ color: '#1341FF', fontSize: '10px' }}>
                          {arts.text2}
                        </p>
                      </Col>
                      <Col span={8}>
                        <p style={{ color: '#1341FF', fontSize: '12px' }}>
                          {arts.text3}
                        </p>
                        <p style={{ color: '#1341FF', fontSize: '10px' }}>
                          {arts.text4}
                        </p>
                      </Col>
                      <Col span={8}></Col>
                    </Row>
                    <hr />
                    <Row style={{ paddingTop: '10px' }}>
                      <Col span={12}>
                        <div className="space-align-block">
                          <Space align="center">
                            <Image src={arts.avatar} preview={false} />
                            <div style={{ paddingLeft: '15px' }}>
                              <h3
                                style={{ color: 'black', marginBottom: '-3px' }}
                              >
                                ARTIST
                              </h3>
                              <span
                                className="mock-block"
                                style={{ color: 'black' }}
                              >
                                {arts.name2}
                              </span>
                            </div>
                          </Space>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          className="space-align-block"
                          style={{ marginTop: '20px', textAlign: 'right' }}
                        >
                          <Space>
                            <HeartFilled
                              style={{ color: '#C4C4C4', fontSize: '20px' }}
                            />
                            <span
                              className="mock-block"
                              style={{ color: '#C4C4C4' }}
                            >
                              {arts.number}
                            </span>
                          </Space>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <Row gutter={16}>
              {arts.map((arts, index) => (
                <Col span={6} className="gutter-row" key={index}>
                  <Image
                    src={arts.image}
                    preview={false}
                    className="rectangle6"
                  />
                  <div>
                    <h3 style={{ color: 'black', fontSize: '20px' }}>
                      {arts.name1}
                    </h3>
                    <Row>
                      <Col span={8}>
                        <p style={{ color: '#1341FF', fontSize: '12px' }}>
                          {arts.text1}
                        </p>
                        <p style={{ color: '#1341FF', fontSize: '10px' }}>
                          {arts.text2}
                        </p>
                      </Col>
                      <Col span={8}>
                        <p style={{ color: '#1341FF', fontSize: '12px' }}>
                          {arts.text3}
                        </p>
                        <p style={{ color: '#1341FF', fontSize: '10px' }}>
                          {arts.text4}
                        </p>
                      </Col>
                      <Col span={8}></Col>
                    </Row>
                    <hr />
                    <Row style={{ paddingTop: '10px' }}>
                      <Col span={12}>
                        <div className="space-align-block">
                          <Space align="center">
                            <Image src={arts.avatar} preview={false} />
                            <div style={{ paddingLeft: '15px' }}>
                              <h3
                                style={{ color: 'black', marginBottom: '-3px' }}
                              >
                                ARTIST
                              </h3>
                              <span
                                className="mock-block"
                                style={{ color: 'black' }}
                              >
                                {arts.name2}
                              </span>
                            </div>
                          </Space>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div
                          className="space-align-block"
                          style={{ marginTop: '20px', textAlign: 'right' }}
                        >
                          <Space>
                            <HeartFilled
                              style={{ color: '#C4C4C4', fontSize: '20px' }}
                            />
                            <span
                              className="mock-block"
                              style={{ color: '#C4C4C4' }}
                            >
                              {arts.number}
                            </span>
                          </Space>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Carousel>
        <div style={{ textAlign: 'center' }}>
          <Button
            size="large"
            className="collections"
            style={{ width: '275px' }}
          >
            See other photographies
          </Button>
        </div>
      </div>
      <div className="little_space">
        <h2>Featured Creators</h2>

        <Carousel dotPosition="bottom" className="carousel1">
          <div>
            <Row gutter={16}>
              {creators.map((creator, index) => (
                <Col span={6} className="gutter-row" key={index}>
                  <Row gutter={12}>
                    <Col span={12}>
                      <Image src={creator.image1} preview={false} />
                    </Col>
                    <Col span={12}>
                      <Image src={creator.image2} preview={false} />
                      <Image
                        src={creator.image3}
                        preview={false}
                        style={{ marginTop: '5px' }}
                      />
                    </Col>
                  </Row>

                  <div>
                    <h3 style={{ color: 'black', fontSize: '20px' }}>
                      {creator.text1}
                    </h3>
                    <p style={{ color: 'black' }}>{creator.text2} Creations</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Carousel>
      </div>
      <div className="little_space">
        <Row gutter={32}>
          <Col className="gutter-row" span={12} style={{ textAlign: 'right' }}>
            <Button
              className="stream"
              onClick={() => setVisible(true)}
            >
              For You
            </Button>
          </Col>
          <Col className="gutter-row" span={12}>
            <Button
              className="stream"
              onClick={() => setVisible(false)}
            >
              Stream Of Thoughts
            </Button>
          </Col>
        </Row>
      </div>
      {visible ? (
        <div className="little_space" style={{ paddingTop: 0 }}>
          <Row gutter={12} style={{ marginBottom: '20px' }}>
            {arts.map((arts, index) => (
              <Col span={6} className="gutter-row" key={index}>
                <Image
                  src={arts.image}
                  preview={false}
                  className="rectangle6"
                />
                <div>
                  <h3 style={{ color: 'black', fontSize: '20px' }}>
                    {arts.name1}
                  </h3>
                  <Row>
                    <Col span={8}>
                      <p style={{ color: '#1341FF', fontSize: '12px' }}>
                        {arts.text1}
                      </p>
                      <p style={{ color: '#1341FF', fontSize: '10px' }}>
                        {arts.text2}
                      </p>
                    </Col>
                    <Col span={8}>
                      <p style={{ color: '#1341FF', fontSize: '12px' }}>
                        {arts.text3}
                      </p>
                      <p style={{ color: '#1341FF', fontSize: '10px' }}>
                        {arts.text4}
                      </p>
                    </Col>
                    <Col span={8}></Col>
                  </Row>
                  <hr />
                  <Row style={{ paddingTop: '10px' }}>
                    <Col span={12}>
                      <div className="space-align-block">
                        <Space align="center">
                          <Image src={arts.avatar} preview={false} />
                          <div style={{ paddingLeft: '15px' }}>
                            <h3
                              style={{ color: 'black', marginBottom: '-3px' }}
                            >
                              ARTIST
                            </h3>
                            <span
                              className="mock-block"
                              style={{ color: 'black' }}
                            >
                              {arts.name2}
                            </span>
                          </div>
                        </Space>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div
                        className="space-align-block"
                        style={{ marginTop: '20px', textAlign: 'right' }}
                      >
                        <Space>
                          <HeartFilled
                            style={{ color: '#C4C4C4', fontSize: '20px' }}
                          />
                          <span
                            className="mock-block"
                            style={{ color: '#C4C4C4' }}
                          >
                            {arts.number}
                          </span>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
          <Row gutter={12} style={{ marginBottom: '20px' }}>
            {arts.map((arts, index) => (
              <Col span={6} className="gutter-row" key={index}>
                <Image
                  src={arts.image}
                  preview={false}
                  className="rectangle6"
                />
                <div>
                  <h3 style={{ color: 'black', fontSize: '20px' }}>
                    {arts.name1}
                  </h3>
                  <Row>
                    <Col span={8}>
                      <p style={{ color: '#1341FF', fontSize: '12px' }}>
                        {arts.text1}
                      </p>
                      <p style={{ color: '#1341FF', fontSize: '10px' }}>
                        {arts.text2}
                      </p>
                    </Col>
                    <Col span={8}>
                      <p style={{ color: '#1341FF', fontSize: '12px' }}>
                        {arts.text3}
                      </p>
                      <p style={{ color: '#1341FF', fontSize: '10px' }}>
                        {arts.text4}
                      </p>
                    </Col>
                    <Col span={8}></Col>
                  </Row>
                  <hr />
                  <Row style={{ paddingTop: '10px' }}>
                    <Col span={12}>
                      <div className="space-align-block">
                        <Space align="center">
                          <Image src={arts.avatar} preview={false} />
                          <div style={{ paddingLeft: '15px' }}>
                            <h3
                              style={{ color: 'black', marginBottom: '-3px' }}
                            >
                              ARTIST
                            </h3>
                            <span
                              className="mock-block"
                              style={{ color: 'black' }}
                            >
                              {arts.name2}
                            </span>
                          </div>
                        </Space>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div
                        className="space-align-block"
                        style={{ marginTop: '20px', textAlign: 'right' }}
                      >
                        <Space>
                          <HeartFilled
                            style={{ color: '#C4C4C4', fontSize: '20px' }}
                          />
                          <span
                            className="mock-block"
                            style={{ color: '#C4C4C4' }}
                          >
                            {arts.number}
                          </span>
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <div className="little_space" style={{ paddingTop: 0 }}>
          <Row gutter={16}>
            <Col className="gutter-row" span={12}>
              <div
                className="space-align-block comment-box"
                style={{ padding: '15px 10px' }}
              >
                <Space align="center">
                  <Image
                    src="./avatar.svg"
                    preview={false}
                    style={{ margin: '0 10px' }}
                    className="avatar"
                  />
                  <span className="mock-block" style={{ color: 'black' }}>
                    What's happening?
                  </span>
                </Space>
                <div
                  style={{
                    justifyContent: 'space-between',
                    display: 'flex',
                    padding: '0 20px',
                    marginTop: '20px',
                  }}
                >
                  <div style={{ marginTop: '5px', marginLeft: '50px' }}>
                    <div style={{display:"inline-block"}}>
                      <Image
                        src="./img/bi_image-fill.svg"
                        preview={false}
                        style={{ paddingRight: '10px' }}
                      />
                    </div>
                    <div style={{display:"inline-block"}}>
                      <Image
                        src="./img/Vector.svg"
                        preview={false}
                        style={{ paddingRight: '10px' }}
                      />
                    </div>
                    <div style={{display:"inline-block"}}>
                      <Image
                        src="./img/Vector (1).svg"
                        preview={false}
                      />
                    </div>
                  </div>
                  <Button className="start_collecting" style={{ marginTop: 0 }}>
                    Post
                  </Button>
                </div>
              </div>
              <div
                className="space-align-block comment-box"
                style={{ padding: '20px 30px', marginTop: '30px' }}
              >
                <Space align="center">
                  <Image
                    src="./avatar.svg"
                    preview={false}
                    className="avatar"
                  />
                  <span className="mock-block" style={{ color: 'black' }}>
                    walecyberpunk
                  </span>
                  <span className="mock-block" style={{ color: '#C4C4C4' }}>
                    @walecyberpunk - 3h
                  </span>
                </Space>
                <div style={{ width: '100%' }}>
                  <Image src="./Art.svg" preview={false} width="100%" />
                </div>
                <Space>
                  <Image src="./img/Vector (2).svg" preview={false} />
                  <span style={{ marginRight: '20px' }}></span>
                  <Image src="./Vector.svg" preview={false} />
                  <span style={{ color: '#C4C4C4' }}>41</span>
                </Space>
                <div style={{ marginTop: '20px' }}>
                  <Space align="center">
                    <Image
                      src="./avatar.svg"
                      preview={false}
                      className="avatar"
                    />
                    <span className="mock-block" style={{ color: 'black' }}>
                      walecyberpunk
                    </span>
                    <span className="mock-block" style={{ color: '#C4C4C4' }}>
                      @walecyberpunk - 3h
                    </span>
                  </Space>
                </div>
                <h4 style={{ marginTop: '20px' }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to
                </h4>
                <Space>
                  <Image src="./img/Vector (2).svg" preview={false} />
                  <span style={{ marginRight: '20px' }}></span>
                  <Image src="./Vector.svg" preview={false} />
                  <span style={{ color: '#C4C4C4' }}>41</span>
                </Space>
                <div style={{ marginLeft: '40px' }}>
                  <div style={{ marginTop: '20px' }}>
                    <Space align="center">
                      <Image
                        src="./avatar.svg"
                        preview={false}
                        className="avatar"
                      />
                      <span className="mock-block" style={{ color: 'black' }}>
                        walecyberpunk
                      </span>
                      <span className="mock-block" style={{ color: '#C4C4C4' }}>
                        @walecyberpunk - 3h
                      </span>
                    </Space>
                  </div>
                  <h4 style={{ marginTop: '20px' }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </h4>
                  <Space>
                    <Image src="./img/Vector (2).svg" preview={false} />
                    <span style={{ marginRight: '20px' }}></span>
                    <Image src="./Vector.svg" preview={false} />
                    <span style={{ color: '#C4C4C4' }}>41</span>
                  </Space>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Row gutter={16}>
                    <Col
                      span={2}
                      className="gutter-row"
                      style={{ marginTop: '5px' }}
                    >
                      <Image
                        src="./avatar.svg"
                        preview={false}
                        className="avatar"
                      />
                    </Col>
                    <Col span={22} className="gutter-row">
                      <Input
                        defaultValue="write a comment..."
                        className="subscribe"
                        style={{backgroundColor:"#F8F8F8", border:"none"}}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div
                className="space-align-block comment-box"
                style={{ padding: '20px 30px' }}
              >
                <Space align="center">
                  <Image
                    src="./avatar.svg"
                    preview={false}
                    className="avatar"
                  />
                  <span className="mock-block" style={{ color: 'black' }}>
                    walecyberpunk
                  </span>
                  <span className="mock-block" style={{ color: '#C4C4C4' }}>
                    @walecyberpunk - 3h
                  </span>
                </Space>
                <div style={{ width: '100%' }}>
                  <Image src="./Art.svg" preview={false} width="100%" />
                </div>
                <Space>
                  <Image src="./img/Vector (2).svg" preview={false} />
                  <span style={{ marginRight: '20px' }}></span>
                  <Image src="./Vector.svg" preview={false} />
                  <span style={{ color: '#C4C4C4' }}>41</span>
                </Space>
                <div style={{ marginTop: '20px' }}>
                  <Space align="center">
                    <Image
                      src="./avatar.svg"
                      preview={false}
                      className="avatar"
                    />
                    <span className="mock-block" style={{ color: 'black' }}>
                      walecyberpunk
                    </span>
                    <span className="mock-block" style={{ color: '#C4C4C4' }}>
                      @walecyberpunk - 3h
                    </span>
                  </Space>
                </div>
                <h4 style={{ marginTop: '20px' }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to
                </h4>
                <Space>
                  <Image src="./img/Vector (2).svg" preview={false} />
                  <span style={{ marginRight: '20px' }}></span>
                  <Image src="./Vector.svg" preview={false} />
                  <span style={{ color: '#C4C4C4' }}>41</span>
                </Space>
                <div style={{ marginLeft: '40px' }}>
                  <div style={{ marginTop: '20px' }}>
                    <Space align="center">
                      <Image
                        src="./avatar.svg"
                        preview={false}
                        className="avatar"
                      />
                      <span className="mock-block" style={{ color: 'black' }}>
                        walecyberpunk
                      </span>
                      <span className="mock-block" style={{ color: '#C4C4C4' }}>
                        @walecyberpunk - 3h
                      </span>
                    </Space>
                  </div>
                  <h4 style={{ marginTop: '20px' }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </h4>
                  <Space>
                    <Image src="./img/Vector (2).svg" preview={false} />
                    <span style={{ marginRight: '20px' }}></span>
                    <Image src="./Vector.svg" preview={false} />
                    <span style={{ color: '#C4C4C4' }}>41</span>
                  </Space>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Row gutter={16}>
                    <Col
                      span={2}
                      className="gutter-row"
                      style={{ marginTop: '5px' }}
                    >
                      <Image
                        src="./avatar.svg"
                        preview={false}
                        className="avatar"
                      />
                    </Col>
                    <Col span={22} className="gutter-row">
                      <Input
                        defaultValue="write a comment..."
                        className="subscribe"
                        style={{backgroundColor:"#F8F8F8", border:"none"}}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Layout>
  );
};
