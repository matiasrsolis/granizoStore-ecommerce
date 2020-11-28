import React from 'react';
import './App.css';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

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
          <div className="headerBox">
            <button onClick={openMenu}>Menu</button>
            <div className="brand">
                <Link to='/'><h1>Mi Ninie Veneno</h1></Link>
                <h3>El amor necesario</h3>
            </div>
            <nav>
                <ul>
                    <li><a href="/cart">Carrito</a></li>
                    {userInfo ? (
                      <Link to="/profile">{userInfo.name}</Link>
                    ) : (
                      <Link to="/signin">Ingresar</Link>
                    )}
                </ul>
            </nav>
          </div>          
          <div className="lineaMulticolor"></div>
      </header>
      <main>
        <Route path="/signin" component={SigninScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/product/:id" component={ProductScreen} />  
        <Route path="/cart/:id?" component={CartScreen} /> 
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
