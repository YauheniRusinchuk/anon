import {ADD_POST} from '../actions/actionTypes';



const initialState = [

]


export default function addPost(state=initialState,action) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          id: Math.random(),
          title: action.data.title,
          content: action.data.content
        }
      ]
    default:
      return state;
  }
}
