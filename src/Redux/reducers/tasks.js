import {
  ADD_LIST,
  ADD_CARDS,
  REMOVE_CARDS,
  SORT_CARDS,
  ADD_BOARD,
  BOARD_ERR,
  GET_BOARDS,
  GET_BOARD,
  DELETE_BOARD,
  GET_LISTS,
  GET_CARDS,
} from "../Action/types";
// import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [
    // {
    //   title: "Todo",
    //   id: uuidv4(),
    //   cards: [
    //     {
    //       id: uuidv4(),
    //       title: "Connect to Backend",
    //   status:"incomplete",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Fix layout issue",
    //   status:"incomplete",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Add Card Details and Modal",
    //   status:"incomplete",
    //     },
    //   ],
    // },
  ],
  boards: [{}],
  board: null,
  cards: [{}],
  card: null,
  err: null,
  // tasks_loading: true,
};

export default function (state = initialState, action) {
  const { payload } = action;
  const { tasks, boards } = state;
  switch (action.type) {
    case ADD_BOARD: {
      const newBoard = payload;
      return {
        ...state,
        boards: boards.concat(newBoard),
      };
    }
    case GET_BOARDS: {
      return {
        ...state,
        boards: payload,
      };
    }
    case GET_BOARD: {
      return {
        ...state,
        board: payload,
      };
    }
    case DELETE_BOARD: {
      return {
        ...state,
        boards: boards.filter((item) => item._id !== payload._id),
      };
    }
    case BOARD_ERR: {
      return {
        ...state,
        err: payload,
      };
    }
    case ADD_LIST: {
      const newList = {
        title: payload.title,
        id: payload._id,
        cards: [],
      };

      return {
        ...state,
        tasks: tasks.concat(newList),
      };
    }
    case GET_LISTS: {
      
      var newTask = [];
      payload.map((task) => {

        const lists = {
          title: task.title,
          id: task._id,
          cards: task.cards
            ? task.cards
            : [],
        };
        newTask = newTask.concat(lists);
      });
      
   
      return {
        ...state,
        tasks: newTask,
      };
    }
    case ADD_CARDS: {
      const newCard = {
        _id: payload.card._id,
        title: payload.card.title,
      };

      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.listID
            ? { ...task, cards: [...task.cards, newCard] }
            : task
        ),
      };
    }
    case GET_CARDS: {
      return {
        ...state,
        cards: payload,
      };
    }
    case REMOVE_CARDS:
      return {
        ...state,
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
      if (type === "list") {
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
