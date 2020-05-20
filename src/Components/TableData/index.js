import React from "react";
import { Table } from "reactstrap";
import "./index.css";

class TableData extends React.Component {
  render() {
    let { data } = this.props;
    return (
      <div style={{ margin: "45px" }}>
        <h3>Table Data</h3>
        <Table striped responsive>
          <thead>
            <tr>
              <th>TEAMS</th>
              <th>Total Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Ties</th>
              <th>Total Goals Scored For</th>
              <th>Total Goals Scored Against</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team) => (
              <tr>
                <td>{team.name}</td>
                <td>{team.matches}</td>
                <td>{team.won}</td>
                <td>{team.lost}</td>
                <td>{team.tie}</td>
                <td>{team.goalsScored}</td>
                <td>{team.goalsGave}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableData;
