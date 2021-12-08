import {
    Col,
    Row,
    Layout,
    Input,
    Button,
    Image,
  } from 'antd';
  import React, { useEffect, useState } from 'react';
  import Masonry from 'react-masonry-css';
  import { Link } from 'react-router-dom';
  import { ArtistCard } from '../../components/ArtistCard';
  import { useMeta } from '../../contexts';
  import { useSelector } from 'react-redux';
  const { Content } = Layout;
  
  export const CollectionsView = () => {
    const { whitelistedCreatorsByCreator } = useMeta();
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    };
  
    const items = Object.values(whitelistedCreatorsByCreator);
  
    const collections = [
        {
          image: 'Rectangle 809.png',
          name: 'Degen Ape Academy',
          volume: '962.7K',
        },
        {
          image: 'Rectangle 810.png',
          name: 'Solana Monkey Business',
          volume: '962.7K',
        },
        {
          image: 'Rectangle 811.png',
          name: 'Aurory',
          volume: '962.7K',
        },
        {
          image: 'Rectangle 812.png',
          name: 'Frakt',
          volume: '962.7K',
        },
        {
            image: 'Rectangle 809.png',
            name: 'Degen Ape Academy',
            volume: '962.7K',
        },
        {
            image: 'Rectangle 810.png',
            name: 'Solana Monkey Business',
            volume: '962.7K',
        },
        {
            image: 'Rectangle 811.png',
            name: 'Aurory',
            volume: '962.7K',
        },
        {
            image: 'Rectangle 812.png',
            name: 'Frakt',
            volume: '962.7K',
        },
    ];
  
    return (
      <Layout style={{ margin: 0, marginTop: 30 }}>
        <Content style={{ padding: '0 40px' }}>
            <div className='colls'>
                <Row className='colls-header'>
                    <Col span={12}>
                        <Input placeholder='Search Collections'></Input>
                        <i className='fas fa-search icon-input-right'></i>
                    </Col>
                    <Col span={12} className='atRight'>
                        <Button><i className='fas fa-filter'></i>Latest First</Button>
                        <Button><i className="fas fa-sort-amount-down-alt"></i>Filter Items</Button>
                    </Col>
                </Row>
                <Row style={{margin: '0px -20px'}}>
                    {collections.map((collection, index) => (
                        <Col span={6} key={index}>
                            <Link to={`/collections/1`}>
                                <div className='artblock'>
                                    <Image
                                        src={collection.image}
                                        preview={false}
                                        className="rectangle6"
                                    />
                                    <div>
                                        <h3 style={{ color: 'black', fontSize: '20px' }}>{collection.name}</h3>
                                        <div className="inline collect-stat">
                                        <img src="https://img.icons8.com/material-outlined/24/000000/final-state.png" />
                                        <span className="text1">{collection.volume}</span>
                                        <span className="text2">Total Volume</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </Content>
      </Layout>
    );
  };
  