import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
const { Title } = Typography;

const Linegraph = (total) => {
    
    const dailyConfirm = [];
    const dailyTimeStamp = [];
    const dailyDeaths = [];
    const dailyRecover = [];
    for(let i= 0;i < total?.total?.data.cases_time_series?.length;i+=1){
        dailyConfirm.push(total?.total?.data.cases_time_series[i].dailyconfirmed);
    }
    for(let i =0;i< total?.total?.data.cases_time_series?.length;i+=1){
        dailyDeaths.push(total?.total?.data.cases_time_series[i].dailydeceased);
    }
    
    for(let i=0;i<total?.total?.data.cases_time_series?.length;i+=1){
        dailyRecover.push(total?.total?.data.cases_time_series[i]?.dailyrecovered);
    }

    for(let i= 0;i < total?.total?.data.cases_time_series?.length;i+=1){
        dailyTimeStamp.push(total?.total?.data.cases_time_series[i].dateymd);
    }
  
    const data = {
        labels:dailyTimeStamp,
        datasets: [
          {
            label: 'Daily Confirm Cases',
            data: dailyConfirm,
            fill: false,
            borderColor: '#0071bd',
            backgroundColor:'#0071bd',
          },
          {
            label: 'Daily Recover',
            data: dailyRecover,
            fill: false,
            borderColor: 'green',
            backgroundColor:'green',
          },
        ], 
      };

      const options={
          scales:{
              yAxes:[
                  {
                      ticks:{
                          beginAtZero:true,
                      },
                  },
              ],
          },
      };
    return (
        <>
           <Title level={2} className="chart-title">Covid 19 Chart</Title>
            <Line data={data} options={options}/>
        </>
    )
}

export default Linegraph
