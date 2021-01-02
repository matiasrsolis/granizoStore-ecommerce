import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreens';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';


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
                {userInfo && userInfo.isAdmin && (
                  <div className="dropdown">
                    <a href="#">Admin</a>
                    <ul className="dropdown-content">
                      <li>
                        <Link to="/orders">Órdenes</Link>
                        <Link to="/products">Productos</Link>
                      </li>
                    </ul>
                  </div>
                )}
            </nav>
          </div>          
          <div className="lineaMulticolor"></div>
      </header>
      <main>
        <Route path="/orders" component={OrdersScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />  
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/products" component={ProductsScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/category/:id" component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />  
        <Route path="/cart/:id?" component={CartScreen} /> 
        <Route path="/" exact component={HomeScreen} />  

        <aside className="sidebar">
            <button onClick={closeMenu}>X</button>
            <h3>Categorías</h3>
            <ul>
                <li>
                  <Link to="/category/Remera">Remeras</Link>
                </li>
                
                <li>
                  <Link to="/category/Buzos">Buzos</Link>
                </li>
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
