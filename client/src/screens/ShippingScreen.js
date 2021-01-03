import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen(props) {

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push('payment'); //--> Redireccionar a '/payment'
  }
  return <div>
    <CheckoutSteps step1 step2 ></CheckoutSteps>

    {/* {
      userInfo.name === "Orne" || userInfo.name === "Ornella" || userInfo.name === "orne" || userInfo.name === "ornella" ?
      (<div><h2>Hola {userInfo.name}, te extraño y te amo!</h2><h3>Hice la app pensando en vos.</h3></div>) :
      (<h2>Bien!</h2>)
    } */}

    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Envío</h2>
          </li>

          <li>
            <label htmlFor="address">
              Dirección
          </label>
            <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="city">
              Ciudad
          </label>
            <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="postalCode">
              Código postal
          </label>
            <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="country">
              País
          </label>
            <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
            </input>
          </li>


          <li>
            <button type="submit" className="button primary">Continuar</button>
          </li>

        </ul>
      </form>
    </div>
  </div>

}
export default ShippingScreen;