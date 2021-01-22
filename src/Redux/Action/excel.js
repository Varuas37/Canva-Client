import axios from 'axios';

import { setAlert } from './alert';
import {
	DOWNLOAD_FILE,
	POST_FILES_ERR,
	UPLOAD_ERR,
	UPLOAD_FILE,
	DOWNLOAD_FILE_ERR,
	LIST_ALL_FILES,
	LIST_ALL_FILES_ERR,
	POST_FILES,
} from './types';

export const uploadFile = (formData) => async (dispatch) => {
	try {
	
		const res = await axios.post('http://localhost:3300/api/files/upload', formData);
		dispatch({
			type: UPLOAD_FILE,
			payload: res.data,
		});
		dispatch(setAlert('File Uploaded'));
	} catch (err) {
		dispatch({
			type: UPLOAD_ERR,
			payload: { msg: err, status: err.response.status },
		});
		dispatch(setAlert("Couldn't upload file"));
	}
};
export const getFiles = () => async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:3300/api/files/getFiles');
		dispatch({
			type: LIST_ALL_FILES,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: LIST_ALL_FILES_ERR,
			payload: err,
		});
		console.log(err);
	}
};

export const downloadFile = (formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		let fd = new FormData();
		fd.append('fileName', formData);

		const params = {
			fileName: `${formData}`,
		};

		const res = await axios.post(`http://localhost:3300/api/files/download`, params, config);
		dispatch({
			type: DOWNLOAD_FILE,
			payload: res.data,
		});
		dispatch(setAlert('File Downloaded!'));
	} catch (err) {
		dispatch({
			type: DOWNLOAD_FILE_ERR,
			payload: { msg: err, status: err.response.status },
		});
		dispatch(setAlert("Couldn't download file"));
	}
};
export const assignExcelFile = (formData, password, courseID,assignmentID) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const params = {
			fileName: `${formData}`,
			password: `${password}`,
			courseID: `${courseID}`,
			assignmentID: `${assignmentID}`,
		};

		const res = await axios.post(`http://localhost:3300/api/excel/`, params, config);
		dispatch({
			type: POST_FILES,
			payload: res.data,
		});
		dispatch(setAlert('Excel Files Assigned'));
	} catch (err) {
		dispatch({
			type: POST_FILES_ERR,
			payload: { msg: err, status: err.response.status },
		});
		dispatch(setAlert('Error Assigning Files'));
	}
};
