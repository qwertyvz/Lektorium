import { article } from '../constants'
import update from 'immutability-helper'

const initialState = {
    article: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case article.ADD_ARTICLE:
            return update(state, {
                $push: [{
                    id: action.id,
                    name: action.name,
                    amount: action.amount,
                    price: action.price,
                    isSoldOut: action.isSoldOut,
                    isEditing: action.isEditing
                }]
            })
        case article.DELETE_ARTICLE:
            let indexToRemove = state.findIndex((item) => item.id === +action.id)
            return update(state, { 
                $splice: [[indexToRemove, 1]] 
            })
        case article.EDIT_ARTICLE:
            let indexEdit = state.findIndex((item) => item.id === +action.id)
            return update(state, {
                [indexEdit]: { isEditing: { $set: true } }
            })
        case article.SAVE_ARTICLE:
            let indexSave = state.findIndex((item) => item.id === +action.id)
            return update(state, {
                [indexSave]: {
                    name: { $set: action.payload.name },
                    price: { $set: action.payload.price },
                    amount: { $set: action.payload.amount },
                    isSoldOut: { $set: +action.payload.amount === 0 ? true : false},
                    isEditing: { $set: false }
                }
            })
        case article.BUY_ITEM: 
            let indexBuy = state.findIndex((item) => item.id === +action.id)
            let leftAmount = +state[indexBuy].amount - 1
            return update(state, {
                [indexBuy]: { 
                    amount: { $set: leftAmount },
                    isSoldOut: { $set:  leftAmount === 0 ? true : false}
                }
            })
        default:
            return state
    }
}

