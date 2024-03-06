import logo from './logo.svg';
import './App.css';
import Header from './components/UI/Header';
import Summary from './components/UI/Summary';
import ItemList from './components/UI/ItemList';
import Cart from './components/UI/Cart';
import React, { useState } from 'react';
function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="App">
      <Header setCartOpen={setCartOpen}/>
      <div className='App-content'>
      <Summary/>
      <ItemList/>
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
      </div>
      
    </div>
  );
}

export default App;
