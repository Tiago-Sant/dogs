import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import UseForm from '../../Hooks/UseForm';
import { UserContext } from '../../UserContext';
import ErrorMessage from '../Helper/ErrorMessage';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';

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
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <Link to="/login/create">Cadastro</Link>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        {error && <ErrorMessage error={error} />}
        {isLoading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
      </form>
      <Link className={styles.forgot} to="/login/forgot">
        Perdeu a Senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/create">
          Cadastro
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
