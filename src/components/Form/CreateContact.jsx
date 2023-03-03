import { useAddContactMutation } from 'redux/contacts/contacts-slice';
import { toast } from 'react-toastify';
import { ContactEditorForm } from './ContactEditorForm';

const CreateContact = () => {
  const [addContact] = useAddContactMutation();

  const handleAddContact = async values => {
    try {
      await addContact(values);
      console.log(values);
      toast.success('Contact added');
    } catch (error) {
      toast.error('Error on adding contact');
      console.log(error);
    }
    // need to add searching for duplicate.
  };

  return (
    <ContactEditorForm btnText="Add contact" onSubmit={handleAddContact} />
  );
};

export default CreateContact;
