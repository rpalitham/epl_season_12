import { GET_TABLE_DATA } from "../constants";
import { dataStructuring } from "../../Utilities/dataStructuring";

export const getTableData = () => {
  return async (dispatch) => {
    try {
      let data = dataStructuring();
      dispatch({ type: GET_TABLE_DATA, data });
    } catch (err) {
      console.log(err);
    }
  };
};
