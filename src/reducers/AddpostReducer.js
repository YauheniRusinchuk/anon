import {ADD_POST} from '../actions/actionTypes';



const initialState = [

]

function makeCounter() {
  let currentCount = 1;

  return function() {
    return currentCount++;
  };
}

let counter = makeCounter();


export default function addPost(state=initialState,action) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          id: counter(),
          title: action.data.title,
          content: action.data.content
        }
      ]
    default:
      return state;
  }
}
