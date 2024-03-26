import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/cart/Cart';
import { Shop } from './pages/shop/Shop';
import './App.css';
import { ShopContextProvider } from './context/shop-context';
import { SignIn } from './pages/auth/SignIn';
import { Intro } from './pages/shop/Intro';
import { useState } from 'react';

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
        <BrowserRouter>
          <Navbar
            userName={userName}
            isAuthenticated={isAuthenticated}
            handleLogout={handleLogout}
          />
          {isAuthenticated && (
            <>
              <div className='welcome-message'>
                <h1>Welcome, {userName}!</h1>
                <p>Hope you enjoy shopping.</p>
              </div>
            </>
          )}
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='intro' element={<Intro />} />
            <Route path='/cart' element={<Cart />} />
            <Route
              path='/signin'
              element={<SignIn onAuth={handleAuthentication} />}
            />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
