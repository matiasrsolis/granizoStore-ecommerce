import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props){
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return() => {
            //
        };
    }, [])
    
    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }
   
    return <div>
            <div>
                <Link to="/">Volver</Link>
            </div>
            {loading ?  <div>Loading...</div> :
            error ? <div>{error}</div>:
            
            (<div>
                <figure>
                <img src={product.image} alt={product.name} />
            </figure>
            <div>
                <ul>
                    <h1>{product.name}</h1>
                    <li><h2>{product.brand}</h2></li>
                    <li><p>{`$ ${product.price}`}</p></li>
                    <li><div className="precio">{product.rating}Stars({product.numReiews})</div></li>
                    <li><p>{product.description}</p></li>
                </ul>
            </div> 
            <aside className="details-action">
                <ul>
                    <li>
                        Precio: {product.price}
                    </li>
                    <li>
                        Status: {product.countInStock > 0 ? "En stock" : "No está disponible"}
                    </li>
                    <li>
                        Cantidad: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                            {[...Array(product.countInStock).keys()].map( x =>
                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                            )}
                        </select>
                    </li>
                    {product.countInStock > 0 && <button onClick={handleAddToCart}>Agregar al carro</button>
                    }
                    
                </ul>
            </aside> 
            </div>)}

        </div>
    

    
}

export default ProductScreen;