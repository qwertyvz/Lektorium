import React, { useState, useRef } from 'react'
import update from 'immutability-helper'
import iphoneImg from '../../img/iphoneX.jpg'
import './List.scss'


export default (state) => {
    const articles = state.article
    let itemObj = {
         name: '',
         price: '',
         amount: ''
    }
    const [item, setItem] = useState(itemObj)
    const [isAdmin, setIsAdmin] = useState(false)

    const inputName = useRef(null)
    const inputPrice = useRef(null)
    const inputAmount = useRef(null)

    const handleChange = ({ target: { name, value }} ) => {
        let newState = update(item, {
            [name]: { $set: value }
        })
        setItem(newState)
    }

    const renderDeleteItemButton = (id) => {
        return (
            <button onClick={handleDeleteItemButton} value={id} className="delete-item-btn">X</button>
        )
    }

    const handleDeleteItemButton = (e) => { 
        e.preventDefault()
        const articleID = e.target.value
        state.deleteArticle(articleID)
    }

    const renderEditItemButton = (id) => {
        return (
            <button onClick={handleEditItemButton} value={id} className="edit-item-btn">E</button>
        )
    }

    const handleEditItemButton = (e) => {
        e.preventDefault()
        const articleID = e.target.value
        state.editArticle(articleID)
        setTimeout(() => {
            inputName.current.focus()
            let newState = update(item, {
                name: { $set: inputName.current.value },
                price: { $set: inputPrice.current.value },
                amount: { $set: inputAmount.current.value }
            })
            setItem(newState)
        }, 200)
        
    }

    const renderSaveButton = (id) => {
        return (
            <button onClick={handleSaveItemButton} value={id} className="buy-btn">Save</button>
        )
    }

    const handleSaveItemButton = (e) => {
        e.preventDefault()
        const articleID = e.target.value
        const articleData = item
        state.saveArticle(articleID, articleData)
    }

    const renderBuyButton = (id) => {
        return (
            <button onClick={handleBuyButton} value={id} className="buy-btn">Buy</button>
        )
    }

    const handleBuyButton = (e) => {
        e.preventDefault()
        const articleID = e.target.value
        state.buyItem(articleID)
    }

    const renderLoginButton = () => {
        return (
            <button onClick={handleLoginButton} className="add-btn">Login as Admin</button>
        )
    }

    const handleLoginButton = (e) => {
        e.preventDefault()
        setIsAdmin(true)
    }

    const renderAddItemButton = () => {
        return (
            <button onClick={handleAddItemButton} className="add-btn">+ Add Item</button>
        )
    }

    const handleAddItemButton = (e) => {
        e.preventDefault()
        state.addArticle()
    }

    
    return (
        <>
            <>
                {isAdmin ? renderAddItemButton() : renderLoginButton()}
            </>
            <div id="grid">
                {articles.map((item) => {
                    return (
                        <div key={item.id} className="item">
                            {isAdmin && renderDeleteItemButton(item.id)}
                            {isAdmin && renderEditItemButton(item.id)}
                            <img src={iphoneImg} alt={item.name} />
                            {item.isEditing ? <input ref={inputName} className="edit-input" type="text" name="name" onChange={handleChange} defaultValue={item.name} /> : <p className="item-name">{item.name}</p>}
                            {item.isEditing ? <input ref={inputPrice}className="edit-input" type="text" name="price" onFocus={handleChange} onChange={handleChange} defaultValue={item.price} /> : <span className="item-price">{item.price} ₴</span>}
                            {!item.isEditing && item.isSoldOut ? <span className="item-soldout">Sold Out!</span> : item.isEditing ? <input ref={inputAmount}className="edit-input" type="text" name="amount" onChange={handleChange} defaultValue={item.amount} /> : <span className="item-amount">Left amout: {item.amount}</span>}
                            {!item.isEditing && item.isSoldOut && <div className="soldout"></div>}
                            {!item.isSoldOut && !item.isEditing && renderBuyButton(item.id)}
                            {item.isEditing && renderSaveButton(item.id)}
                        </div>
                        
                    )
                })}
            </div>
        </>

        
    )
}