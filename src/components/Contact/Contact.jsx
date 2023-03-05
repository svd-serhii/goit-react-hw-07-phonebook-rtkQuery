import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';
import { toast } from 'react-toastify';
import styles from '../ContactsList/ContactsList.module.css';
import Loader from 'components/Loader/Loader';

export const Contact = contact => {
  const [deleteContact, { isLoading: isAdding, isSuccess }] =
    useDeleteContactMutation();

  if (isSuccess) {
    toast.info('Contact deleted');
  }

  return (
    <li className={styles.contactItem}>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <button
        type="button"
        onClick={() => deleteContact(contact.id)}
        disabled={isAdding}
      >
        {isAdding && <Loader width={'10'} />}
        Удалить
      </button>
    </li>
  );
};
