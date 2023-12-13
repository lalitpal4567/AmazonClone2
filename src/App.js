import { useEffect} from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePageDashboard from "./components/productPages/homePage/HomePageDashboard";
import ProductPage from "./components/productPages/productPage/ProductPage";
import AddCartBuyPage from "./components/productPages/addCartBuyPage/AddCartBuyPage";
import SignInPage from "./components/productPages/signInPage/SignInPage";
import SignUpPage from "./components/productPages/signUpPage/SignUpPage";
import ErrorPage from "./components/productPages/errorPage/ErrorPage";
import ShoppingCartPage from "./components/productPages/shoppingCartPage/ShoppingCartPage";
import { CartProvider } from "./components/productPages/CartContext";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const App = () => {
    return (
        <CartProvider>
            <>
                <ScrollToTop />
                <Routes>
                    <Route path="/productPage/:labelName" element={<ProductPage />} />
                    <Route path="/cartPage/:id" element={<AddCartBuyPage />} />
                    <Route path="/productCart" element={<ShoppingCartPage />} />
                    <Route path="/signIn" element={<SignInPage />} />
                    <Route path="/signUp" element={<SignUpPage />} />
                    <Route path="/" element={<HomePageDashboard />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </>
        </CartProvider>
    );
}
export default App
