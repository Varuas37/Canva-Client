import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from "../Action/types";

const initialState = {
  name:null,
  post: null,
  comment:null,
  posts: [],
  comments:[],
  loading: true,
  members:null,
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };
    default:
      return state;
  }
}
