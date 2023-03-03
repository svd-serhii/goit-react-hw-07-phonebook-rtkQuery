import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import styles from './Filter.module.css';

const Filter = () => {
  const filterRdx = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label className={styles.labelFilter}>
      Find contacts by name
      <input
        className={styles.inputFilter}
        type="text"
        value={filterRdx}
        onChange={({ currentTarget }) =>
          dispatch(setFilter(currentTarget.value))
        }
        placeholder="Enter name here"
      />
    </label>
  );
};

export default Filter;
