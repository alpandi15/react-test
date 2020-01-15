const validate = ({
  name,
  image,
  description,
  isPrivate,
  website
}) => {
  const errors = {
    name: '',
    image: '',
    description: '',
    isPrivate: '',
    website: ''
  }

  errors.name = !name
    ? '* Required'
    : name.length < 6
      ? 'Event name min 6 character'
      : name.length > 255
        ? 'Event name max 255 character'
        : undefined

  errors.isPrivate = isPrivate === undefined || isPrivate === null || isPrivate === ''
    ? '* Required'
    : undefined

  errors.image = !image
    ? '* Required'
    : undefined

  errors.description = !description
    ? '* Required'
    : description.length < 20
      ? 'Event description min 20 character'
      : undefined

  errors.website = website && website.length < 10
    ? 'Event description min 10 character'
    : undefined

  return errors
}

export default validate
