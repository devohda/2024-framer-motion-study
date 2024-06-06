import Ball from './Ball';
import styles from './Title.module.css';

const Title = () => {
  return (
    <>
      <div className={styles['ball-container']}>
        <Ball />
      </div>
    </>
  );
};

export default Title;
