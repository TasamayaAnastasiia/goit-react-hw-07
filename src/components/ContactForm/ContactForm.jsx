import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { nanoid } from '@reduxjs/toolkit';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
 
const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const phoneFieldId = nanoid();

    const handleSubmit = (values, actions) => {
		const newContact = { id: values.id, name: values.username, number: values.phone };
        dispatch(addContact(newContact));
		actions.resetForm();
	};

    const FeedbackMessage = Yup.object().shape({
        username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        phone: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
      });

    return (
        <Formik initialValues={{ username: "", phone: ""}} onSubmit={handleSubmit} validationSchema={FeedbackMessage}>
            <Form className={css.form}>

                <div className={css.boxInput}>
                    <Field type="text" name="username" className={css.myInput} id={nameFieldId} placeholder="Name"/>
                    <ErrorMessage style={ {fontSize: '13px'} } className={css.error} name="username" component="span"/>
                </div>
                <div className={css.boxInput}>
                    <Field type="phone" name="phone" className={css.myInput} id={phoneFieldId} placeholder="Number"/>
                    <ErrorMessage style={ {fontSize: '13px'} } className={css.error} name="phone" component="span"/>
                </div>

                <button className={css.butSubmit} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}
export default ContactForm;