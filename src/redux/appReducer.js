import { SHOW_ALERT, HIDE_ALERT, HIDE_LOADER } from './types';

const initialState = {
  alert: null,
  loading: true,
};
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}
