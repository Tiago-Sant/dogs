import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';
import Loading from './Loading';
import PropTypes from 'prop-types';

function ProtectedRoute({ children }) {
  const { login } = useContext(UserContext);

  if (login === null) return <Loading />;

  return login ? children : <Navigate to="/login" />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
