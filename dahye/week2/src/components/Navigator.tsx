import { Link } from 'react-router-dom';
import styles from './Navigator.module.css';

const Navigator = () => {
  return (
    <div className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <Link to="/page3">Page3</Link>
      <Link to="/page4">Page4</Link>
    </div>
  );
};

export default Navigator;
