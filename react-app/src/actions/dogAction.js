import axios from "axios";

export const FETCH_DOG_FAILURE = "FETCH_DOG_FAILURE";
export const FETCH_DOG_SUCCESS = "FETCH_DOG_SUCCESS";
export const FETCH_DOG_IMAGE = "FETCH_DOG_IMAGE";

export const dogAction = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DOG_IMAGE });
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        console.log(res.data);

        dispatch({ type: FETCH_DOG_SUCCESS, payload: res.data.message });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_DOG_FAILURE,
          payload: `Error ${err.response.status}: ${err.response.data}`,
        });
      });
  };
};
