import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import changePasswordStore from './auth/changePasswordStore'
import forgotPasswordStore from './auth/forgotPasswordStore'
import userStore from './userStore'
import dataRawStore from './dataRaw/dataRawStore'
import loginStore from './auth/loginStore'
import authStore from './auth/authStore'
import resetPasswordStore from './auth/resetPasswordStore'
import searchStore from './search/searchStore'
import registerStore from './auth/registerStore'
import registerVerificationStore from './auth/registerVerificationStore'
import resendVerificationStore from './auth/resendVerificationStore'
import verificationStore from './auth/verificationStore'
import sliderStore from './home/sliderStore'
import homeIntroStore from './home/homeIntroStore'
import testimonialStore from './home/testimonialStore'
import organizerStore from './organizer/organizerStore'
import createEventStore from './event/createEventStore'
import eventStore from './event/eventStore'

import articleStore from './content/articleStore'
import productStore from './product/productStore'
import categoryStore from './product/categoryStore'

export default combineReducers({
  form: formReducer,
  dataRawStore,
  changePasswordStore,
  forgotPasswordStore,
  userStore,
  authStore,
  loginStore,
  resetPasswordStore,
  registerStore,
  registerVerificationStore,
  resendVerificationStore,
  verificationStore,

  sliderStore,
  homeIntroStore,
  testimonialStore,

  createEventStore,
  eventStore,
  organizerStore,

  searchStore,
  // eventStore,
  articleStore,
  productStore,
  categoryStore
})
