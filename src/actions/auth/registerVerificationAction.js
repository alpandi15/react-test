import Router from 'next/router'
import { verificationCode } from 'services/auth/verificationService'
// import { resendVerificationCode, viewVerification } from '../../services/auth/verificationService'
import {
  FETCH_REGISTER_VERIFICATION,
  RECEIVE_REGISTER_VERIFICATION,
  FAILED_REGISTER_VERIFICATION
} from '../types'

const fetch = () => {
  return {
    type: FETCH_REGISTER_VERIFICATION
  }
}

const receive = ({ data, meta }) => {
  return {
    type: RECEIVE_REGISTER_VERIFICATION,
    payload: {
      data,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_REGISTER_VERIFICATION,
    payload: {
      errorMessage: error.message
    }
  }
}

const onRegisterVerification = data => async (dispatch) => {
  dispatch(fetch())
  try {
    const response = await verificationCode(data)
    if (response.success) {
      dispatch(receive({ ...response }))
      Router.push({
        pathname: '/'
      })
    } else {
      dispatch(failed(response))
    }
  } catch (error) {
    dispatch(failed(error))
  }
}

export {
  onRegisterVerification
}
