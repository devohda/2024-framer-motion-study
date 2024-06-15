import { Link } from 'react-router-dom';
import styles from './Navigator.module.css';
import { FC } from 'react';

interface NavigatorProps {
  onClickLink: (page: string) => void;
}

const Navigator: FC<NavigatorProps> = ({ onClickLink }) => {
  return (
    <div className={styles.nav}>
      <Link to="/color/page1" onClick={() => onClickLink('/color/page1')}>
        Page1
      </Link>
      <Link to="/color/page2" onClick={() => onClickLink('/color/page2')}>
        Page2
      </Link>
      <Link to="/color/page3" onClick={() => onClickLink('/color/page3')}>
        Page3
      </Link>
    </div>
  );
};

export default Navigator;
