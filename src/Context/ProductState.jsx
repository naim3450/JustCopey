import React from 'react'
import ProductContext from './ProductContext'

const ProductState = ({ children }) => {

    const state = {
        name: "naim"
    }
    return (
        <ProductContext.Provider value={state}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductState