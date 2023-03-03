import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { useGetContactsQuery } from 'redux/contacts/contacts-slice';
import styles from './App.module.css';
import CreateContact from 'components/Form/CreateContact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

const App = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Phonebook</h1>
        <CreateContact />
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.wrap}>
          {error && (
            <p>
              Oops! Something went wrong :( reboot the page and try again once.
            </p>
          )}
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Filter />
              <ContactsList items={contacts} />
            </>
          )}
        </div>
      </div>
      <ToastContainer theme="colored" />
    </>
  );
};

export default App;
