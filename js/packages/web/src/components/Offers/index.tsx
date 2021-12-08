import React from 'react';
import {
  Layout,
  Row,
  Col,
  Image,
  Button,
  Input,
  Space,
} from 'antd';
import {LinkOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const {TextArea} = Input;
const images = [
    {items: ['./market/Rectangle.svg', './market/Rectangle3.svg', './market/Rectangle6.svg']},
    {items: ['./market/Rectangle1.svg', './market/Rectangle4.svg', './market/Rectangle7.svg']},
    {items: ['./market/Rectangle2.svg', './market/Rectangle5.svg', './market/Rectangle8.svg']}
];

export const OffersView = () => {
  return (
    <Content>
        <Row>
        {
            images.map((image, index) =>
            <Col span={8} className="gutter-row" key={index}>
            {
                image.items.map((item, key) =>
                <Link to={`/arts`} key={key} >
                    <div style={{padding:"10px"}} onClick={()=>{
                    }}>
                    <Image src="./Rectangle 810.png" preview={false} className="rectangle6" />
                    <div style={{textAlign: 'left'}}>

                        <Row>
                        <Col span={12}>
                            <h3 style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "21px",
                            lineHeight: "31px",
                            display: "flex",
                            alignItems: "center",
                            color: "#000000"
                        }}>Metaverse Blast</h3>
                        </Col>
                        <Col span={12}>
                            <div style={{float:"right"}}>
                            <Image src="./Vector.svg" preview={false} style={{width: '20px'}} />
                            <span className="mock-block" style={{color: '#C4C4C4'}}>41</span>
                            </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col span={24}>
                            <p style={{
                            fontFamily:"Poppins",
                            fontStyle:"normal",
                            fontWeight:"bold",
                            fontSize:"14px",
                            lineHeight:"21px",
                            color: "#0057FF"
                            }}>8.24Ξ ($25,089)</p>
                            <p style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "12px",
                            lineHeight: "18px",
                            color: "#0057FF"
                            }}>15Ξ ($9,160)</p>
                        </Col>
                        </Row>
                    </div>
                    </div>
                </Link>
                )
            }
            </Col>
            )
        }
        </Row>
    </Content>
  )}