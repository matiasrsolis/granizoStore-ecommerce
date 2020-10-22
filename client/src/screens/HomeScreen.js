import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function HomeScreen(){
    return <ul>
        {
            data.products.map(product => 
            <li className="productCard">
                <div>
                        <figure>
                        <Link to={'/product/' + product._id}>
                            <img
                                className="product-image"
                                src={product.image}
                                alt="product"
                            />
                        </Link>
                        </figure>
                        <div className="productInfo">
                            <Link to={'/product/' + product._id}>{product.name}</Link>
                            <p className="marca">{product.brand}</p>
                            <p className="precio">{product.price}</p>
                            <div className="precio">{product.rating}Stars({product.numReiews})</div>
                        </div>
                </div>
                    
            </li> 
            )
        }
        

    </ul>
}

export default HomeScreen;