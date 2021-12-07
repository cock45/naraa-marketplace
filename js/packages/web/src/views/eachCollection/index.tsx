import {
    Col,
    Row,
    Layout,
    Input,
    Button,
    Select,
    Space,
    Image,
  } from 'antd';
  import React, { useEffect, useState } from 'react';
  import Masonry from 'react-masonry-css';
  import { Link } from 'react-router-dom';
  import { ArtistCard } from '../../components/ArtistCard';
  import { useMeta } from '../../contexts';
  import { EachCollectionMain } from '../../components/EachCollectionMain';
  import { EachCollectionActivity } from '../../components/EachCollectionActivity';
  
  const { Content } = Layout;
  
  export const EachCollectionView = () => {
    const { whitelistedCreatorsByCreator } = useMeta();
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    };
  
    const items = Object.values(whitelistedCreatorsByCreator);
    const [tab, setTab] = useState(-1);
    const [tabIndex, setTabIndex] = useState(1);
  
  
    const artistGrid = (
      <div style={{ padding: 30 }}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items.map((m, idx) => {
            const id = m.info.address;
            return (
              <Link to={`/artists/${id}`} key={idx}>
                <ArtistCard
                  key={id}
                  artist={{
                    address: m.info.address,
                    name: m.info.name || '',
                    image: m.info.image || '',
                    link: m.info.twitter || '',
                  }}
                />
              </Link>
            );
          })}
        </Masonry>
      </div>
    );
  
    const top_images = [
      "./market/Rectangle 927.png",
      "./market/Rectangle 928.png",
      "./market/Rectangle 929.png",
      "./market/Rectangle 930.png",
      "./market/Rectangle 931.png"
    ];
  
    return (
      <Layout style={{ margin: 0, marginTop: 30 }}>
        <Content style={{ padding: '0 40px' }} className='each-colls'>
          <div className="space_entire">
            {top_images.map((nft, index) => (
              <div style={{ width: '20%', margin: '0 10px' }}>
                <Image src={nft} />
              </div>
            ))}
          </div>
          <div className="little_space" style={{padding: '100px 0px'}}>
            <div className='option-bar'>
              {tabIndex == 1 ?
                <>
                  <div className='activity-div' onClick={() => setTabIndex(2)}><i className="fas fa-chart-line font-24"></i><span>Activity</span></div>
                  <div className='link-div'>
                    <a href='https://discord.gg'><i className="fab fa-discord font-24"></i></a>
                  </div>
                  <div className='link-div'>
                    <a href='https://discord.gg'><i className="fab fa-twitter font-24"></i></a>
                  </div>
                  <div className='link-div'>
                    <a href='https://discord.gg'><i className="fas fa-globe font-20"></i></a>
                  </div>
                </> 
                :
                <div className='activity-div' onClick={() => setTabIndex(1)}><i className="fas fa-chart-line font-24"></i><span>Collection</span></div>
              }
              <div className='link-div'>
                <a href='https://discord.gg'><i className="fas fa-pen font-20"></i></a>
              </div>
            </div>
  
            <Row className="menu" gutter={16}>
              <Col
                span={5}
                className="gutter-row"
                style={{ marginTop: '-200px' }}
              >
                <Image
                  style={{
                    borderRadius: '50%',
                    width: '302px',
                    height: '302px',
                    margin: 'auto',
                  }}
                  src="./Rectangle 809.png"
                  preview={false}
                  className="rectangle6"
                />
                <h1
                  style={{
                    marginBottom: '5px',
                    fontSize: '50px',
                    fontWeight: 'bold',
                  }}
                >
                  Lorum Ipsum
                </h1>
              </Col>
              <Col span={1}></Col>
              <Col span={18} className="gutter-row">
                <div
                  style={{
                    padding: '50px 0',
                    margin: 'auto',
                    textAlign: 'center',
                  }}
                >
                  <Button
                    className={
                      tab == 0 ? 'tabButton active prices' : 'tabButton prices'
                    }
                    onClick={() => {
                      setTab(0);
                    }}
                  >
                    <div>
                      <h2>8.9K</h2>
                      <p>Items</p>
                    </div>
                  </Button>
                  <Button
                    className={
                      tab == 1 ? 'tabButton active prices' : 'tabButton prices'
                    }
                    onClick={() => {
                      setTab(1);
                    }}
                  >
                    <div>
                      <h2>3.3K</h2>
                      <p>Owners</p>
                    </div>
                  </Button>
                  <Button
                    className={
                      tab == 2 ? 'tabButton active prices' : 'tabButton prices'
                    }
                    onClick={() => {
                      setTab(2);
                    }}
                  >
                    <div>
                      <h2>
                        <img src="https://img.icons8.com/material-outlined/24/000000/final-state.png" />
                        7.5K
                      </h2>
                      <p>Floor</p>
                    </div>
                  </Button>
                  <Button
                    className={
                      tab == 3 ? 'tabButton active prices' : 'tabButton prices'
                    }
                    onClick={() => {
                      setTab(3);
                    }}
                  >
                    <div>
                      <h2>
                        <img src="https://img.icons8.com/material-outlined/24/000000/final-state.png" />
                        38.3K
                      </h2>
                      <p>Volume</p>
                    </div>
                  </Button>
                  <div
                    style={{
                      margin: '20px auto',
                      width: '60%',
                      color: 'rgba(25, 25, 25, 0.8)',
                    }}
                  >
                    <p style={{ fontSize: '21px', opacity: '.8' }}>
                      Degen Ape Academy is a fun-loving flock of feathered friends
                      who live on an iceberg in the metaverse.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            {tabIndex == 1 &&
              <EachCollectionMain />
            }
            {tabIndex == 2 &&
              <EachCollectionActivity />
            }
          </div>
        </Content>
      </Layout>
    );
  };
  