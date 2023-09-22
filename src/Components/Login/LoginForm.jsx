import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import UseForm from '../../Hooks/UseForm';
import { GET_USER, TOKEN_POST } from '../../api';
import { UserContext } from '../../UserContext';

function LoginForm() {
  const username = UseForm();
  const password = UseForm();

  const { userLogin, error, isLoading } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username.validate() || !password.validate()) return;

    await userLogin(username.value, password.value);
  };

  return (
    <section>
      <h1>Login</h1>
      <Link to="/login/create">Cadastro</Link>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        {error && <p className="error">{error}</p>}
        {isLoading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
      </form>
    </section>
  );
}

export default LoginForm;
