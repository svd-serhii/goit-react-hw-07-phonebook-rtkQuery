import { Contact } from 'components/Contact/Contact';

import styles from './ContactsList.module.css';

const ContactsList = ({ items, ...otherProps }) => {
  return (
    <ul className={styles.contactsList}>
      {items.map(item => (
        <li key={item.id} className={styles.contactItem}>
          <Contact item={item} {...otherProps} />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
