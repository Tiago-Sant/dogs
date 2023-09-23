import React, { useContext } from 'react';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import { USER_POST } from '../../Api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import ErrorMessage from '../Helper/ErrorMessage';

function LoginRegister() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.validate() && !email.validate() && !password.validate())
      return;

    const { url, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value,
    });

    const { response } = await request(url, options);

    if (!response.ok) return;

    userLogin(username.value, password.value);
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Email" name="email" type="email" {...email} />
        <Input label="Senha" name="password" type="password" {...password} />
        <Button disabled={loading}>
          {loading ? 'Carregando...' : 'Cadastrar'}
        </Button>
        <ErrorMessage error={error} />
      </form>
    </section>
  );
}

export default LoginRegister;
