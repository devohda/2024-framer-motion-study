import styles from './Header.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles['container']}>
        <div className={styles['info-text']}>
          ZERO STUDIOS is an integrated creative agency.
        </div>

        <div className={styles['menu']}>
          <div className={styles['menu-top']}>
            <div className={styles['menu_contact']}>contact</div>
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
