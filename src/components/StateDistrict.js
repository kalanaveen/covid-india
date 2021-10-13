import {useParams} from "react-router-dom";
import { useGetHistoryQuery,useGetDistrictsQuery } from "../services/covidApi";
import BarChart from "./BarChart";
import {useState} from 'react';
import { Typography,Row,Col,Statistic,Card } from "antd";
import {Link} from 'react-router-dom';
import millify from 'millify';
import Loader from './Loader.js';

const StateDistrict = ()=>{
    const {Title} = Typography;
    const {states,active,todayconfirm,todaydeaths,totalconfirm,totaldeaths,totalrecover} = useParams();
    const {data,isFetching} = useGetDistrictsQuery();
    if(isFetching) return <Loader/>;
    const index = Object.keys(data.data).indexOf(states);
    const newData = Object.entries(data.data)[index][1].districtData;
   const DistrictData = () =>{
       return(
           <Row gutter = {[16,16]}>
                {Object.entries(newData).map(([key,{active,confirmed,deceased,delta}])=>(
                    <Col xs={12} sm={6} lg={6} key={key}>
                        <Link to={`/${key}/${active}/${confirmed}/${deceased}`}>
                        <Card title={key} size="small" hoverable>
                        <div className="card-detail">
                         <p className="card-detail-heading">Active Cases</p>
                         <p>{active}</p>
                        </div>
                           
                        <div className="card-detail">
                         <p className="card-detail-heading">Today Confirm</p>
                         <p>{delta.confirmed}</p>
                        </div>

                        <div className="card-detail">
                         <p className="card-detail-heading">Today Deaths</p>
                         <p>{delta.deceased}</p>
                        </div>
                        </Card>
                        </Link>
                    </Col>
                ))}
           </Row>
       )
   }
   
    const NoneData = ()=>{
        return(
            <div>
                <h1>No Data Available</h1>
            </div>
        )
    }

    return(
        <>
        <div className="homepage">
            <div className="main-total">
                <Title level={1} className="main-heading">{states}</Title>
                <Row gutter={[32,32]}>
                    <Col span={12}>
                        <Statistic title="Total Confirmed" value={millify(totalconfirm)}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="Total Deaths" value={millify(totaldeaths)}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="Total Recovered" value={millify(totalrecover)}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="Today Confirmed" value={millify(todayconfirm)}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="Today Deaths" value={millify(todaydeaths)}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="Active Cases" value={millify(active)}/>
                    </Col>
                </Row>
            </div>
            <div className="graph-line">
              <BarChart totalconfirm={totalconfirm} totaldeaths={totaldeaths} totalrecover={totalrecover} states={states}/>
            </div>
        </div>
        <div>
            {Object.entries(data.data)[index][0]===states?<DistrictData/>:<NoneData/>}
        </div>
        </>
        
    )
}

export default StateDistrict;