import { createStore } from "redux";
import rootReducer from "../reducers";

let initializedState = {
    article: [
        {
            id: 1,
            name: 'IPhone X 64Gb Silver',
            amount: 3,
            price: 14999,
            isSoldOut: false,
            isEditing: false,
        },
        {
            id: 2,
            name: 'IPhone XS 128Gb Black',
            amount: 0,
            price: 18999,
            isSoldOut: true,
            isEditing: false,
        },
        {
            id: 3,
            name: 'IPhone XS Max 512Gb White',
            amount: 25,
            price: 24999,
            isSoldOut: false,
            isEditing: false,
        },
        {
            id: 4,
            name: 'IPhone X',
            amount: 0,
            price: 14999,
            isSoldOut: true,
            isEditing: false,
        },
        {
            id: 5,
            name: 'IPhone XS',
            amount: 25,
            price: 15999,
            isSoldOut: false,
            isEditing: false,
        },
        {
            id: 6,
            name: 'IPhone XS Max',
            amount: 0,
            price: 18999,
            isSoldOut: true,
            isEditing: false,
        },
        {
            id: 7,
            name: 'IPhone X',
            amount: 25,
            price: 14999,
            isSoldOut: false,
            isEditing: false,
        },
        {
            id: 8,
            name: 'IPhone XS',
            amount: 0,
            price: 16999,
            isSoldOut: true,
            isEditing: false,
        },
        {
            id: 9,
            name: 'IPhone XS Max',
            amount: 25,
            price: 19999,
            isSoldOut: false,
            isEditing: false,
        }
    ]
}

const store = createStore(rootReducer, initializedState);

export default store;
