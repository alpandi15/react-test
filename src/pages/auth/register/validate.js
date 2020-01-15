const validate = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  regexEmail = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
}) => {
  const errors = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  errors.email = !email
    ? '* Required'
    : email.length < 6
      ? 'Email min 6 character'
      : email.length > 60
        ? 'Email max 60 character'
        : regexEmail.test(String(email).toLowerCase())
          ? undefined
          : 'Tolong masukkan email yang benar.'

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

  errors.password = !password
    ? '* Required'
    : password.length < 6
      ? 'Password min 6 character'
      : password.length > 30
        ? 'Password max 30 character'
        : regexPassword.test(password)
          ? undefined
          : 'Password must combine between uppercase, lowercase, and number'

  errors.confirmPassword = !confirmPassword
    ? '* Required'
    : confirmPassword !== password
      ? 'Confirm password not equal to password'
      : undefined

  return errors
}

export default validate
