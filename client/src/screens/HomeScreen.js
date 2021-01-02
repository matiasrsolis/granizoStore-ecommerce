import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';



function HomeScreen(props){

  //const [products, setProduct] = useState([]);
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const category = props.match.params.id ? props.match.params.id : '';
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const dispatch = useDispatch();

  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;
  
  // useEffect(() => {
  //   dispatch(listProducts())
  //   return () => {
  //     //
  //   }; 
  // }, [])

  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  console.log(props)


  // return loading ? <div>Loading...</div> : 
  //   error ? <div>{error}</div> :
  //   <div>
        


  //     <div>
  //       {
  //         !userInfo ?
  //         (
  //         <h2>Formá parte de nuestra comunidad!</h2>
  //         )
  //         :
  //         (
  //           userInfo.name === "Orne" || userInfo.name === "Ornella" || userInfo.name === "orne" || userInfo.name === "ornella" ?
  //           <div><h2>Hola {userInfo.name}, te extraño y te amo!</h2><h3>Hice la app pensando en vos.</h3></div> :
  //           <h2>Hola {userInfo.name}!</h2>
  //         )
  //       }

  //       {
  //         !userInfo ?
  //         (
  //           <p>Conseguí lo mejor para vos!</p>
  //         ):(
  //           userInfo.isAdmin ? (<a href="/products">Administrá tus productos</a>) : (<p>...</p>)
            
  //         )
  //       }

  //     </div>
  //     <ul className="productsList">
  //     {products.map((product) => (
  //       <li key={product._id}>
  //         <div className="product">
  //           <Link to={'/product/' + product._id}>
  //             <figure>
  //               <img className="product-image" src={product.image} alt={product.name}/>
  //             </figure>
  //           </Link>
  //           <div className="product-name">
  //             <Link to={'/product/' + product._id}>{product.name}</Link>
  //           </div>
  //           <div className="product-brand">{product.brand}</div>
  //           <div className="product-price">${product.price}</div>
  //           <div className="product-rating">
              
  //           </div>
  //         </div>
  //       </li>
  //     ))}
  //   </ul>
  //   </div>
      
      return (
        <>
          {category && <h2>{category}</h2>}

          <div>
          {
            !userInfo ?
            (
            <h2>Formá parte de nuestra comunidad!</h2>
            )
            :
            (
              userInfo.name === "Orne" || userInfo.name === "Ornella" || userInfo.name === "orne" || userInfo.name === "ornella" ?
              <div><h2>Hola {userInfo.name}, te extraño y te amo!</h2><h3>Hice la app pensando en vos.</h3></div> :
              <h2>Hola {userInfo.name}!</h2>
            )
          }

          {
            !userInfo ?
            (
              <p>Conseguí lo mejor para vos!</p>
            ):(
              userInfo.isAdmin ? (<a href="/products">Administrá tus productos</a>) : (<p>...</p>)
              
            )
          }

        </div>
    
          <ul className="filter">
            <li>
              <form onSubmit={submitHandler}>
                <input
                  name="searchKeyword"
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <button type="submit">Search</button>
              </form>
            </li>
            <li>
              Sort By{' '}
              <select name="sortOrder" onChange={sortHandler}>
                <option value="">Newest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
              </select>
            </li>
          </ul>


          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
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
                    <Rating
                      value={product.rating}
                      text={product.numReviews + ' reviews'}
                    />  
                  </div>
                </div>
              </li>
            ))}
          </ul>

            // <ul className="products">
            //   {products.map((product) => (
            //     <li key={product._id}>
            //       <div className="product">
            //         <Link to={'/product/' + product._id}>
            //           <img
            //             className="product-image"
            //             src={product.image}
            //             alt="product"
            //           />
            //         </Link>
            //         <div className="product-name">
            //           <Link to={'/product/' + product._id}>{product.name}</Link>
            //         </div>
            //         <div className="product-brand">{product.brand}</div>
            //         <div className="product-price">${product.price}</div>
            //         <div className="product-rating">
            //           <Rating
            //             value={product.rating}
            //             text={product.numReviews + ' reviews'}
            //           />
            //         </div>
            //       </div>
            //     </li>
            //   ))}
            // </ul>
          )}
        </>
      );

}

export default HomeScreen;