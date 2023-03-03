import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contactsOperations';

import styles from './ContactsList.module.css';

const ContactsList = () => {
  const contactsRdx = useSelector(state => state.contacts.items);
  const filterRdx = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const searchContact = () => {
    if (!filterRdx) {
      return contactsRdx;
    }
    const normalize = filterRdx.toLowerCase();
    return contactsRdx.filter(({ name }) =>
      name.toLowerCase().includes(normalize)
    );
  };

  const filteredList = searchContact();

  return (
    <ul className={styles.contactsList}>
      {filteredList.map(({ id, name, phone }) => (
        <li key={id} className={styles.contactItem}>
          <p className={styles.contact}>
            {name}: {phone}
          </p>
          <button
            className={styles.btnList}
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
