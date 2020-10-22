import React from 'react';
import './App.css';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <BrowserRouter>  
    <div>
        <header>
          <button onClick={openMenu}>Menu</button>
          <div className="brand">
              <Link to='/'><h1>Granizo Store</h1></Link>
          </div>
          <nav>
              <ul>
                  <li><a href="cart.html">Cart</a></li>
                  <li><a href="signIn.html">Sign In</a></li>
              </ul>
          </nav>
          
      </header>
      <main>
        <Route path="/product/:id" component={ProductScreen} />   
        <Route path="/" exact component={HomeScreen} />  
        
        <aside className="sidebar">
            <button onClick={closeMenu}>X</button>
            <h3>Categorías</h3>
            <ul>
                <li><a href="#">Ropa</a></li>
                <li><a href="#">Cuero</a></li>
            </ul>
        </aside>
    </main>
    <footer>

    </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
