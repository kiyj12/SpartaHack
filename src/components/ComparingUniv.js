import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables, scales } from 'chart.js';
import { Chart } from 'react-chartjs-2'


export default function ComparingUniv(props) {

  const univ1 = props.univ1;
  const univ2 = props.univ2;
  const attr = props.attr;

  const univ1_2017 = require("../data/" + univ1 + "/" + univ1 + "_" + "2017" + ".json");

  const univ1_2019 = require("../data/" + univ1 + "/" + univ1 + "_" + "2019" + ".json");

  const univ1_2021 = require("../data/" + univ1 + "/" + univ1 + "_" + "2021" + ".json");

  const univ2_2017 = require("../data/" + univ2 + "/" + univ2 + "_" + "2017" + ".json");

  const univ2_2019 = require("../data/" + univ2 + "/" + univ2 + "_" + "2019" + ".json");

  const univ2_2021 = require("../data/" + univ2 + "/" + univ2 + "_" + "2021" + ".json");

  let univ1_data = []
  let univ2_data = []

  if (attr == "Tuition") {
    univ1_data = [univ1_2017.Tuition, univ1_2019.Tuition, univ1_2021.Tuition]
    univ2_data = [univ2_2017.Tuition, univ2_2019.Tuition, univ2_2021.Tuition]
  }
  if (attr == "Acceptance Rate") {
    univ1_data = [Math.round(univ1_2017.Accepted_Number/univ1_2017.Applied_Number * 10000) / 100, Math.round(univ1_2019.Accepted_Number/univ1_2019.Applied_Number * 10000) / 100, Math.round(univ1_2021.Accepted_Number/univ1_2021.Applied_Number * 10000) / 100]
    univ2_data = [Math.round(univ2_2017.Accepted_Number/univ2_2017.Applied_Number * 10000) / 100, Math.round(univ2_2019.Accepted_Number/univ2_2019.Applied_Number * 10000) / 100, Math.round(univ2_2021.Accepted_Number/univ2_2021.Applied_Number * 10000) / 100]
  }
  if (attr == "Graduation Rate") {
    univ1_data = [Math.round(univ1_2017.Graduation_graduated / univ1_2017.Graduation_in_Program * 100), Math.round(univ1_2019.Graduation_graduated / univ1_2019.Graduation_in_Program * 100), Math.round(univ1_2021.Graduation_graduated / univ1_2021.Graduation_in_Program * 100)]
    univ2_data = [Math.round(univ2_2017.Graduation_graduated / univ2_2017.Graduation_in_Program * 100), Math.round(univ2_2019.Graduation_graduated / univ2_2019.Graduation_in_Program * 100), Math.round(univ2_2021.Graduation_graduated / univ2_2021.Graduation_in_Program * 100)]
  }

  const univ1_color = univ1_2021.ColorCode;
  const univ2_color = univ2_2021.ColorCode;

  const data = {
    labels: [2017, 2019, 2021],
    datasets: [{
      label: univ1,
      fill: false,
      lineTension: 0.1,
      backgroundColor: univ1_color,
      borderColor: univ1_color,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: univ1_color,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: univ1_color,
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: univ1_data
      
    },{
      label: univ2,
      fill: false,
      lineTension: 0.1,
      backgroundColor: univ2_color,
      borderColor: univ2_color,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: univ2_color,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: univ2_color,
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: univ2_data
    }]
  }
  ChartJS.register(...registerables);
  console.log(univ1_data);
  return (
    <div className="ComparingUniv_Container">
      <div className="Comparing_graph">
        <Line 
          data={data}
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}