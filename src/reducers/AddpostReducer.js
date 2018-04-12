import {ADD_POST} from '../actions/actionTypes';



const initialState = [
  {
    id: Math.random(),
    title: "This is first",
    content: "My name is Yauheni"
  },
]


export default function addPost(state=initialState,action) {
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
