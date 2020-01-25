import  { article } from '../constants'

let nextArticleId = 10

const addArticle = () => {
    return {
        type: article.ADD_ARTICLE,
        id: nextArticleId++,
        name: 'IPhone XS Max New',
        amount: 25,
        price: 19999,
        isSoldOut: false,
        isEditing: false
    }
}

const deleteArticle = (id) => {
    return {
        type: article.DELETE_ARTICLE,
        id
        
    }
}

const editArticle = (id) => {
    return {
        type: article.EDIT_ARTICLE,
        id
    }
}

const saveArticle = (id, payload) => {
    return {
        type: article.SAVE_ARTICLE,
        id,
        payload
    }
}

const buyItem = (id) => {
    return {
        type: article.BUY_ITEM,
        id
    }
}

export default {
    addArticle,
    deleteArticle,
    editArticle,
    saveArticle,
    buyItem
}