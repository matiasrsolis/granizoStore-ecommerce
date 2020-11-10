import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';


function CartScreen(props) {
    const productId = props.match.params.id;

    //location.search Devuelve la parte de la cadena de consulta de una URL -> ?qty=1
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    console.log(productId)

    useEffect(() => {
        if (productId) {
          dispatch(addToCart(productId, qty));
        }
      }, []);

    return <div>
        Cart Screen
    </div>
}

export default CartScreen;