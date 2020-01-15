const validate = ({
  oldPassword,
  password,
  confirmPassword,
  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
}) => {
  const errors = {
    oldPassword: '',
    password: '',
    confirmPassword: ''
  }

  errors.oldPassword = !oldPassword
    ? '* Required'
    : undefined

  errors.password = !password
    ? '* Required'
    : password.length < 6
      ? 'New Password min 6 character'
      : password.length > 30
        ? 'New Password max 30 character'
        : regexPassword.test(password)
          ? undefined
          : 'New Password must combine between uppercase, lowercase, and number'

  errors.confirmPassword = !confirmPassword
    ? '* Required'
    : confirmPassword !== password
      ? 'Confirm New password not equal to password'
      : undefined

  return errors
}

export default validate
