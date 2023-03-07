import { Contact } from 'components/Contact/Contact';
import { Loader } from 'components/Loader/Loader';
import styles from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilter } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactsSlice';

const ContactsList = () => {
  const {
    data: contacts,
    isLoading,
    isError,
    isSuccess,
  } = useGetContactsQuery();
  // console.log(contacts);

  const filter = useSelector(getFilter);
  console.log(filter);

  const searchContact = () => {
    if (!filter) {
      return contacts;
    }
    const normalize = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalize)
    );
  };

  const filteredContacts = searchContact();

  return (
    <ul className={styles.contactsList}>
      {isError && (
        <p>
          {' '}
          Oops! Something went wrong :( reboot the page and try again once.
        </p>
      )}
      {isLoading && <Loader />}
      {isSuccess &&
        filteredContacts.map(contact => (
          <Contact key={contact.id} {...contact} />
        ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
