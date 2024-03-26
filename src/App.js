import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/cart/Cart';
import { Shop } from './pages/shop/Shop';
import './App.css';
import { ShopContextProvider } from './context/shop-context';
import { SignIn } from './pages/auth/SignIn';
import { Login } from './pages/auth/Login';
import { Intro } from './pages/shop/Intro';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar
            isAuthenticated={isAuthenticated}
            handleLogout={handleLogout}
          />
          {/* {!isAuthenticated && <SignIn onAuth={handleAuthentication} />} */}
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='intro' element={<Intro />} />
            <Route path='/cart' element={<Cart />} />
            <Route
              path='/signin'
              element={<SignIn onAuth={handleAuthentication} />}
            />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
