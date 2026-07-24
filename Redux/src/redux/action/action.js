export const addToProduct = (detail) => {
    return {
        type: "ADD_PRODUCT", 
        payload: detail,

    }
}

export const increment = () => {
    return {
        type: "INCREMENT", 
    
    }
}


export const cartAdd = () => {
    return {
        type: "ADD_TO_CART", 
    
    }
}