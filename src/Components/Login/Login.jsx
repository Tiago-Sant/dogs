import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginRegister from './LoginRegister';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';
import NotFound from '../NotFound';

function Login() {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="register" element={<LoginRegister />} />
          <Route path="forgot" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
