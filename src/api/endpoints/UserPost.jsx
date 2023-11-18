import React from 'react';

function UserPost() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(JSON.stringify({ username, password, email }));

    const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });

    console.log(response);

    const data = await response.json();

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

      <fieldset style={{ border: 'none' }}>
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </fieldset>
      <button>Enviar</button>
    </form>
  );
}

export default UserPost;
