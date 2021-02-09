import axios from "axios";
import { setAlert } from "./alert";
import {
  ADD_LIST,
  ADD_CARDS,
  REMOVE_CARDS,
  TASK_ERR,
  SORT_CARDS,
  ADD_BOARD,
  BOARD_ERR,
  GET_BOARDS,
  GET_BOARD,
  DELETE_BOARD,
  GET_LISTS,
  GET_CARDS,
} from "./types";

export const addBoard = (title) => async (dispatch) => {
  try {
    
    const body = {
      title: title,
    };
    const res = await axios.post("http://localhost:3300/api/boards", body);

    dispatch({
      type: ADD_BOARD,
      payload: res.data,
    });
  } catch (err) {
    dispatch(
      setAlert(
        "Error",
        `Error Creating Board`,
        "error",
        "fas fa-exclamation-circle"
      )
    );
    dispatch({
      type: BOARD_ERR,
    });
  }
};

export const getBoards = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3300/api/boards");
    dispatch({
      type: GET_BOARDS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(
      setAlert(
        "Error",
        `Error Fetching Boards`,
        "error",
        "fas fa-exclamation-circle"
      )
    );
    dispatch({
      type: BOARD_ERR,
    });
  }
};
export const getBoard = (id) => async (dispatch) => {
  try {
    const header = {
      "Content-Type": "application/json",
      boardId: id,
    };
    const res = await axios.get(
      `http://localhost:3300/api/boards/${id}`,
      header
    );
    dispatch({
      type: GET_BOARD,
      payload: res.data,
    });
  } catch (err) {
    dispatch(
      setAlert(
        "Error",
        `Error Fetching Boards`,
        "error",
        "fas fa-exclamation-circle"
      )
    );
    dispatch({
      type: BOARD_ERR,
    });
  }
};

export const deleteBoard = (id) => async (dispatch) => {
  try {
    const header = {
      "Content-Type": "application/json",
      boardId: id,
    };
    const res = await axios.delete(
      `http://localhost:3300/api/boards/${id}`,
      header
    );
    
    dispatch({
      type: DELETE_BOARD,
      payload: res.data,
    });
    dispatch(setAlert("Delete", `Board Deleted`, "success", "fas fa-trash"));
    //TODO: Push to boards
  } catch (err) {
    
    dispatch(
      setAlert(
        "Error",
        `Error Fetching Boards`,
        "error",
        "fas fa-exclamation-circle"
      )
    );
    dispatch({
      type: BOARD_ERR,
    });
  }
};

export const addList = (id, title) => async (dispatch) => {
  try {
    const header = {
      boardId: id,
    };
    const body = {
      title: title,
    };
    const res = await axios.post(`http://localhost:3300/api/lists`, body, {
      headers: header,
    });
    dispatch({
      type: ADD_LIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch(
      setAlert(
        "Error",
        `Error Creating List`,
        "error",
        "fas fa-exclamation-circle"
      )
    );
    dispatch({
      type: TASK_ERR,
    });
  }
};

export const getLists = (id) => async (dispatch) => {
  try {
    const header = {
      boardId: id,
    };
    const res = await axios.get(
      `http://localhost:3300/api/lists/boardLists/${id}`,
      header
    );
    dispatch({
      type: GET_LISTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(
      setAlert(
        "Error",
        `Error Creating List`,
        "error",
        "fas fa-exclamation-circle"
      )
    );
    dispatch({
      type: TASK_ERR,
    });
  }
};

export const addCards = (boardID, listID, title) => async (dispatch) => {
  try {
    const header = {
      boardId: boardID,
    };
    const body = {
      title: title,
      listID: listID,
    };
    
    const res = await axios.post(`http://localhost:3300/api/cards`, body, {
      headers: header,
    });
    dispatch({
      type: ADD_CARDS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(
      setAlert(
        "Error",
        `Error adding tasks`,
        "error",
        "fas fa-exclamation-circle"
      )
    );
    dispatch({
      type: TASK_ERR,
    });
  }
};

export const getCards = (listID,boardID)=>async (dispatch)=>{
  try{
    const header = {
      boardId:boardID
    };
    const res = await axios.get(`http://localhost:3300/api/cards/listCards/${listID}`,header)
    dispatch({
      type:GET_CARDS,
      payload:res.data,
    })
    return res.data;
  }catch(err){
    dispatch({
      type:TASK_ERR
    })
  }
}



export const removeCards = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_CARDS,
      payload: id,
    });
  } catch (err) {
    dispatch(
      setAlert(
        "Error",
        `Error adding tasks`,
        "error",
        "fas fa-exclamation-circle"
      )
    );
    dispatch({
      type: TASK_ERR,
    });
  }
};

export const sortCards = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableID,
  type
) => async (dispatch) => {
  dispatch({
    type: SORT_CARDS,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableID,
      type,
    },
  });
};
