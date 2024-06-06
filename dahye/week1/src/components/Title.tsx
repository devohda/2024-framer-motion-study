import Ball from './Ball';
import styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles['title-container']}>
      <div className={styles['content-container']}>
        <div className={styles['ball-container']}>
          <Ball />
        </div>
        <div className={styles['zero-container']}>
          <span>Z</span>
          <span>E</span>
          <span>R</span>
          <span>O</span>
        </div>
      </div>
    </div>
  );
};

export default Title;
