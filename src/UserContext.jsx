import React, { createContext, useCallback } from 'react';
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from './api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserStorege = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const getUser = async (token) => {
    setIsLoading(true);
    setError(null);
    try {
      const { url, options } = GET_USER(token);
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
      setLogin(true);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setIsLoading(true);

      const { url, options } = TOKEN_POST({
        username,
        password,
      });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('Usuário ou senha inválidos!');
      const { token } = await response.json();
      localStorage.setItem('token', token);
      getUser(token);
      setLogin(true);
      navigate('/conta');
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = useCallback(async () => {
    setData(null);
    setError(null);
    setLogin(false);
    setIsLoading(false);
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setIsLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) throw new Error('Token inválido!');

          await getUser(token);
        } catch (error) {
          logout();
        } finally {
          setIsLoading(false);
        }
      }
    }
    autoLogin();
  }, [logout]);
  return (
    <UserContext.Provider
      value={{ data, login, userLogin, isLoading, error, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
