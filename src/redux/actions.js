import axios from 'axios';
import {
  CREATE_POST,
  DELETE_POST,
  COMPLETE_POST,
  HIDE_ALERT,
  SHOW_ALERT,
  HIDE_LOADER,
  GET_DATA,
} from './types';

const URL = process.env.REACT_APP_URL;

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}
export function finishLoading() {
  return {
    type: HIDE_LOADER,
  };
}
export function createPost(post) {
  try {
    axios.post(`${URL}`, post);
  } catch (e) {
    showAlert('Data problems');
  }
  return {
    type: CREATE_POST,
    payload: post,
  };
}
export function deletePost(posts, id) {
  try {
    axios.delete(`${URL}/${id}`);
  } catch (e) {
    showAlert('Data problems');
  }
  return {
    type: DELETE_POST,
    payload: posts,
  };
}
export function completePost(posts, id, post) {
  try {
    axios.patch(`${URL}/${id}`, post);
  } catch (e) {
    showAlert('Data problems');
  }
  return {
    type: COMPLETE_POST,
    payload: posts,
  };
}

export function getData() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}`);
      const data = await response.data;
      dispatch({ type: GET_DATA, payload: data });
      dispatch(finishLoading());
    } catch (e) {
      showAlert('Data problems');
    }
  };
}
