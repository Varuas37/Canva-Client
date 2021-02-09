import axios from 'axios';

import { setAlert } from './alert';
import { JOIN_GROUP, GET_GROUP_ERR } from './types';

export const joinGroup = (name, id, status) => async (dispatch) => {
	try {
		console.log('I am in join group 🧑🏼‍🎄  ');
	
		const params = {
			groupName: name,
			groupID: id,
			status: status,
			
		};

		const res = await axios.post('http://localhost:3300/api/groups/join', params);
		console.log('I am in join group 🧑🏼‍🎄  ');
	
		dispatch({
			type: JOIN_GROUP,
			payload: res.data,
		});
		dispatch(setAlert('Group Joined'));
	} catch (err) {
		dispatch({
			type: GET_GROUP_ERR,
			payload: { msg: err, status: err.response.status },
		});
		dispatch(setAlert(err.err));
	}
};

export const getGroup = (id) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		const res = await axios.get(`http://localhost:3300/api/groups/${id}`, config);

		dispatch({
			type: JOIN_GROUP,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: GET_GROUP_ERR,
			payload: { msg: err },
		});
		dispatch(setAlert('Error Getting Group Data'));
	}
};
