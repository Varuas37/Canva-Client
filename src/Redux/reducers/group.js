import { GET_GROUP, GET_GROUP_ERR, JOIN_GROUP, CLEAR_GROUP } from '../Action/types';

const initialState = {
	groups: [],
	group: [],
	loading: true,
	error: {},
};
export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_GROUP:
		case JOIN_GROUP:
			return {
				...state,
				group: payload,
				loading: false,
			};
		case GET_GROUP_ERR:
			return {
				...state,
				error: payload,
				loading: true,
			};

		case CLEAR_GROUP:
			return {
				...state,
				group: null,
				loading: true,
			};
		default:
			return state;
	}
}
