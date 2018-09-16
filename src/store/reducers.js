import { SET_PRODUCTS, SET_FILTER_TEXT, SET_IN_STOCK } from './actions'
import { combineReducers } from 'redux'

const products = (state = [], action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.products
        default:
            return state
    }
}

const filterText = (state = '', action) => {
    switch (action.type) {
        case SET_FILTER_TEXT:
            return action.text
        default:
            return state
    }
}

const inStock = (state = false, action) => {
    switch (action.type) {
        case SET_IN_STOCK:
            return action.inStock
        default:
            return state
    }
}

export default combineReducers({
    products,
    filterText,
    inStock
})