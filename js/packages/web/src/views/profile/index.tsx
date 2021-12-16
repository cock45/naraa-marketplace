import {Col, Row, Layout, Input, Button, Checkbox, Slider, Select, Space, DatePicker, Image} from 'antd';
import React, {useEffect, useState} from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { ArtistCard } from '../../components/ArtistCard';
import { useMeta } from '../../contexts';
import { ThoughtView } from '../../components/ThoughtView';
import { ArtworksView } from '../../components/ArtworksView';
import { PortfolioView } from '../../components/Portfolio';
import { AppreciationView } from '../../components/Apprecation';
import { OffersView } from '../../components/Offers';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

const { Content } = Layout;

export const ProfileView = () => {
  const { whitelistedCreatorsByCreator } = useMeta();
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const items = Object.values(whitelistedCreatorsByCreator);
  
  const [tab, setTab] = useState(0);
  const [editable, setEditible] = useState(false);
  const [nameEditable, setNameEditible] = useState(false);
  const [bioEditable, setBioEditible] = useState(false);
  
  const userInfo = useSelector((state: any) => state.auth).user.user;
  const [userName, setUserName] = useState(userInfo.username);
  const [userBio, setUserBio] = useState(userInfo.bio);
  
  const artistGrid = (
    <div style={{padding: 30}}>
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

  const editHandler = () => {
    setEditible(true);
  }

  const nameEditHandler = (x:boolean) => {
    if(x) {

    }
    setNameEditible(x);
  }

  const bioEditHandler = (x:boolean) => {
    setBioEditible(x);
  }

  const images = [
    {items: ['./market/Rectangle.svg', './market/Rectangle3.svg', './market/Rectangle6.svg']},
    {items: ['./market/Rectangle1.svg', './market/Rectangle4.svg', './market/Rectangle7.svg']},
    {items: ['./market/Rectangle2.svg', './market/Rectangle5.svg', './market/Rectangle8.svg']}
  ];

  return (
    <Layout style={{ margin: 0, marginTop: 30 }}>
      <Content style={{padding:"0 40px"}} className="profile">
        <div style={{backgroundColor: '#F3F3F3', width:"100%", padding:"0 40px", height:"400px"}} className="space_entire">
          <Button className="btn-editcover" onClick={editHandler}>Edit Cover</Button>
        </div>
        <div className="little_space">
          <Row className="menu" gutter={16}>
            <Col span={5} className="gutter-row" style={{marginTop:"-150px", textAlign:"center"}}>
              <Image style={{borderRadius:"50%", width:"302px", height:"302px", margin:"auto"}} src="./Rectangle 809.png" preview={false} className="rectangle6" />
              <div className='userInfo'>
                <input 
                  value={userName}
                  placeholder="Input your name"
                  disabled={!nameEditable} 
                  onChange={e => setUserName(e.target.value)}
                />
                {editable && (
                  <div className="edit-btn">
                    {!nameEditable && <Button className="edit-pen" onClick={() => nameEditHandler(true)}><i className="fas fa-pen"></i></Button>}
                    {nameEditable && <Button className='btn-save' onClick={() => nameEditHandler(false)}>Save</Button>}
                  </div>
                )}
              </div>
              <div className='userInfo'>
                {/* <input value="Director, Designer Tegusu Inc" placeholder="Input your Bio" disabled={!bioEditable} /> */}
                <input
                  value={userBio}
                  placeholder="Input your Bio"
                  disabled={!bioEditable}
                  onChange={e => setUserBio(e.target.value)}
                />
                {editable && (
                  <div>
                    {!bioEditable && <Button className="edit-pen" onClick={() => bioEditHandler(true)}><i className="fas fa-pen"></i></Button>}
                    {bioEditable && <Button className='btn-save' onClick={() => bioEditHandler(false)}>Save</Button>}
                  </div>
                )}
              </div>
              <Button style={{backgroundColor:"#0057FF", width:"100%", borderRadius:"5px", color:"white", paddingTop:"13px", paddingBottom:"40px", marginTop:"30px"}}>Follow</Button>
              <div style={{paddingTop:"30px", color:"black", fontSize:"12pt", display:"flex", flexDirection:"column"}}>
                <div>
                  <span style={{float:"left"}}>Project Views</span>
                  <span style={{float:"right"}}>1,909,194</span>
                </div>
                <div>
                  <span style={{float:"left"}}>Applications</span>
                  <span style={{float:"right"}}>125,830</span>
                </div>
                <div>
                  <span style={{float:"left"}}>Follows</span>
                  <span style={{float:"right"}}>52,503</span>
                </div>
                <div>
                  <span style={{float:"left"}}>Following</span>
                  <span style={{float:"right"}}>162</span>
                </div>
              </div>
              <div style={{paddingTop:"30px"}}>
                <span style={{color:"#C4C4C4", textAlign:"left", 
                  float:"left",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "24px",
                  lineHeight: "36px",
                }}>ON THE WEB</span>  
                <Button style={{width:"100%", color:"black", margin:"10px 0", paddingTop:"13px", paddingBottom:"40px"}}>Easy</Button>
                <Button style={{width:"100%", color:"black", margin:"10px 0", paddingTop:"13px", paddingBottom:"40px"}}>Facebook</Button>
                <Button style={{width:"100%", color:"black", margin:"10px 0", paddingTop:"13px", paddingBottom:"40px"}}>Instagram</Button>
              </div>
              <div style={{paddingTop:"30px"}}>
                <span style={{color:"#C4C4C4", textAlign:"left", 
                  float:"left",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "24px",
                  lineHeight: "36px",
                }}>ON THE WEB</span>  
                <Button style={{width:"100%", color:"black", margin:"10px 0", paddingTop:"13px", paddingBottom:"40px"}}>
                  <span style={{float:"left"}}>Following</span>
                  <span style={{float:"right"}}>162</span>
                </Button>
                <Button style={{width:"100%", color:"black", margin:"10px 0", paddingTop:"13px", paddingBottom:"40px"}}>
                  <span style={{float:"left"}}>Following</span>
                  <span style={{float:"right"}}>162</span>
                </Button>
                <Button className="btn-addwebsites"><PlusOutlined />Add more Websites</Button>
              </div>
            </Col>
            <Col span={1}></Col>

            <Col span={18} className="gutter-row">
              <div style={{padding:"80px 0", margin:"auto", textAlign:"center"}}>
                <Button className={tab==0?"tabButton active":"tabButton"} onClick={()=>{setTab(0)}} style={{borderRadius:"35px", paddingTop:"11px", paddingBottom:"35px", paddingRight:"35px", paddingLeft:"35px", color:"black", border:"0px"}}>Thoughts</Button>
                <Button className={tab==1?"tabButton active":"tabButton"} onClick={()=>{setTab(1)}} style={{borderRadius:"35px", paddingTop:"11px", paddingBottom:"35px", paddingRight:"35px", paddingLeft:"35px", color:"black", border:"0px"}}>Artworks</Button>
                <Button className={tab==2?"tabButton active":"tabButton"} onClick={()=>{setTab(2)}} style={{borderRadius:"35px", paddingTop:"11px", paddingBottom:"35px", paddingRight:"35px", paddingLeft:"35px", color:"black", border:"0px"}}>Portfolio</Button>
                <Button className={tab==3?"tabButton active":"tabButton"} onClick={()=>{setTab(3)}} style={{borderRadius:"35px", paddingTop:"11px", paddingBottom:"35px", paddingRight:"35px", paddingLeft:"35px", color:"black", border:"0px"}}>Appreciation</Button>
                <Button className={tab==4?"tabButton active":"tabButton"} onClick={()=>{setTab(4)}} style={{borderRadius:"35px", paddingTop:"11px", paddingBottom:"35px", paddingRight:"35px", paddingLeft:"35px", color:"black", border:"0px"}}>Offers</Button>
              </div>
              <Row>
              
              {
                tab===0?
                  <ThoughtView/>
                :
                tab===1?
                  <ArtworksView />
                :
                tab===2?
                  <PortfolioView />
                :
                tab===3?
                  <AppreciationView />
                :
                  <OffersView />
              }
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};
