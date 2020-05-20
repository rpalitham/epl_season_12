import { GET_CHART_DATA } from "../constants";
import { dataStructuring } from "../../Utilities/dataStructuring";
import colorCodes from "../../Utilities/colorCodes.json";

export const getChartData = () => {
  return async (dispatch) => {
    try {
      let data = dataStructuring();
      let chartData = data.map((team, index) => {
        return {
          ...team,
          label: team.name,
          data: [
            {
              x: team.won,
              y: team.lost,
              r: team.goalsScored,
            },
          ],
          backgroundColor: `#${
            colorCodes[index % (colorCodes.length - 1)].code
          }`,
        };
      });
      dispatch({ type: GET_CHART_DATA, chartData });
    } catch (err) {
      console.log(err);
    }
  };
};
