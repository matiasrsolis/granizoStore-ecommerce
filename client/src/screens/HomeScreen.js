import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';



function HomeScreen(props){

  //const [products, setProduct] = useState([]);
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  
  useEffect(() => {
    dispatch(listProducts())
    return () => {
      //
    }; 
  }, [])
  console.log(props)
  return loading ? <div>Loading...</div> : 
    error ? <div>{error}</div> :
    <div>
        <div>
        {
          !userInfo ?
          (
          <h2>Formá parte de MNV!</h2>
          )
          :
          (
            userInfo.name !== "Orne" ?
            <h2>Hola {userInfo.name}!</h2> :
            <h2>Hola, si sos {userInfo.name} Manes, te extraño y te amo!</h2>
          )
        }

        {
          userInfo.isAdmin ?
          (
            <a href="/products">Agregá un producto</a>
          ):(
            <p>Conseguí lo mejor para vos!</p>
          )
        }

      </div>
      <ul className="productsList">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product">
            <Link to={'/product/' + product._id}>
              <figure>
                <img className="product-image" src={product.image} alt={product.name}/>
              </figure>
            </Link>
            <div className="product-name">
              <Link to={'/product/' + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
      


}

export default HomeScreen;


// return (
//   <>
    
//     {loading ? (
//       <div>Loading...</div>
//     ) : error ? (
//       <div>{error}</div>
//     ) : (
//       <ul className="products">
//         {products.map((product) => (
//           <li key={product._id}>
//             <div className="product">
//               <Link to={'/product/' + product._id}>
//                 <img
//                   className="product-image"
//                   src={product.image}
//                   alt="product"
//                 />
//               </Link>
//               <div className="product-name">
//                 <Link to={'/product/' + product._id}>{product.name}</Link>
//               </div>
//               <div className="product-brand">{product.brand}</div>
//               <div className="product-price">${product.price}</div>
//               <div className="product-rating">
                
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     )}
//   </>
// );