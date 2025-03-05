import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import Buttons from "../Buttons/Buttons";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const nameFieldId = nanoid(10);
  const numberFieldId = nanoid(10);

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.contactForm}>
          <div className={css.formItem}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.formField}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage name="name" component="span" />
          </div>
          <div className={css.formItem}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={css.formField}
              type="text"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage name="number" component="span" />
          </div>
          <div className={css.btn}>
            <Buttons type="submit" tag="Add contact" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
