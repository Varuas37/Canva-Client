import axios from "axios";
import {setAlert} from "./alert";
import { ADD_LIST, ADD_CARDS, REMOVE_CARDS, TASK_ERR, SORT_CARDS,ADD_BOARD, BOARD_ERR,GET_BOARDS } from './types';


export const addBoard = (data) => async (dispatch) => {
	try {
		console.log("I am inside addBoard"+data);
		const res = await axios.post('http://localhost:3300/api/boards',data)

		dispatch({
			type: ADD_BOARD,
			payload: res.data,
		});
	} catch (err) {
		dispatch(setAlert('Error', `Error Creating Board`, 'error', 'fas fa-exclamation-circle'));
		dispatch({
			type: BOARD_ERR,
		});
	}
};

export const getBoards = () => async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:3300/api/boards')
		console.log("This is data from getBoards action"+res.data);
		dispatch({
			type: GET_BOARDS,
			payload: res.data,
		});
	} catch (err) {
		dispatch(setAlert('Error', `Error Fetching Boards`, 'error', 'fas fa-exclamation-circle'));
		dispatch({
			type: BOARD_ERR,
		});
	}
};



export const addList = (data) => async (dispatch) => {
	try {
		dispatch({
			type: ADD_LIST,
			payload: data,
		});
	} catch (err) {
		dispatch(setAlert('Error', `Error Creating List`, 'error', 'fas fa-exclamation-circle'));
		dispatch({
			type: TASK_ERR,
		});
	}
};

export const addCards = (listID, data) => async (dispatch) => {
	try {
		dispatch({
			type: ADD_CARDS,
			payload: { listID, data },
		});
	} catch (err) {
		dispatch(setAlert('Error', `Error adding tasks`, 'error', 'fas fa-exclamation-circle'));
		dispatch({
			type: TASK_ERR,
		});
	}
};

export const removeCards = (id) => async (dispatch) => {
	try {
		dispatch({
			type: REMOVE_CARDS,
			payload: id,
		});
	} catch (err) {
		dispatch(setAlert('Error', `Error adding tasks`, 'error', 'fas fa-exclamation-circle'));
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
