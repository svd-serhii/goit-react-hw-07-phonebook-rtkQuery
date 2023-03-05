import ContactsList from '../ContactsList';
import Filter from '../Filter';
import styles from './App.module.css';
import CreateContact from 'components/Form/CreateContact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Phonebook</h1>
        <CreateContact />
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.wrap}>
          <Filter />
          <ContactsList />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
