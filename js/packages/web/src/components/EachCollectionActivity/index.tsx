import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layout,
  Row,
  Col,
  Image,
} from 'antd';

const { Content } = Layout;

export const EachCollectionActivity = () => {
    const nfts = [
        {
            event: 'Sale',
            item: 'Degen Ape #6075',
            price: 58,
            from: '22q15df..Kwxx',
            to: '13q15df..Kwzq',
            date: 45,
        },
        {
            event: 'Sale',
            item: 'Degen Ape #6075',
            price: 58,
            from: '22q15df..Kwxx',
            to: '13q15df..Kwzq',
            date: 45,
        },
        {
            event: 'Sale',
            item: 'Degen Ape #6075',
            price: 58,
            from: '22q15df..Kwxx',
            to: '13q15df..Kwzq',
            date: 45,
        },
        {
            event: 'Sale',
            item: 'Degen Ape #6075',
            price: 58,
            from: '22q15df..Kwxx',
            to: '13q15df..Kwzq',
            date: 45,
        },
        {
            event: 'Sale',
            item: 'Degen Ape #6075',
            price: 58,
            from: '22q15df..Kwxx',
            to: '13q15df..Kwzq',
            date: 45,
        },
        {
            event: 'Sale',
            item: 'Degen Ape #6075',
            price: 58,
            from: '22q15df..Kwxx',
            to: '13q15df..Kwzq',
            date: 45,
        },
        {
            event: 'Sale',
            item: 'Degen Ape #6075',
            price: 58,
            from: '22q15df..Kwxx',
            to: '13q15df..Kwzq',
            date: 45,
        },
        {
            event: 'Sale',
            item: 'Degen Ape #6075',
            price: 58,
            from: '22q15df..Kwxx',
            to: '13q15df..Kwzq',
            date: 45,
        },
        {
            event: 'Sale',
            item: 'Degen Ape #6075',
            price: 58,
            from: '22q15df..Kwxx',
            to: '13q15df..Kwzq',
            date: 45,
        },
        {
            event: 'Sale',
            item: 'Degen Ape #6075',
            price: 58,
            from: '22q15df..Kwxx',
            to: '13q15df..Kwzq',
            date: 45,
        },
    ]    

    return (
        <Content>
            <div className='each-colls-activity'>
                <div className='table-nav'>
                    <div className='logo-div activity-div'>
                        <i className="fas fa-chart-line font-24"></i><span className='font-20'>Activity</span>
                    </div>
                    <div className='btn-div'>
                        <button className='btn-normal'><i className="fas fa-pen-nib"/>Listing</button>
                        <button className='btn-normal'><i className="fas fa-shopping-cart"/>Sale</button>
                        <button className='btn-normal'><i className="fas fa-chart-pie"/>Offer</button>
                        <button className='refresh-btn'><i className="fas fa-sync-alt"></i></button>
                    </div>
                </div>
                <div className='table-area'>
                <table>
                    <thead>
                        <th style={{paddingLeft: '30px'}}>Event</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Date</th>
                    </thead>
                    <tbody>
                        {nfts.map((nft, index) => (
                            <tr>
                                <td style={{paddingLeft: '30px'}}><i className="fas fa-shopping-cart"/>{nft.event}</td>
                                <td><img src="./Rectangle 809.png" style={{width: '50px', borderRadius: '5px', marginRight: '10px'}}></img> {nft.item}</td>
                                <td><img src="https://img.icons8.com/material-outlined/24/000000/final-state.png" style={{marginRight: '10px'}}/>{nft.price}</td>
                                <td><a>{nft.from}</a></td>
                                <td><a>{nft.to}</a></td>
                                <td>{nft.date} Minutes Ago</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </Content>
    )
}