import React, { useState } from 'react';
import { loginAction } from '../../actions/login/loginAction';
import Login  from '../../components/login/login';

const LoginPage = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const handleOnChaneUserId = (e) => {
        setUserId(e.target.value);        
    }
    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);        
    }
    const handleSignIn = () => {
        loginAction(userId, password);        
    }

    return (
        <>
        <Login
          userId={userId}
          password={password}
          handleOnChaneUserId={handleOnChaneUserId}
          handleOnChangePassword={handleOnChangePassword}
          handleSignIn={handleSignIn}
         />
        </>
    )
}

export default LoginPage