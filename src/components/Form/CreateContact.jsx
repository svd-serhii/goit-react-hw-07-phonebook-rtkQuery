import { useAddContactMutation } from 'redux/contacts/contacts-slice';
import { toast } from 'react-toastify';
import { ContactEditorForm } from './ContactEditorForm';
// import { useSelector } from 'react-redux';

const CreateContact = () => {
  const [addContact] = useAddContactMutation();
  // const contacts = useSelector(state => state.contacts);

  const handleAddContact = async values => {
    try {
      await addContact(values);
      console.log(values);
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
