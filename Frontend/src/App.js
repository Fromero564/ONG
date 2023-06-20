import React from 'react';
import { BrowserRouter , Routes, Link, Route, } from 'react-router-dom'; 
import User from './components/User';
import Product from './components/Product'
import Dashboard from './components/Dashboard';
import UserDetails from './components/UserDetails';
import ProductosDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import './App.css';




function App() {

  return (
    <div className='App'>
    <BrowserRouter> 
    <Navbar>
    </Navbar>
    <Routes>
    <Route path='/' element={<Dashboard/>} />
    <Route path='/usuarios' element={<User/>} />
    <Route path='/productos' element={<Product/>} />
    <Route path='/api/user/:id' element={<UserDetails/>} />
    <Route path='/api/productos/:id' element={<ProductosDetail/>} />
    <Route path= '*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;