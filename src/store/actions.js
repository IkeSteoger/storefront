export const changeCategory = (category) => {
    return {
        type: 'CHANGE_CATEGORY',
        payload: category,
    }
}

export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    }
}

export const removeFromCart = (product) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product,
    }
}

export const reset = () => {
    return {
        type: 'RESET',
        payload: {}
    }
}