import React from 'react'
import "./ShoppingCartPage.css";
import Navbar from 'src/components/navbar/Navbar';
import Footer from 'src/components/footerSection/Footer';
import ShoppingCartCard from './ShoppingCartCard';
import { useCart } from '../CartContext';

const ShoppingCartPage = () => {
    const { cartItems } = useCart();
    const {totalAmount} = useCart();
    const {totalProduct} = useCart();
    
    return (
        <>
            <Navbar />
            <main className='main-container-abc'>
                <div className='selected-product-shopping-cart'>
                    <div id="shopping-cart-title"><p>Shopping Cart</p></div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}><ShoppingCartCard item={item} /></li>
                        ))}
                    </ul>
                    <div className='subtotal-shopping-cart'>
                        <p>Subtotal ({totalProduct} items):₹ {totalAmount}/-</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ShoppingCartPage
