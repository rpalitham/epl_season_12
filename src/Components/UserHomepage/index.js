import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BubbleChart from "../BubbleChart";
import TableData from "../TableData";
import { getTableData } from "../../Redux/actions/tableData";
import { getChartData } from "../../Redux/actions/chartData";

class UserHomepage extends React.Component {
  componentDidMount() {
    this.props.getChartData();
    this.props.getTableData();
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Epl season 2012</h1>
        </header>
        {this.props.chartData.length && (
          <BubbleChart data={this.props.chartData} />
        )}
        {this.props.tableData && <TableData data={this.props.tableData} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chartData: state.chartData,
  tableData: state.tableData,
});

const mapDispatchToProps = (dispatch) => ({
  getChartData: bindActionCreators(getChartData, dispatch),
  getTableData: bindActionCreators(getTableData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHomepage);

// export default UserHomepage;
