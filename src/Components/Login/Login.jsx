import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';

function Login() {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="register" element={<LoginCreate />} />
        <Route path="forgot" element={<LoginPasswordLost />} />
        <Route path="reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
