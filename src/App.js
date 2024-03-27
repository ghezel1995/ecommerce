import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/cart/Cart';
import { Shop } from './pages/shop/Shop';
import './App.css';
import { ShopContextProvider } from './context/shop-context';
import { SignIn } from './pages/auth/SignIn';
import { Intro } from './pages/shop/Intro';
import { ProductDetail } from './pages/shop/ProductDetail';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const handleAuthentication = (name) => {
    setIsAuthenticated(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
  };

  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar
            userName={userName}
            isAuthenticated={isAuthenticated}
            handleLogout={handleLogout}
          />
          <Routes>
            <Route
              path='/'
              element={
                <Intro isAuthenticated={isAuthenticated} userName={userName} />
              }
            />
            <Route path='shop' element={<Shop />} />
            <Route path='intro' element={<Intro />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route
              path='/signin'
              element={<SignIn onAuth={handleAuthentication} />}
            />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
