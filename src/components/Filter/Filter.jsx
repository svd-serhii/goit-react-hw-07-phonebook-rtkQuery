import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={styles.labelFilter}>
      Find contacts by name
      <input
        className={styles.inputFilter}
        type="text"
        id="search"
        onChange={changeFilter}
        placeholder="Enter name here"
      />
    </label>
  );
};

export default Filter;
