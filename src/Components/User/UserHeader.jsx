import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const titles = {
  '/account': 'Minhas Fotos',
  '/account/stats': 'Estatísticas',
  '/account/post': 'Adicionar Foto',
};

function UserHeader() {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    setTitle(titles[location.pathname]);
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
