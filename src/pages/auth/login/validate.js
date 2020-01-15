const validate = ({
  email,
  password
}) => {
  const errors = {
    email: '',
    password: ''
  }

  errors.email = !email
    ? '* Required'
    : email.length < 6
      ? 'Email min 6 character'
      : email.length > 60
        ? 'Email max 60 character'
        : undefined

  errors.password = !password
    ? '* Required'
    : password.length < 6
      ? 'Password min 6 character'
      : password.length > 30
        ? 'Password max 30 character'
        : undefined

  return errors
}

export default validate
