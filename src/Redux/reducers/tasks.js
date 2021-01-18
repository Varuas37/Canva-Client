import { ADD_LIST, ADD_CARDS, REMOVE_CARDS } from '../Action/types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	tasks: [
		{
			title: 'All Assignments',
			id: 0,
			cards: [
				{
					id: 0,
					text: 'We created a static list and static Card',
				},
				{
					id: 1,
					text: 'We are using React and Nodejs',
				},
			],
		},
		{
			title: 'Due Soon',
			id: 1,
			cards: [
				{
					id: 0,
					text: 'This will contain cards that are due soon',
				},
				{
					id: 1,
					text: 'Complete these as much as you can',
				},
				{
					id: 2,
					text: 'This will contain cards that are due soon',
				},
				{
					id: 3,
					text: 'Complete these as much as you can',
				},
				{
					id: 4,
					text: 'This will contain cards that are due soon',
				},
				{
					id: 5,
					text:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
				},
				{
					id: 6,
					text: 'This will contain cards that are due soon',
				},
				{
					id: 7,
					text: 'Complete these as much as you can',
				},
				{
					id: 8,
					text: 'This will contain cards that are due soon',
				},
				{
					id: 9,
					text: 'Complete these as much as you can',
				},
				{
					id: 10,
					text: 'This will contain cards that are due soon',
				},
				{
					id: 11,
					text: 'Complete these as much as you can',
				},
			],
		},
		{
			title: 'Completed',
			id: 2,
			cards: [
				{
					id: 0,
					text: 'Drags the assignments that you completed',
				},
				{
					id: 1,
					text: 'Get points for completing each assingments',
				},
			],
		},
	],
	// tasks_loading: true,
};

export default function (state = initialState, action) {
	const { payload, type } = action;
	const { tasks } = state;
	switch (type) {
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
		default:
			return state;
	}
}
