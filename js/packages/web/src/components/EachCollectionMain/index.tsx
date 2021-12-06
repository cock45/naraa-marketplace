import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layout,
  Row,
  Col,
  Image,
  Button,
  Input,
  Space,
} from 'antd';

const { Content } = Layout;

const images = [
    {
      items: [
        './market/Rectangle.svg',
        './market/Rectangle3.svg',
        './market/Rectangle6.svg',
      ],
    },
    {
      items: [
        './market/Rectangle1.svg',
        './market/Rectangle4.svg',
        './market/Rectangle7.svg',
      ],
    },
    {
      items: [
        './market/Rectangle2.svg',
        './market/Rectangle5.svg',
        './market/Rectangle8.svg',
      ],
    },
    {
      items: [
        './market/Rectangle2.svg',
        './market/Rectangle5.svg',
        './market/Rectangle8.svg',
      ],
    },
];

export const EachCollectionMain = () => {
    return (
        <Content>
            <Row>
                <Col span={5} className="gutter-row each-colls-leftside">
                    <h2 className="category-title">Status</h2>
                    <Button
                        style={{
                        backgroundColor: '#0057FF',
                        width: '40%',
                        color: 'white',
                        paddingTop: '10px',
                        paddingBottom: '33px',
                        marginTop: '20px',
                        marginRight: '20px',
                        borderRadius: 0,
                        }}
                    >
                        Buy Now
                    </Button>
                    <Button
                        style={{
                        backgroundColor: '#fff',
                        width: '40%',
                        borderRadius: 0,
                        borderColor: '#616368',
                        color: '#616368',
                        paddingTop: '10px',
                        paddingBottom: '33px',
                        marginTop: '20px',
                        }}
                    >
                        Auction
                    </Button>
                    <div style={{marginTop:'20px'}}>
                        <div className="category">
                        <Row>
                            <Col span={18}>
                            <h2 className="category-title">Accessories</h2>
                            </Col>
                            <Col span={6}>
                            <i className="fa fa-plus-circle"></i>
                            </Col>
                        </Row>
                        </div>
                        <div className="category">
                        <Row>
                            <Col span={18}>
                            <h2 className="category-title">Background</h2>
                            </Col>
                            <Col span={6}>
                            <i className="fa fa-plus-circle"></i>
                            </Col>
                        </Row>
                        </div>
                        <div className="category">
                        <Row>
                            <Col span={18}>
                            <h2 className="category-title">Beak</h2>
                            </Col>
                            <Col span={6}>
                            <i className="fa fa-plus-circle"></i>
                            </Col>
                        </Row>
                        </div>
                        <div className="category">
                        <Row>
                            <Col span={18}>
                            <h2 className="category-title">Body</h2>
                            </Col>
                            <Col span={6}>
                            <i className="fa fa-plus-circle"></i>
                            </Col>
                        </Row>
                        </div>
                        <div className="category">
                        <Row>
                            <Col span={18}>
                            <h2 className="category-title">Eyes</h2>
                            </Col>
                            <Col span={6}>
                            <i className="fa fa-plus-circle"></i>
                            </Col>
                        </Row>
                        </div>
                        <div className="category">
                        <Row>
                            <Col span={18}>
                            <h2 className="category-title">Head</h2>
                            </Col>
                            <Col span={6}>
                            <i className="fa fa-plus-circle"></i>
                            </Col>
                        </Row>
                        </div>
                        <div className="category">
                        <Row>
                            <Col span={18}>
                            <h2 className="category-title">Type</h2>
                            </Col>
                            <Col span={6}>
                            <i className="fa fa-plus-circle"></i>
                            </Col>
                        </Row>
                        </div>
                    </div>
                </Col>
                <Col span={1}>
                    
                </Col>
                <Col span={18}>
                    <Row style={{margin: "0px -30px"}}>
                        {images.map((image, index) => (
                        <Col span={6} className="gutter-row" key={index}>
                            {image.items.map((item, key) => (
                            <Link to={`/collections/3/3`} key={key}>
                                <div className="collection-card">
                                <Image
                                    src="./Rectangle 809.png"
                                    preview={false}
                                    className="rectangle6"
                                />
                                <div style={{ textAlign: 'left' }}>
                                    <Row>
                                    <Col>
                                        <h3 className="card-header">
                                        Degen Ape Academy
                                        </h3>
                                    </Col>
                                    </Row>
                                    <Row style={{ marginTop: '20px' }}>
                                    <Col span={15}>
                                        <p className="list-price">LIST PRICE</p>
                                        <p
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                            fontWeight: 'bold',
                                            fontSize: '20px',
                                            lineHeight: '18px',
                                            color: '#0057FF',
                                        }}
                                        >
                                        4.99 SOL
                                        </p>
                                    </Col>
                                    <Col span={9}>
                                        <Button className="buy-button">
                                        <i
                                            style={{
                                            fontSize: '17px',
                                            color: 'white',
                                            marginRight: '7px',
                                            }}
                                            className="fas"
                                        >
                                            &#xf07a;
                                        </i>
                                        Buy
                                        </Button>
                                    </Col>
                                    </Row>
                                </div>
                                </div>
                            </Link>
                            ))}
                        </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Content>
    )
}