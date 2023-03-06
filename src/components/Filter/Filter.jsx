import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/filter/filter-slice';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  // console.log(filter);
  const dispatch = useDispatch();

  return (
    <label className={styles.labelFilter}>
      Find contacts by name
      <input
        className={styles.inputFilter}
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        placeholder="Enter name here"
      />
    </label>
  );
};

export default Filter;
