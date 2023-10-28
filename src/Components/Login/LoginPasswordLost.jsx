import React from 'react';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useFecth from '../../Hooks/useFetch';
import ErrorMessage from '../Helper/ErrorMessage';
import { PASSWORD_LOST } from '../../Api';

function LoginPasswordLost() {
  const login = useForm();
  const { data, error, loading, request } = useFecth('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (!login.validate()) return;

    const { url, options } = PASSWORD_LOST({
      login: login.value,
      url: window.location.href.replace('forgot', 'reset'),
    });

    request(url, options);
  }
  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data && !Array.isArray(data) ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" name="email" type="text" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar E-mail</Button>
          )}
          <ErrorMessage error={error} />
        </form>
      )}
    </section>
  );
}

export default LoginPasswordLost;
