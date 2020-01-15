import {
  apiCreateOrganizer
} from 'services/organizer/createOrganizerService'
import {
  uploadImage
} from 'actions/utils/imageUploadAction'
import {
  fetch,
  success,
  failed
} from 'actions/organizer/organizerAction'
import Router from 'next/router'

const insert = data => async (dispatch) => {
  try {
    dispatch(fetch())
    if (data && data.image) {
      data.image = await dispatch(uploadImage('organizer', data.image))
    }

    const response = await apiCreateOrganizer(data)
    if (response && response.success) {
      dispatch(success(response.meta))
      Router.push({
        pathname: `/organizer/detail/${response.data.id}`
      })
      return response.data
    }
    dispatch(failed(response))
    return {}
  } catch (error) {
    dispatch(failed(error))
    return {}
  }
}

export {
  insert
}
