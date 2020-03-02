import React, { useState, useEffect, useRef } from 'react'
import './MyContentHookComponent.scss'
import iphoneImg from '../../img/iphoneX.jpg'
import update from 'immutability-helper'

export default function MyContentHookComponent() {
    let itemsObj = [
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
        ]
    
    const inputName = useRef(null)
    const inputPrice = useRef(null)
    const inputAmount = useRef(null)

    const [items, setItems] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)
    
    useEffect(() => {
        // receiving data from ajax request
        // and set the state as the example object provided earlier
        setItems(itemsObj)
    }, [itemsObj])

    const renderBuyButton = (id) => {
        return (
            <button onClick={handleBuyButton} value={id} className="buy-btn">Buy</button>
        )
    }

    const handleBuyButton = (e) => {
        let buyID = e.target.value
        let index = items.findIndex((item) => item.id === +buyID)
        let amount = items[index].amount - 1
        if (amount > 0) {
            let newState = update(items, {
                [index]: { amount: { $set: amount } }
            })
            setItems(newState)
        } else {
            let newState = update(items, {
                [index]: {
                    amount: { $set: amount },
                    isSoldOut: { $set: true }
                }
            })
            setItems(newState)
        }
    }

    const renderEditItemButton = (id) => {
        return (
            <button onClick={handleEditItemButton} value={id} className="edit-item-btn">E</button>
        )
    }

    const handleEditItemButton = (e) => {
        let editID = e.target.value
        let index = items.findIndex((item) => item.id === +editID)
        let newState = update(items, {
            [index]: { editing: { $set: true } }
        })
        setItems(newState)
        setTimeout(() => {
            inputName.current.focus()
        }, 200)
    }

    const renderDeleteItemButton = (id) => {
        return (
            <button onClick={handleDeleteItemButton} value={id} className="delete-item-btn">X</button>
        )
    }

    const handleDeleteItemButton = (e) => {
        let deleteID = e.target.value
        let indexToRemove = items.findIndex((item) => item.id === +deleteID)
        let newItems = update(items, { $splice: [[indexToRemove, 1]] })
        setItems(newItems)
    }

    const renderSaveButton = (id) => {
        return (
            <button onClick={handleSaveItemButton} value={id} className="buy-btn">Save</button>
        )
    }

    const handleSaveItemButton = (e) => {
        let editID = e.target.value;
        let index = items.findIndex((item) => item.id === +editID);
        let newState = update(items, {
            [index]: {
                name: { $set: inputName.current.value },
                amount: { $set: inputAmount.current.value },
                price: { $set: inputPrice.current.value },
                isSoldOut: { $set: inputAmount.current.value > 0 ? false : true },
                editing: { $set: false },
            }
        });
        setItems(newState)
    }

    const renderAddItemButton = () => {
        return (
            <button onClick={handleAddItemButton} className="add-btn">+ Add Item</button>
        )
    }

    const handleAddItemButton = () => {
        let newItem = update(items, {
            $push: [{
                id: items.length !== 0 ? items[items.length - 1].id + 1 : 1,
                name: 'IPhone XS Max New',
                amount: 25,
                price: 19999,
                isSoldOut: false,
                editing: false
            }]
        })
        setItems(newItem)
    }

    const renderLoginButton = () => {
        return (
            <button onClick={handleLoginButton} className="add-btn">Login as Admin</button>
        )
    }

    const handleLoginButton = () => {
        setIsAdmin(true)
    }
    

    return (
        <>
            <>
                {isAdmin ? renderAddItemButton() : renderLoginButton()}
            </>
            <div id="grid">
                {items.map((item) => {
                    return (
                        <div key={item.id} className="item">
                            {isAdmin && renderDeleteItemButton(item.id)}
                            {isAdmin && renderEditItemButton(item.id)}
                            <img src={iphoneImg} alt={item.name} />
                            {item.editing ? <input ref={inputName} className="edit-input" type="text" name="name" defaultValue={item.name} /> : <p className="item-name">{item.name}</p>}
                            {item.editing ? <input ref={inputPrice} className="edit-input" type="text" name="price" defaultValue={item.price} /> : <span className="item-price">{item.price} ₴</span>}
                            {!item.editing && item.isSoldOut ? <span className="item-soldout">Sold Out!</span> : item.editing ? <input ref={inputAmount} className="edit-input" type="text" name="amount" defaultValue={item.amount} /> : <span className="item-amount">Left amout: {item.amount}</span>}
                            {!item.editing && item.isSoldOut && <div className="soldout"></div>}
                            {!item.isSoldOut && !item.editing && renderBuyButton(item.id)}
                            {item.editing && renderSaveButton(item.id)}
                        </div>
                    )
                })}
            </div>
        </>
    )
}