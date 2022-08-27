import {
  ADD_PLACE,
  DELETE_PLACE,
  CLEAR_COUNT_PLACE,
} from "../actions/placeAction";

const placeReducer = (state = { count: 0, list: [] }, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        count: state.count + 1,
        list: [...state.list, action.payload],
      };
    case DELETE_PLACE:
      return {
        ...state,
        list: state.list.filter((data) => data.place_id != action.payload.place_id),
      };
    case CLEAR_COUNT_PLACE:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default placeReducer;
