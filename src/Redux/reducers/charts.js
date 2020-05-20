import * as constants from "../constants";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.GET_CHART_DATA:
      return action.chartData;

    default:
      return state;
  }
}
