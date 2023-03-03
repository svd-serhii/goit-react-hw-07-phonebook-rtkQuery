import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.LoaderContainer}>
      <RotatingLines
        strokeColor="#3194d1"
        strokeWidth="5"
        animationDuration="0.75"
        width="30"
        visible={true}
      />
    </div>
  );
}

export default Loader;
