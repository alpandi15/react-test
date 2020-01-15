const validate = ({
  code
}) => {
  const errors = {
    code: ''
  }

  errors.code = !code
    ? '*'
    : code.length < 4
      ? 'Code min 4 character'
      : code.length > 4
        ? 'Code max 4 character'
        : undefined

  return errors
}

export default validate
