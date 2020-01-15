import {
  FETCH_CATEGORY,
  RECEIVE_CATEGORY,
  RECEIVE_ITEM_CATEGORY,
  FAILED_CATEGORY,
  UPDATE_STATE_CATEGORY
} from '../../actions/types'

const initialState = {
  loading: false,
  filter: {
    type: 'all',
    pageSize: 3
  },
  list: [
    {
      header: 'Al-Pandi Coorporate',
      date: '12 Nov',
      location: 'medan',
      country: 'Indonesia',
      city: 'medan',
      price: '300000',
      tickets: '1',
      time: '2019-12-20T13:16:30+07:00',
      content: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
      title: 'Medan International Coffee Festival',
      img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
      url: 'https://www.detik.com',
      text: 'spring',
      term: 1
    },
    {
      header: 'Al-Pandi Coorporate',
      date: '12 Nov',
      location: 'medan',
      country: 'Indonesia',
      city: 'medan',
      price: '300000',
      tickets: '1',
      time: '2019-12-20T13:16:30+07:00',
      content: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
      title: 'Medan International Coffee Festival',
      img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
      url: 'https://www.detik.com',
      text: 'spring',
      term: 2
    },
    {
      header: 'Al-Pandi Coorporate',
      date: '12 Nov',
      location: 'medan',
      country: 'Indonesia',
      city: 'medan',
      price: '300000',
      tickets: '1',
      time: '2019-12-20T13:16:30+07:00',
      content: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
      title: 'Medan International Coffee Festival',
      img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
      url: 'https://www.detik.com',
      text: 'spring',
      term: 1
    }
  ],
  currentItem: {
    header: 'Al-Pandi Coorporate',
    date: '12 Nov',
    location: 'medan',
    country: 'Indonesia',
    city: 'medan',
    price: '300000',
    tickets: '1',
    time: '2019-12-20T13:16:30+07:00',
    content: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    title: 'Medan International Coffee Festival',
    img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
    text: 'spring',
    term: 1
  },
  user: {
    header: 'Al-Pandi Coorporate',
    date: '12 Nov',
    location: 'medan',
    country: 'Indonesia',
    city: 'medan',
    price: '300000',
    tickets: '1',
    time: '2019-12-20T13:16:30+07:00',
    content: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    title: 'Medan International Coffee Festival',
    img: 'https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg',
    text: 'spring',
    term: 1,
    isGold: 1,
    organizeId: 1,
    expired: '30 days',
    organizer: [
      {
        facility: {
          name: 'Gold',
          expired: '2019-12-20T13:16:30+07:00'
        }
      }
    ],
    eventCount: 12,
    committeeCount: 12,
    organizerCount: 12
  },
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return Object.assign({}, state, {
        loading: true
      })
    case RECEIVE_CATEGORY:
      return Object.assign({}, state, {
        loading: false,
        list: action.payload.list,
        meta: action.payload.meta
      })
    case RECEIVE_ITEM_CATEGORY:
      return Object.assign({}, state, {
        loading: false,
        currentItem: action.payload.currentItem
      })
    case FAILED_CATEGORY:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload.error
      })
    case UPDATE_STATE_CATEGORY:
      return Object.assign({}, state, {
        ...action.payload
      })
    default:
      return state
  }
}
