import { useAddContactMutation } from 'redux/contacts/contacts-slice';
import { toast } from 'react-toastify';
import { ContactEditorForm } from './ContactEditorForm';
import { useSelector } from 'react-redux';

const CreateContact = () => {
  const [addContact] = useAddContactMutation();
  const contacts = useSelector(state => state.contacts);
  // console.log(contacts);

  const handleAddContact = async values => {
    try {
      await addContact(values);

      toast.success('Contact added');
    } catch (error) {
      toast.error('Error on adding contact');
      console.log(error);
    }
  };

  return (
    <ContactEditorForm btnText="Add contact" onSubmit={handleAddContact} />
  );
};

export default CreateContact;

// const normalizedName = values.name.toLowerCase();
// const normalizedPhone = values.phone.toLowerCase();
// if (
//   contacts.find(contact => normalizedName === contact.name.toLowerCase())
// ) {
//   return toast.error(`${values.name} is already in contacts`);
// }

// const contactNumber = contacts.find(
//   contact => normalizedPhone === contact.phone.toLowerCase()
// );
// if (contactNumber) {
//   return toast.error(
//     `${values.phone} is already belong to ${contactNumber.name}`
//   );
// }
