import React from 'react';

function PhotoGet() {
  const [id, setId] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://dogsapi.origamid.dev/json/api/photo/${id}`,
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
          value={id}
          placeholder="id"
          onChange={({ target }) => setId(target.value)}
        />
      </fieldset>
      <button>Enviar</button>
    </form>
  );
}

export default PhotoGet;
