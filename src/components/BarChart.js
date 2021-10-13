import { Bar } from 'react-chartjs-2';

const BarChart = ({totalconfirm,totaldeaths,totalrecover,states}) => {
    
    const data = {
    labels: ['Confirmed','Recovered','Deaths'],
    datasets: [
            {
                label: 'People',
                backgroundColor:['#7aeffa','#64f586','#f57764'],
                data:[totalconfirm,totalrecover,totaldeaths]
            },
        ]
    }
    return (
        <Bar data={data} options={{
            title: {
                display: true,
                text:`${states} Results`,
                fontSize: 20
            },
            legend: {
                display: true,
                position: 'right'
            }
        }} 
	/>
    )
}

export default BarChart;