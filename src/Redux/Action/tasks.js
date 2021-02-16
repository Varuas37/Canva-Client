import axios from "axios";

import { setAlert } from "./alert";
import {
  ADD_LIST,
  ADD_CARDS,
  ARCHIVE_CARDS,
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

export const getCards = (listID, boardID) => async (dispatch) => {
  try {
    const header = {
      boardId: boardID,
    };
    const res = await axios.get(
      `http://localhost:3300/api/cards/listCards/${listID}`,
      header
    );
    dispatch({
      type: GET_CARDS,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    dispatch({
      type: TASK_ERR,
    });
  }
};

export const archiveCards = (boardID, id, condition) => async (dispatch) => {
  try {
    const header = {
      boardId: boardID,
    };
    const res = await axios.patch(
      `http://localhost:3300/api/archive/${condition}/${id}`,
      header
    );

    dispatch({
      type: ARCHIVE_CARDS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(
      setAlert(
        "Error",
        `Error archiving tasks`,
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
  boardID,
  type
) => async (dispatch) => {
  console.log("Droppable ID Start: 😎" + droppableIdStart);
  console.log("Droppable ID End: 😎" + droppableIdEnd);
  console.log("Droppable Index Start: 😎" + droppableIndexStart);
  console.log("Droppable Index End: 😎" + droppableIndexEnd);
  console.log("Draggable ID: 😎" + draggableID);
  console.log("boardID 😎" + boardID);
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
  if (type === "list") {
    const header = {
      boardId: boardID,
    };
    const body = {
      toIndex: droppableIndexEnd,
    };
    await axios.patch(
      `http://localhost:3300/api/lists/move/${draggableID}`,
      body,
      { headers: header }
    );
  } else {
    const header = {
      boardId: boardID,
    };
    const body = {
      fromId: droppableIdStart,
      toId: droppableIdEnd,
      toIndex: droppableIndexEnd,
    };
    await axios.patch(
      `http://localhost:3300/api/cards/move/${draggableID}`,
      body,
      { headers: header }
    );
  }
};
