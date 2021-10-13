import { useGetHistoryQuery } from "../services/covidApi";
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import Loader from './Loader.js';

const StatesDetail = () => {
    const{data:total,isFetching} = useGetHistoryQuery();
    const[stateDetail,setStateDetail] = useState(total?.data.statewise.slice(1));
    if(isFetching) return <Loader/>;
   
    return (
        <Row gutter={[16,16]}>
            {stateDetail?.map(({state,active,deltaconfirmed,deltadeaths,confirmed,deaths,recovered})=>(
                <Col xs={12} sm={6} lg={6} key={state}>
                    <Link to={`/${state}/${active}/${deltaconfirmed}/${deltadeaths}/${confirmed}/${deaths}/${recovered}`}>
                        <Card title={state} size="small" hoverable>
                        <div className="card-detail">
                         <p className="card-detail-heading">Active Cases</p>
                         <p>{active}</p>
                        </div>
                           
                        <div className="card-detail">
                         <p className="card-detail-heading">Today Confirm</p>
                         <p>{deltaconfirmed}</p>
                        </div>

                        <div className="card-detail">
                         <p className="card-detail-heading">Today Deaths</p>
                         <p>{deltadeaths}</p>
                        </div>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    )
}

export default StatesDetail;
