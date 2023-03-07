import styles from './CreateContact.module.css';
import { Formik, Form, Field } from 'formik';
import { LoaderMiddle } from 'components/Loader/Loader';

export const ContactEditorForm = ({
  initialValues = { name: '', phone: '' },
  onSubmit,
  btnText,
}) => {
  const onHandleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onHandleSubmit}>
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.formContainer}>
            <label className={styles.formLabel}>
              Name
              <Field
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                className={styles.formInput}
                type="text"
                name="name"
                required
                placeholder="Input name of contact"
              />
            </label>

            <label className={styles.formLabel}>
              Number
              <Field
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                className={styles.formInput}
                type="tel"
                name="phone"
                required
                placeholder="Input telephone number"
              />
            </label>
            <button
              className={styles.formBtn}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && <LoaderMiddle />}
              {btnText}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
