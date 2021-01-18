import { ADD_LIST, ADD_CARDS, REMOVE_CARDS, SORT_CARDS } from '../Action/types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	tasks: [
		{
			title: 'All Assignments',
			id: uuidv4(),
			cards: [
				{
					id: uuidv4(),
					text: 'We created a static list and static Card',
				},
				{
					id: uuidv4(),
					text: 'We are using React and Nodejs',
				},
			],
		},
		{
			title: 'Due Soon',
			id: uuidv4(),
			cards: [
				{
					id: uuidv4(),
					text: 'This will contain cards that are due soon',
				},
				{
					id: uuidv4(),
					text: 'Complete these as much as you can',
				},
				{
					id: uuidv4(),
					text: 'This will contain cards that are due soon',
				},
				{
					id: uuidv4(),
					text: 'Complete these as much as you can',
				},
			],
		},
		{
			title: 'Completed',
			id: uuidv4(),
			cards: [
				{
					id: uuidv4(),
					text: 'Drags the assignments that you completed',
				},
				{
					id: uuidv4(),
					text: 'Get points for completing each assingments',
				},
			],
		},
	],
	// tasks_loading: true,
};

export default function (state = initialState, action) {
	const { payload } = action;
	const { tasks } = state;
	switch (action.type) {
		case ADD_LIST: {
			const newList = {
				title: payload,
				id: uuidv4(),
				cards: [],
			};

			return {
				...state,
				tasks: tasks.concat(newList),
			};
		}
		case ADD_CARDS: {
			const newCard = {
				id: uuidv4(),
				text: payload.data,
			};

			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === payload.listID ? { ...task, cards: [...task.cards, newCard] } : task
				),
			};
		}
		case REMOVE_CARDS:
			return {
				user_todo_loading: true,
			};
		case SORT_CARDS: {
			const {
				droppableIdStart,
				droppableIdEnd,
				droppableIndexStart,
				droppableIndexEnd,
				type,
				//  draggableID
			} = payload;
			const newState = { ...state };

			//Dragging list around
			if (type === 'list') {
				const list = newState.tasks.splice(droppableIndexStart, 1);
				newState.tasks.splice(droppableIndexEnd, 0, ...list);
				return newState;
			}
			if (droppableIdStart === droppableIdEnd) {
				const list = state.tasks.find((task) => droppableIdStart === task.id);
				const card = list.cards.splice(droppableIndexStart, 1);
				list.cards.splice(droppableIndexEnd, 0, ...card);
			}
			if (droppableIdStart !== droppableIdEnd) {
				//Find the list where the drop happened
				const list = state.tasks.find((task) => droppableIdStart === task.id);
				// Pull out the card from that list
				const card = list.cards.splice(droppableIndexStart, 1);
				// Find the list where the drag ended
				const listEnd = state.tasks.find((task) => droppableIdEnd === task.id);
				// Put the card in the new list
				listEnd.cards.splice(droppableIndexEnd, 0, ...card);
			}
			return newState;
		}
		default:
			return state;
	}
}
