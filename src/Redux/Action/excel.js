import axios from 'axios';
import { setAlert } from './alert';
import { SUBMIT_UPLOAD, UPLOAD_ERR, UPLOAD_FILE } from './types';

export const uploadFile = (formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};
		// let fd = new FormData();
		// fd.append('fileName', formData[0]);
		const res = await axios.post('http://localhost:3300/api/files/upload', formData);
		dispatch({
			type: UPLOAD_FILE,
			payload: res.data,
		});
		dispatch(setAlert('File Uploaded'));
	} catch (err) {
		dispatch({
			type: UPLOAD_ERR,
			payload: { msg: err.response.msg, status: err.response.status },
		});
		dispatch(setAlert("Couldn't upload file"));
	}
};
