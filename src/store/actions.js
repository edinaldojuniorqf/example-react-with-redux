export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_FILTER_TEXT = 'SET_ILTER_TEXT'
export const SET_IN_STOCK = 'SET_IN_STOCK'

export const setProducts = products => ({
    type: SET_PRODUCTS,
    products
})

export const setFilterText = text => ({
    type: SET_FILTER_TEXT,
    text
})

export const setInStock = inStock => ({
    type: SET_IN_STOCK,
    inStock
})