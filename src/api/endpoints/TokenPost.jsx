import React from 'react';

function TokenPost() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      },
    );

    console.log(response);

    const data = await response.json();

    setToken(data.token);

    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={{ border: 'none' }}>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </fieldset>

      <fieldset style={{ border: 'none' }}>
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </fieldset>

      <button>Enviar</button>
      <p style={{ wordBreak: 'break-all' }}>{token}</p>
    </form>
  );
}

export default TokenPost;
