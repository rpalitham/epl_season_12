import React from "react";
import Chart from "chart.js";

class BubbleChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    let chartData = this.props.data;
    this.myChart = new Chart(this.canvasRef.current, {
      type: "bubble",
      options: {
        maintainAspectRatio: false,
      },
      data: {
        datasets: chartData,
      },
    });
  }

  render() {
    return (
      <div style={{ margin: "45px" }}>
        <header>
          <h3>Bubble Chart</h3>
        </header>
        <canvas ref={this.canvasRef} height="300" />
      </div>
    );
  }
}

export default BubbleChart;
