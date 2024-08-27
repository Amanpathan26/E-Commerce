import './App.css';
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';
import SearchItem from './pages/SearchItem';
import Basket from './pages/Basket';
import Home from './pages/Home';
import Form from './pages/Form';

import { useState } from 'react';
import { items } from './components/Data';
import { Routes, Route } from "react-router-dom";


function App() {

  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);


  return (
    <div>
      <Header setData={setData} items={data} cart={cart} />
      <Routes>
        <Route path='/' element={<Home items={data} setCart={setCart} cart={cart} />}></Route>
        <Route path='/Cart' element={<Basket cart={cart} setCart={setCart} />}></Route>
        <Route path='/Product/:id' element={<ProductDetails />}></Route>
        <Route path='/SearchItem/:term' element={<SearchItem />}></Route>
        <Route path='/Form' element={<Form />}></Route>
      </Routes>
    </div>
  )
}

export default App
