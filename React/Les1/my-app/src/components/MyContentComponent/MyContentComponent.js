import React, { Component } from 'react';
import './MyContentComponent.scss';
import iphoneImg from '../../img/iphoneX.jpg'

export default class MyContentComponent extends Component {
    constructor(props) {
        super(props);
        console.log('props', props);
        this.state = {}
        this.items = [
            {
                name: 'IPhone X 64Gb Silver',
                amount: 25,
                price: 14999,
                isSoldOut: false,
                id: 1
            },
            {
                name: 'IPhone XS 128Gb Black',
                amount: 25,
                price: 18999,
                isSoldOut: true,
                id: 2
            },
            {
                name: 'IPhone XS Max 512Gb White',
                amount: 25,
                price: 24999,
                isSoldOut: false,
                id: 3
            },
            {
                name: 'IPhone X',
                amount: 25,
                price: 14999,
                isSoldOut: true,
                id: 4
            },
            {
                name: 'IPhone XS',
                amount: 25,
                price: 15999,
                isSoldOut: false,
                id: 5
            },
            {
                name: 'IPhone XS Max',
                amount: 25,
                price: 18999,
                isSoldOut: true,
                id: 6
            },
            {
                name: 'IPhone X',
                amount: 25,
                price: 14999,
                isSoldOut: false,
                id: 7
            },
            {
                name: 'IPhone XS',
                amount: 25,
                price: 16999,
                isSoldOut: true,
                id: 8
            },
            {
                name: 'IPhone XS Max',
                amount: 25,
                price: 19999,
                isSoldOut: false,
                id: 9
            }
        ]
    };

    renderBuyButton() {
        return (   
            <button className="buy-btn">Buy</button>
        )
    }

    render() {
        return (
            <div id="grid">
                {this.items.map((item) => {
                    return (
                        <div key={item.id} className="item">
                            <img src={iphoneImg} alt={item.name} />
                            <p className="item-name">{item.name}</p>
                            <span className="item-price">{item.price} ₴</span>
                            {item.isSoldOut?<span className="item-soldout">Sold Out!</span>:<span className="item-amount">Left amout: {item.amount}</span>}
                            {item.isSoldOut&&<div className="soldout"></div>}
                            {!item.isSoldOut&&this.renderBuyButton()}
                        </div>
                    )
                })}
            </div>
        )
    }  
}  