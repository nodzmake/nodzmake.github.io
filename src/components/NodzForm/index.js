import { ErrorMessage, Field, Form, Formik } from 'formik'

const NodzForm = ({ initialValues, handleSubmit, validateForm }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor='num'>Num:</label>
          <Field type='number' id='num' name='num' />
          <ErrorMessage name='num' component='div' />
        </div>

        <button type='submit'>Gen</button>
      </Form>
    </Formik>
  )
}

export default NodzForm
