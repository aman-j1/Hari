import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './Components/Header/header';
import Home from './Pages/Home';
import LoginPage from './Pages/Login'
import RegisterPage from './Pages/Register'
import Reset from './Components/Reset Password/reset';
import { Product } from './Components/Admin/admin';
import { ProductDetail } from './Pages/productSingle';
import {Subscription} from './Components/Subscription/subscription'
import { ProductListPage } from './Pages/ProductListPage';
import CartPage from './Components/Cart/cart';
import WishlistPage from './Components/Wishlist/wishlist';
import Checkout from './Components/checkout';

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgot' element={<Reset />} />
        <Route path="/admin" element={<Product />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Subscription />
    </Router>
  );
}

export default App;
