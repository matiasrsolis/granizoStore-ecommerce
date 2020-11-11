import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';

function SigninScreen(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSingnin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSingnin;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/");
        }
        return() => {
            //
        };
    }, [userInfo]); 

    const submitHandler = (e) => {
        e.prevent.default();
        dispatch(signin(email, password));
    }
   
    return <div>
        <form onSubmit={submitHandler}>
            <ul>
                <h1>Iniciar sesión</h1>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                   <label htmlFor="email">Email</label>
                   <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input> 
                </li>
                <li>
                   <label htmlFor="password">Contraseña</label>
                   <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input> 
                </li>
                <li>
                    <button type="button">Ingresar</button>
                </li>
                <li>
                    ¿Primera vez por aquí?
                </li>
                <li>
                    <Link to="/register">¡Create una cuenta!</Link>
                </li>
            </ul>
        </form>
    </div>
    

    
}

export default SigninScreen;