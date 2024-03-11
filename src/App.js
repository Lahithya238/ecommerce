import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Users from './Pages/Users';
import './App.css';
import Shop from './Pages/Shop';
import Login from './Pages/Login';
import { AuthProvider } from './Pages/AuthContext';
import { Cartprovider } from './Pages/CartContext';
import CartPage from './Pages/CartPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Cartprovider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/users" element={<Users />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cartpage' element={<CartPage />} />
            </Routes>
          </Cartprovider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
