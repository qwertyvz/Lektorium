import React, { Component } from 'react';
import './MyContentComponent.scss';
import iphoneImg from '../../img/iphoneX.jpg';
import update from 'immutability-helper';

export default class MyContentComponent extends Component {
    constructor(props) {
        super(props);
        console.log('props', props);
        this.state = {
            items: [
                {
                    id: 1,
                    name: 'IPhone X 64Gb Silver',
                    amount: 3,
                    price: 14999,
                    isSoldOut: false,
                    editing: false,
                },
                {
                    id: 2,
                    name: 'IPhone XS 128Gb Black',
                    amount: 0,
                    price: 18999,
                    isSoldOut: true,                    
                    editing: false,
                },
                {
                    id: 3,
                    name: 'IPhone XS Max 512Gb White',
                    amount: 25,
                    price: 24999,
                    isSoldOut: false,                    
                    editing: false,
                },
                {
                    id: 4,
                    name: 'IPhone X',
                    amount: 0,
                    price: 14999,
                    isSoldOut: true,                    
                    editing: false,
                },
                {
                    id: 5,
                    name: 'IPhone XS',
                    amount: 25,
                    price: 15999,
                    isSoldOut: false,                    
                    editing: false,
                },
                {
                    id: 6,
                    name: 'IPhone XS Max',
                    amount: 0,
                    price: 18999,
                    isSoldOut: true,                    
                    editing: false,
                },
                {
                    id: 7,
                    name: 'IPhone X',
                    amount: 25,
                    price: 14999,
                    isSoldOut: false,                    
                    editing: false,
                },
                {
                    id: 8,
                    name: 'IPhone XS',
                    amount: 0,
                    price: 16999,
                    isSoldOut: true,                    
                    editing: false,
                },
                {
                    id: 9,
                    name: 'IPhone XS Max',
                    amount: 25,
                    price: 19999,
                    isSoldOut: false,                    
                    editing: false,
                }
            ],
            isAdmin: false
        }
        this.handleAddItemButton = this.handleAddItemButton.bind(this);
        this.handleDeleteItemButton = this.handleDeleteItemButton.bind(this);
        this.handleEditItemButton = this.handleEditItemButton.bind(this);
        this.handleSaveItemButton = this.handleSaveItemButton.bind(this);
        this.handleLoginButton = this.handleLoginButton.bind(this);
        this.handleBuyButton = this.handleBuyButton.bind(this);
    };
    
    renderBuyButton(id) {
        return (   
            <button onClick={this.handleBuyButton} value={id} className="buy-btn">Buy</button>
        )
    }

    handleBuyButton(e) {
        let buyID = e.target.value;
        let index = this.state.items.findIndex((item) => item.id === +buyID);
        let amount = this.state.items[index].amount - 1;
        if (amount > 0) {
            let newState = update(this.state.items, {
                [index]: { amount: { $set: amount } }
            })
            this.setState({ items: newState });
        } else {
            let newState = update(this.state.items, {
                [index]: { 
                    amount: { $set: amount },
                    isSoldOut: { $set: true }
                }
            })
            this.setState({ items: newState });
        }
    }

    renderDeleteItemButton(id) {
        return (
            <button onClick={this.handleDeleteItemButton} value={id} className="delete-item-btn">X</button>
        )
    }

    handleDeleteItemButton(e) {
        let deleteID = e.target.value;        
        let indexToRemove = this.state.items.findIndex((item) => item.id === +deleteID);
        let newItems = update(this.state.items, { $splice: [[indexToRemove, 1]] });
        this.setState({items: newItems})
        
    }

    renderEditItemButton(id) {
        return (
            <button onClick={this.handleEditItemButton} value={id} className="edit-item-btn">E</button>
        )
    }

    handleEditItemButton(e) {
        let editID = e.target.value;
        let index = this.state.items.findIndex((item) => item.id === +editID);
        let newState = update(this.state.items, {
            [index]: {editing: {$set: true}}
        });
        this.setState({items: newState});
    }

    renderSaveButton(id) {
        return (
            <button onClick={this.handleSaveItemButton} value={id} className="buy-btn">Save</button>
        )
    }

    handleSaveItemButton(e) {
        let editID = e.target.value;
        let index = this.state.items.findIndex((item) => item.id === +editID);
        let newState = update(this.state.items, {
            [index]: { 
                name: {$set: this.name.value},
                amount: {$set: this.amount.value},
                price: {$set: this.price.value},
                isSoldOut: {$set: this.amount.value > 0 ? false : true},
                editing: { $set: false },   
             }
        });
        this.setState({ items: newState });
    }

    handleAddItemButton() {
        let newItem = update(this.state.items, {$push: [{
            id: this.state.items.length !== 0 ? this.state.items[this.state.items.length - 1].id + 1 : 1,
            name: 'IPhone XS Max New',
            amount: 25,
            price: 19999,
            isSoldOut: false,
            editing: false
        }]});
        this.setState({items: newItem});
    }

    renderAddItemButton() {
        return (
            <button onClick={this.handleAddItemButton} className="add-btn">+ Add Item</button>
        )
    }

    renderLoginButton() {
        return (
            <button onClick={this.handleLoginButton} className="add-btn">Login as Admin</button>
        )
    }

    handleLoginButton() {
        this.setState({isAdmin: true})
    }

    render() {
        return (
            <> 
                <>
                    {this.state.isAdmin ? this.renderAddItemButton() : this.renderLoginButton()}
                </>
                <div id="grid">
                    {this.state.items.map((item) => {
                        return (
                            <div key={item.id} className="item">
                                {this.state.isAdmin && this.renderDeleteItemButton(item.id)}
                                {this.state.isAdmin && this.renderEditItemButton(item.id)}
                                <img src={iphoneImg} alt={item.name} />
                                {item.editing ? <input type="text" name="name" defaultValue={item.name} ref={input => this.name = input}/> : <p className="item-name">{item.name}</p>}
                                {item.editing ? <input type="text" name="price" defaultValue={item.price} ref={input => this.price = input}/> : <span className="item-price">{item.price} ₴</span>}
                                {!item.editing && item.isSoldOut ? <span className="item-soldout">Sold Out!</span> : item.editing ? <input type="text" name="amount" defaultValue={item.amount} ref={input => this.amount = input}/> :<span className="item-amount">Left amout: {item.amount}</span>}
                                {!item.editing && item.isSoldOut && <div className="soldout"></div>}
                                {!item.isSoldOut && !item.editing && this.renderBuyButton(item.id)}
                                {item.editing && this.renderSaveButton(item.id)}
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }  
}  