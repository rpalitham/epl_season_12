import { combineReducers } from "redux";
import chartReducer from "./charts";
import tableReducer from "./tables";

export default combineReducers({
  chartData: chartReducer,
  tableData: tableReducer,
});
