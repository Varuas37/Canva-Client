import {UPLOAD_FILE,UPLOAD_ERR,DOWNLOAD_FILE } from "../Action/types";

const initialState = {
  files: null,
  uploading: true,
  downloading: true,
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPLOAD_FILE:
      return {
        ...state,
        files: payload,
        uploading: false,
      };
    case UPLOAD_ERR:
      return {
        ...state,
        error: payload,
        uploading: false,
      };
    case DOWNLOAD_FILE:
      return {
        ...state,
        files: payload,
        downloading: false,
      };
    default:
      return state;
  }
}
