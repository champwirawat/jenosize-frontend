export const ADD_PLACE = "ADD_PLACE";
export const DELETE_PLACE = "DELETE_PLACE";
export const CLEAR_COUNT_PLACE = "DELETE_PLACE";

export const addPlace = (payload) => ({
  type: ADD_PLACE,
  payload,
});

export const deletePlace = (payload) => ({
  type: DELETE_PLACE,
  payload,
});

export const clearCountPlace = () => ({
  type: CLEAR_COUNT_PLACE,
});
