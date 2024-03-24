import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import ProductContext from '../Context/ProductContext'
import ProductState from '../Context/ProductState'

const RoutLayouts = () => {
    return (
        <ProductState>
            <Navber />
            <Outlet />
            <Footer />
        </ProductState>
    )
}

export default RoutLayouts