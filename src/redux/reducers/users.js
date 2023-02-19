import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_PENDING,
  GET_USERS_FULFILLED,
  GET_USERS_REJECTED,
} from "../actions";

const init = {
  loading: false,
  data: [],
  error: null,
};
export default function users(previousState = init, action) {
  switch (action.type) {
    case GET_USERS_START || GET_USERS_PENDING:
      return { ...previousState, loading: true, error: null };
    case GET_USERS_REJECTED:
      return { ...previousState, loading: false, error: action.payload };
    case GET_USERS_FULFILLED:
      return { ...previousState, loading: false, data: action.payload };
    case GET_USERS_SUCCESS:
      return { ...previousState, loading: false, data: action.data };
    case GET_USERS_FAIL:
      return { ...previousState, loading: false, error: action.error };

    default:
      return previousState;
  }
}
