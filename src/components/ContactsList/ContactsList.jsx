import { Contact } from 'components/Contact/Contact';
import { useGetContactsQuery } from 'redux/contacts/contacts-slice';
import { Loader } from 'components/Loader/Loader';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const {
    data: contacts,
    isLoading,
    isSuccess,
    isError,
  } = useGetContactsQuery();

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
        contacts.map(contact => <Contact key={contact.id} {...contact} />)}
    </ul>
  );
};

export default ContactsList;
