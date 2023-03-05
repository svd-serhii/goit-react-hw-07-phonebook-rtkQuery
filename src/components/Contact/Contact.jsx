import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';
import { toast } from 'react-toastify';
import styles from './Contact.module.css';
import { LoaderSmall } from 'components/Loader/Loader';

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
        className={styles.btnList}
        type="button"
        onClick={() => deleteContact(contact.id)}
        disabled={isAdding}
      >
        {isAdding ? <LoaderSmall /> : 'Удалить'}
      </button>
    </li>
  );
};
