const validate = ({
  password,
  confirmPassword,
  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
}) => {
  const errors = {
    password: '',
    confirmPassword: ''
  }

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
