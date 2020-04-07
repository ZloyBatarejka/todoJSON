import { CREATE_POST, DELETE_POST, COMPLETE_POST, GET_DATA } from './types';

const initialState = {
  todo: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, todo: action.payload };
    case CREATE_POST:
      return { ...state, todo: [...state.todo, action.payload] };
    case DELETE_POST:
      return { ...state, todo: action.payload };
    case COMPLETE_POST:
      return { ...state, todo: action.payload };
    default:
      return state;
  }
};
