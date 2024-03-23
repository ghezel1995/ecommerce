import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/cart/Cart';
import { Shop } from './pages/shop/Shop';
import './App.css';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
