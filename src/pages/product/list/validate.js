const validate = ({
  query
}) => {
  const errors = {
    query: ''
  }

  errors.query = !query
    ? 'Required'
    : undefined

  return errors
}

export default validate
