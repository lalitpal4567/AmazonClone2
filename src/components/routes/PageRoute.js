import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footerSection/Footer'
import { Route } from 'react-router-dom'
import HomePageDashboard from '../productPages/homePage/HomePageDashboard'
import ProductPage from '../productPages/productPage/ProductPage'
import AddCartBuyPage from '../productPages/addCartBuyPage/AddCartBuyPage'
import ShoppingCartPage from '../productPages/shoppingCartPage/ShoppingCartPage'
import SignInPage from '../productPages/signInPage/SignInPage'
import SignUpPage from '../productPages/signUpPage/SignUpPage'
import ErrorPage from '../productPages/errorPage/ErrorPage'

const PageRoute = () => {
  return (
    <>
        <Navbar/>
            <Route path="/" element={<HomePageDashboard/>}/>
            <Route path="/productPage" element={<ProductPage/>}/>
            <Route path="/cartPage/:id" element={<AddCartBuyPage/>}/>
            <Route path="/shoppingCart" element={<ShoppingCartPage/>}/>
            <Route path="/signIn" element={<SignInPage/>}/>
            <Route path="/signUp" element={<SignUpPage/>}/>
            <Route path="/*" element={<ErrorPage/>}/>
        <Footer/>    
    </>
  )
}

export default PageRoute
