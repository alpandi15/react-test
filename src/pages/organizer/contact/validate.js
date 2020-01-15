const validate = ({
  account,
  regexEmail = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}) => {
  const errors = {
    account: ''
  }

  errors.account = !account
    ? '* Required'
    : account.length < 6
      ? 'Email min 6 character'
      : account.length > 60
        ? 'Email max 60 character'
        : regexEmail.test(String(account).toLowerCase())
          ? undefined
          : 'Tolong masukkan email yang benar.'

  return errors
}

export default validate
