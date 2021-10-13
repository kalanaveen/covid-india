import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({active, confirmed,deceased})=>{
    const data = {
        labels: [
          'Active',
          'Confirmed',
          'Deaths'
        ],
        datasets: [{
          label: 'People',
          data: [active, confirmed, deceased],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
    return(
        <div>
            <Doughnut data={data}/>
        </div>
    )
}
export default DoughnutChart;