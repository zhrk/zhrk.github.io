import { SET_NAME } from '../actions/userActions';
import { SET_EMAIL } from '../actions/userActions';

const initialState = {
  name: 'Unknown',
  email: 'Unknown'
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {...state, name: action.payload}

    case SET_EMAIL:
      return {...state, email: action.payload}

    default:
      return state
  }
};