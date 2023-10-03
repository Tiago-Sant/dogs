import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

function UserHeaderNav() {
  const { logout } = useContext(UserContext);
  const [isMobile, setIsMobile] = React.useState(null);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login');
  }
  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end>
        <MyPhotos />
        {isMobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/account/stats">
        <Stats />
        {isMobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/account/post">
        <AddPhoto />
        {isMobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={handleLogout}>
        <Logout />
        {isMobile && 'Sair'}
      </button>
    </nav>
  );
}

export default UserHeaderNav;
