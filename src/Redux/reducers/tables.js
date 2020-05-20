import * as constants from "../constants";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.GET_TABLE_DATA:
      return action.data;

    default:
      return state;
  }
}
