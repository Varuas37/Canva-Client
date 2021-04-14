import {
  UPLOAD_FILE,
  UPLOAD_ERR,
  DOWNLOAD_FILE,
  LIST_ALL_FILES,
  LIST_ALL_FILES_ERR,
  UPLOAD_SUBMISSIONS,
  GET_PLAGARISED_STUDENT_NAME,
} from "../Action/types";

const initialState = {
  files: null,
  uploading: true,
  downloading: true,
  error: {},
  submission_uploaded: false,
  uploaded_file_data: null,
  plagarised: [],
  plagarised_list_loaded: false,
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
    case LIST_ALL_FILES:
      return {
        ...state,
        files: payload,
        downloading: false,
      };
    case LIST_ALL_FILES_ERR:
      return {
        ...state,
        error: payload,
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
    case UPLOAD_SUBMISSIONS:
      return {
        ...state,
        submission_uploaded: true,
        uploaded_file_data: payload,
      };
    case GET_PLAGARISED_STUDENT_NAME:
      return {
        ...state,
        plagarised: payload,
        plagarised_list_loaded: true,
      };

    default:
      return state;
  }
}
