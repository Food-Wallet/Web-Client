import {Line} from "react-chartjs-2";
import chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';
chart.register(CategoryScale);

function SalesChart() {
  const data = {
    labels: ["1월 19일", "1월 20일", "1월 21일", "1월 22일", "1월 23일", "1월 24일", "1월 25일"],
    datasets: [{
      label: '일일 매출',
      data: [1000000, 3000000, 5000000, 2000000, 4000000, 5000000, 3000000],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.5
    }]
  };

  return (
    <Line data={data}/>
  );
}

export default SalesChart;