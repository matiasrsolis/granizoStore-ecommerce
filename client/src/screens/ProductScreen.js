import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct, saveProductReview } from '../actions/productActions';
import { PRODUCT_REVIEW_SAVE_RESET } from '../constants/productConstants';
import Rating from '../components/Rating';

function ProductScreen(props){
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const productReviewSave = useSelector((state) => state.productReviewSave);
    const { success: productSaveSuccess } = productReviewSave;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productSaveSuccess) {
          alert('Review submitted successfully.');
          setRating(0);
          setComment('');
          dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
        }
        dispatch(detailsProduct(props.match.params.id));
        return () => {
          //
        };
    }, [productSaveSuccess]);

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch actions
        dispatch(
          saveProductReview(props.match.params.id, {
            name: userInfo.name,
            rating: rating,
            comment: comment,
          })
        );
    };
    
    const handleAddToCart = () => {
        props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
    };
   
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
                        <li><div className="precio">{product.rating}Estrellas({product.numReviews})</div></li>
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

                <div>
                    <div className="content-margined">
                    <h2>Reseñas</h2>
                    {!product.reviews.length && <div>No hay reseñas aún.</div>}
                    <ul className="review" id="reviews">
                    {product.reviews.map((review) => (
                        <li key={review._id}>
                        <div>{review.name}</div>
                        <div>
                            <Rating value={review.rating}></Rating>
                        </div>
                        <div>{review.createdAt.substring(0, 10)}</div>
                        <div>{review.comment}</div>
                        </li>
                    ))}
                    <li>
                        <h3>Dejá tu comentario</h3>
                        {userInfo ? (
                        <form onSubmit={submitHandler}>
                            <ul className="form-container">
                            <li>
                                <label htmlFor="rating">Rating</label>
                                <select
                                name="rating"
                                id="rating"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                >
                                <option value="1">1- Poor</option>
                                <option value="2">2- Fair</option>
                                <option value="3">3- Good</option>
                                <option value="4">4- Very Good</option>
                                <option value="5">5- Excelent</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="comment">Comment</label>
                                <textarea
                                name="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                ></textarea>
                            </li>
                            <li>
                                <button type="submit" className="button primary">
                                Submit
                                </button>
                            </li>
                            </ul>
                        </form>
                        ) : (
                        <div>
                            Please <Link to="/signin">Sign-in</Link> to write a review.
                        </div>
                        )}
                    </li>
                </ul>
            </div>
                </div>

            </div>)}

        </div>
    

    
}

export default ProductScreen;