// import { useNavigate } from 'react-router-dom';
import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';
import { toast } from 'react-toastify';

export const Contact = ({ item }) => {
  //   const navigate = useNavigate();
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();
  if (isSuccess) {
    toast.success('Contact deleted');
  }

  return (
    <div>
      <p>
        {item.name}: {item.phone}
      </p>
      <button
        type="button"
        onClick={() => deleteContact(item.id)}
        disabled={isLoading}
      >
        Удалить
      </button>
    </div>
  );
};
