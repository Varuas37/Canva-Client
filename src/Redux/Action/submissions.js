import axios from "axios";
import {
  GET_SUBMISSIONS,
  ERR_GET_SUBMISSIONS,
  POST_CANVAS_COMMENT,
  POST_CANVAS_COMMENT_ERR,
  SERVER_DOMAIN,
} from "./types";
import { setAlert } from "./alert";

// gets the submissions.
export const getSubmissions = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${SERVER_DOMAIN}/api/canvas/submissions/${id}`
    );
    dispatch({
      type: GET_SUBMISSIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Error Getting Submissions", "red"));
    dispatch({
      type: ERR_GET_SUBMISSIONS,
    });
  }
};

export const postSAPComments = (data) => async (dispatch) => {
  try {
    await axios.post(
      `${SERVER_DOMAIN}/api/canvas/submissions/SAPComments`,
      data
    );
    dispatch({
      type: POST_CANVAS_COMMENT,
    });
    dispatch(setAlert("SAP UserIDs assigned", "red"));
  } catch (err) {
    dispatch(setAlert("Error Posting Comments", "red"));
    dispatch({
      type: POST_CANVAS_COMMENT_ERR,
    });
  }
};
