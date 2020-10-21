import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <div>
        <header>
          <button onClick={openMenu}>Menu</button>
          <div className="brand">
              <a href="index.html">Granizo Store</a>
          </div>
          <nav>
              <ul>
                  <li><a href="cart.html">Cart</a></li>
                  <li><a href="signIn.html">Sign In</a></li>
              </ul>
          </nav>
          
      </header>
      <main>
        <ul>
            <li className="productCard">
                <div>
                    <figure>
                        <img src="/images/cartera.jpg" alt="" />
                    </figure>
                    <div className="productInfo">
                        <h2 className="nombreProducto">Producto 1</h2>
                        <p className="marca">De marca</p>
                        <p className="precio">$99</p>
                    </div>
                </div>
            </li>
            <li className="productCard">
                <div>
                    <figure>
                      <img src="/images/cartera.jpg" alt="" />
                    </figure>
                    <div className="productInfo">
                        <h2 className="nombreProducto">Producto 1</h2>
                        <p className="marca">De marca</p>
                        <p className="precio">$99</p>
                    </div>
                </div>
            </li>
            <li className="productCard">
                <div>
                    <figure>
                       <img src="/images/cartera.jpg" alt="" />
                    </figure>
                    <div className="productInfo">
                        <h2 className="nombreProducto">Producto 1</h2>
                        <p className="marca">De marca</p>
                        <p className="precio">$99</p>
                    </div>
                </div>
            </li>
            <li className="productCard">
                <div>
                    <figure>
                        <img src="/images/cartera.jpg" alt="" />    
                    </figure>
                    <div className="productInfo">
                        <h2 className="nombreProducto">Producto 1</h2>
                        <p className="marca">De marca</p>
                        <p className="precio">$99</p>
                    </div>
                </div>
            </li>
            <li className="productCard">
                <div>
                    <figure>
                        <img src="/images/cartera.jpg" alt="" />
                    </figure>
                    <div className="productInfo">
                        <h2 className="nombreProducto">Producto 1</h2>
                        <p className="marca">De marca</p>
                        <p className="precio">$99</p>
                    </div>
                </div>
            </li>
        </ul>
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
  );
}

export default App;
