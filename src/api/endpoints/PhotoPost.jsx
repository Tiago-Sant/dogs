import React from 'react';

function PhotoPost() {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);
    formData.append('img', img);

    const response = await fetch(
      'https://dogsapi.origamid.dev/json/api/photo',
      {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      },
    );

    console.log(response);

    const data = await response.json();

    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={{ border: 'none' }}>
        <input
          type="text"
          value={token}
          placeholder="token"
          onChange={({ target }) => setToken(target.value)}
        />
      </fieldset>
      <fieldset style={{ border: 'none' }}>
        <input
          type="text"
          value={nome}
          placeholder="nome"
          onChange={({ target }) => setNome(target.value)}
        />
      </fieldset>

      <fieldset style={{ border: 'none' }}>
        <input
          type="text"
          value={peso}
          placeholder="peso"
          onChange={({ target }) => setPeso(target.value)}
        />
      </fieldset>

      <fieldset style={{ border: 'none' }}>
        <input
          type="text"
          value={idade}
          placeholder="idade"
          onChange={({ target }) => setIdade(target.value)}
        />
      </fieldset>
      <fieldset style={{ border: 'none' }}>
        <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      </fieldset>
      <button>Enviar</button>
    </form>
  );
}

export default PhotoPost;
