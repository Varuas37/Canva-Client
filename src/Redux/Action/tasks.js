import { ADD_LIST, ADD_CARDS, REMOVE_CARDS, TASK_ERR } from './types';
import { setAlert } from './alert';

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
			payload: {listID, data},
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
