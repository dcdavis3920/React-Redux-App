import {
  FETCH_DOG_FAILURE,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_IMAGE,
} from "../actions/dogAction";

const initialState = {
  message: "",
  isFetching: false,
  error: "",
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_IMAGE:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_DOG_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: action.payload,
        error: "",
      };
    case FETCH_DOG_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
