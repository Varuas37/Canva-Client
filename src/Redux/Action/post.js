import axios from 'axios';
import { setAlert } from './alert';

import {
	GET_POSTS,
	POST_ERROR,
	UPDATE_LIKES,
	DELETE_POST,
	ADD_POST,
	GET_POST,
	ADD_COMMENT,
	REMOVE_COMMENT,
	GET_USERS_POSTS,
	UPDATE_LIKES_ERROR,
} from './types';

// Get posts by group id
export const getPosts = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`http://localhost:3300/api/post/feed/${id}`);
		dispatch({
			type: GET_POSTS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText },
		});
	}
};
// Add a post to a group. 
export const addPost = (post,id,tags,groupID) => async (dispatch) => {
	try {
        const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};
        const body = {
            text:post,
            postTo:id,
            groupID:groupID,
            tags:tags,
            privacy:false,
            status:"student"
        }
        const res = await axios.post(`http://localhost:3300/api/post/`,body);
        
		dispatch({
			type: ADD_POST,
			payload: res.data,
        });
        dispatch(setAlert("Post Created"));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText },
		});
	}
};


