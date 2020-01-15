const validate = ({
  name,
  categoryId,
  image,
  description,
  isRefundable,
  startDate,
  startTime,
  endDate,
  endTime,
  stageImage
}) => {
  const errors = {
    name: '',
    categoryId: '',
    image: '',
    description: '',
    isRefundable: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    stageImage: ''
  }

  errors.name = !name
    ? '* Required'
    : name.length < 6
      ? 'Event name min 6 character'
      : name.length > 30
        ? 'Event name max 30 character'
        : undefined

  errors.categoryId = !categoryId
    ? '* Required'
    : undefined

  errors.isRefundable = isRefundable === undefined || isRefundable === null || isRefundable === ''
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


  errors.startDate = !startDate
    ? '* Required'
    : undefined

  errors.startTime = !startTime
    ? '* Required'
    : undefined

  errors.endDate = !endDate
    ? '* Required'
    : undefined

  errors.endTime = !endTime
    ? '* Required'
    : undefined

  errors.stageImage = !stageImage
    ? '* Required'
    : undefined

  return errors
}

export default validate
