import {ADD_POST} from '../actions/actionTypes';


export default function addPost(state,action) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        action.data
      ]
    default:
      return state;
  }
}
