import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';


function CartScreen(props) {
  const cart = useSelector(state => state.cart);

  const {cartItems} = cart;

  const productId = props.match.params.id;
  //location.search Devuelve la parte de la cadena de consulta de una URL -> ?qty=1
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  useEffect(() => {
      if (productId) {
        dispatch(addToCart(productId, qty));
      }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }

  return <div className="cart">
      <div className="cart-list">
        <ul>
          <li>
            <h3>Carrito de compra</h3>
            <div>Precio</div>
          </li>
          {
            cartItems.length === 0 ?
            <div>
              El carrito está vacío.
            </div>
            :
            cartItems.map( item => 
              <div className="cart-product">
                <img src={item.image} alt={item.name} />
                <div>
                  <Link to={"/product/" + item.productId}>
                    {item.name}
                  </Link>
                </div>
                <div>
                  Cantidad: 
                  {/* {`${item.qty} unidades`} */}
                  <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <button type="button" onClick={() => removeFromCartHandler(item.product)}>Quitar</button>
                </div>
                <div>
                {`$ ${item.price}`}
                </div>
              </div>
              )
          }
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtotal ( {cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.qty, 0)} unidades)
          :
          $ {cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.qty, 0)}
        </h3>
        <button onClick={checkoutHandler} disabled={cartItems.length === 0}>Pasar por caja</button>  
      </div>
  </div>
}

export default CartScreen;