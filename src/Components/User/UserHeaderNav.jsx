import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

function UserHeaderNav() {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const [isMenuMobileOpen, setIsMenuMobileOpen] = React.useState(false);
  const isMobile = useMedia('(max-width: 40rem)');
  function handleLogout() {
    logout();
    navigate('/login');
  }

  const { pathname } = useLocation();

  React.useEffect(() => {
    setIsMenuMobileOpen(false);
  }, [pathname]);
  return (
    <>
      {isMobile && (
        <button
          aria-label="Menu"
          onClick={() => setIsMenuMobileOpen(!isMenuMobileOpen)}
          className={`${styles.mobileButton} ${
            isMenuMobileOpen && styles.mobileButtonActive
          }`}
        ></button>
      )}

      <nav
        className={`${isMobile ? styles.navMobile : styles.nav} ${
          isMenuMobileOpen && styles.navMobileActive
        }`}
      >
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
    </>
  );
}

export default UserHeaderNav;
