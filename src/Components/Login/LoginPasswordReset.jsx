import React, { useEffect } from 'react';
import useForm from '../../Hooks/useForm';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useFetch from '../../Hooks/useFetch';
import ErrorMessage from '../Helper/ErrorMessage';
import { PASSWORD_RESET } from '../../Api';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

function LoginPasswordReset() {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm('');
  const { error, loading, request } = useFetch('');
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!password.validate()) return;

    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (response.ok) navigate('/login');
  }
  return (
    <div>
      <Head title="Resete a Senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          name="password"
          type="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
        <ErrorMessage error={error} />
      </form>
    </div>
  );
}

export default LoginPasswordReset;
