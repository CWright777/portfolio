//import {
//} from '../actions/delimiters/types';

const defaultState = {
}

export default function delimiter(state = defaultState, action) {
  switch (action.type) {
    case 'SENT_REQUEST_PENDING':
      return Object.assign({}, state, {
        isFetching: true,
      })
    default:
      return state;
  }
}
