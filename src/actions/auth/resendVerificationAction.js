import { resendVerificationCode } from '../../services/auth/verificationService'
import {
  FETCH_REGISTER,
  RECEIVE_REGISTER,
  FAILED_RESEND_VERIFICATION
} from '../types'

const fetch = () => {
  return {
    type: FETCH_REGISTER
  }
}

const receive = ({ data, meta }) => {
  return {
    type: RECEIVE_REGISTER,
    payload: {
      data,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_RESEND_VERIFICATION,
    payload: {
      errorMessage: error.message
    }
  }
}

const resendVerification = data => async (dispatch) => {
  const response = await resendVerificationCode(data)
  try {
    dispatch(fetch())
    if (response.success) {
      console.log('response', response)
      dispatch(receive({ ...response }))
    } else {
      console.log('failed', response)
      dispatch(failed(response))
    }
  } catch (error) {
    dispatch(failed(error))
  }
}

export {
  resendVerification
}
