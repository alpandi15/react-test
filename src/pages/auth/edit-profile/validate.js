const validate = ({
  firstName,
  lastName
}) => {
  const errors = {
    firstName: '',
    lastName: ''
  }

  errors.firstName = !firstName
    ? '* Required'
    : firstName.length < 1
      ? 'First Name min 1 character'
      : firstName.length > 60
        ? 'First Name max 60 character'
        : undefined

  errors.lastName = !lastName
    ? '* Required'
    : lastName.length < 1
      ? 'Last Name min 1 character'
      : lastName.length > 60
        ? 'Last Name max 60 character'
        : undefined

  return errors
}

export default validate
