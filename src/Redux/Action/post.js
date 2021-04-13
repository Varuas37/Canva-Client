import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  SAVE_POST,
  REPORT_POST,
  CATEGORIZE_ERR,
  ADD_COMMENT,
  REMOVE_COMMENT,
  GET_COMMENTS,
  COMMENT_ERR,
  UPDATE_LIKES_ERROR,
  SERVER_DOMAIN,
} from "./types";

// Get posts by group id
export const getPosts = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${SERVER_DOMAIN}/api/post/feed/${id}`);
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response,
    });
  }
};
// Add a post to a group.
export const addPost = (post, id, tags, groupID) => async (dispatch) => {
  try {
    const body = {
      text: post,
      postTo: id,
      groupID: groupID,
      tags: tags,
      privacy: false,
      status: "student",
    };
    const res = await axios.post(`${SERVER_DOMAIN}/api/post/`, body);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
    dispatch(setAlert("Post Created"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`${SERVER_DOMAIN}/api/post/${id}`);
    dispatch({
      type: DELETE_POST,
    });
    dispatch(setAlert("Post Deleted"));
  } catch (err) {
    dispatch(setAlert("Error Deleting Post"));
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const params = {
      parentType: "post",
    };
    const res = await axios.put(
      `${SERVER_DOMAIN}/api/post/like/${id}`,
      params
    );
    dispatch({
      type: UPDATE_LIKES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_LIKES_ERROR,
      payload: err.response,
    });
    dispatch(setAlert("Couldn't Like Post"));
  }
};

export const savePost = (id, groupID) => async (dispatch) => {
  try {
    const params = {
      type: "save",
      groupID: groupID,
    };
    const res = await axios.put(
      `${SERVER_DOMAIN}/api/post/categorize/${id}`,
      params
    );
    
    dispatch({
      type: SAVE_POST,
      payload: res.data,
    });
    return res;
  } catch (err) {
    dispatch({
      type: CATEGORIZE_ERR,
      payload: err.response,
    });
    dispatch(setAlert("Error Saving Post"));
  }
};
export const reportPost = (id, groupID) => async (dispatch) => {
  try {
    const params = {
      type: "report",
      groupID: groupID,
    };
    const res = await axios.put(
      `${SERVER_DOMAIN}/api/post/categorize/${id}`,
      params
    );
    dispatch({
      type: REPORT_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORIZE_ERR,
      payload: err.response,
    });
    dispatch(setAlert("Error Reporting Posts"));
  }
};
//Get comments for a specific post
export const getComments = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${SERVER_DOMAIN}/api/post/comment/${id}`);
    dispatch({
      type: GET_COMMENTS,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response,
    });
    dispatch(setAlert("Error Loading Comments"));
  }
};

//Add a comment
export const addComment = (id, text) => async (dispatch) => {
  try {
    const params = {
      text: text,
    };

    const res = await axios.post(
      `${SERVER_DOMAIN}/api/post/comment/${id}`,
      params
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    dispatch({
      type: COMMENT_ERR,
      payload: err.response,
    });
    dispatch(setAlert("Error adding Comments"));
  }
};

//Delete comments
export const deleteComment = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${SERVER_DOMAIN}/api/post/comment/${id}`
    );
    dispatch({
      type: REMOVE_COMMENT,
      payload: res.data.msg,
    });

    return res.data;
  } catch (err) {
    dispatch({
      type: COMMENT_ERR,
      payload: err.response,
    });
    dispatch(setAlert("Comment could not be deleted"));
  }
};

export const likeComment = (id) => async (dispatch) => {
  try {
    const params = {
      parentType: "comment",
    };
    const res = await axios.put(
      `${SERVER_DOMAIN}/api/post/like/${id}`,
      params
    );
    return res.data;
  } catch (err) {
    dispatch({
      type: UPDATE_LIKES,
      payload: err.response,
    });
    dispatch(setAlert("Couldn't Like Comment"));
  }
};
