import {ADD_POST, ADD_COMMENT} from './actionTypes';


export function AddComment(data) {
  return {
    type: ADD_COMMENT,
    data
  }
}



export function AddPost(data) {
  return {
    type: ADD_POST,
    data
  }
}
