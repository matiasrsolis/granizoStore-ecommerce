import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props){

    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/products");
            setProduct(data);
        }
        fetchData();
        return() => {

        }
    }, [])

    return <ul>
        {
            products.map(product => 
            <li key={product._id} className="productCard">
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