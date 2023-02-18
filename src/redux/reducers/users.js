import { GET_USERS_START, GET_USERS_SUCCESS, GET_USERS_FAIL } from "../actions";

const init = {
  loading: false,
  data: [],
  error: null,
};
export default function users(previousState = init, action) {
  switch (action.type) {
    case GET_USERS_START:
      return { ...previousState, loading: true, error: null };
    case GET_USERS_SUCCESS:
      return { ...previousState, loading: false, data: action.data };
    case GET_USERS_FAIL:
      return { ...previousState, loading: false, error: action.error };
    default:
      return previousState;
  }
}
