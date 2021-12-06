import React from 'react';
import { SendOutlined, TwitterOutlined, CopyrightOutlined } from '@ant-design/icons';
import { Button, Form, Row, Col, Input } from 'antd';
import { footerConf } from './footerData';
import { LABELS } from '../../constants';

const community = ['Editiorial', 'Discord', 'Instagram', 'Twitter', 'Blog', 'Help Center'];
const legle = ['Community', 'Guideliness', 'Terms Of Service', 'Report Content', 'Bug Bounty', 'Program'];

export const Footer = () => {
  return (
    <div className="footer space_entire">
      <Row gutter={16} style={{padding: '50px 0'}}>
        <Col span={7} className="gutter-row">
          <h3 style={{color: 'black', fontSize: '32px', fontWeight: 'bold'}}>naraa</h3>
          <p style={{fontSize: '19px', color:'#616368'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <hr style={{margin: '30px 0'}} />
          <div style={{textAlign: 'center'}}>
            <p style={{color: 'black', fontSize: '20px'}}>
              <strong>Subscribe To Our Newsletter</strong>
            </p>
            <Row gutter={16}>
              <Col span={16} className="gutter-row">
                <Input defaultValue="Email Address" className="subscribe" />
              </Col>
              <Col span={8} className="gutter-row">
                <Button className="btn-subscribe">SUBSCRIBE</Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={5}></Col>
        <Col span={4}>
          <p className="footer-item-header"><b>FOR ARTIST</b></p>
          <p className="footer-item">Submit artist profile</p>
        </Col>
        <Col span={4}>
          <p className="footer-item-header"><b>COMMUNITY</b></p>
          {
            community.map((item, index) =>
              <div key={index}>
                <p className="footer-item">{item}</p>
              </div>
            )
          }
        </Col>
        <Col span={4}>
          <p className="footer-item-header"><b>LEGLE</b></p>
          {
            legle.map((item, index) =>
              <div key={index}>
                <p className="footer-item">{item}</p>
              </div>
            )
          }
        </Col>
      </Row>
      <p style={{textAlign: "center"}}><CopyrightOutlined /> 2021 Naraa. All Rights Reserved</p>
    </div>
  );
};
