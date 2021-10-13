import { Typography,Row,Col,Statistic } from "antd";
import millify from 'millify';
import Linegraph from "./Linegraph";
import { useGetHistoryQuery } from "../services/covidApi";
import StatesDetail from "./StatesDetail";
import Loader from './Loader.js';


const Homepage = () => {
    const {Title} = Typography;
    const{data:total,isFetching} = useGetHistoryQuery();
    if(isFetching) return <Loader/>;
    
    const newData = total?.data?.statewise[0];
    
    return (
        <>
        <div className="homepage">
            <div className="main-total">
                <Title level={1} className="main-heading">India Coronavirus</Title>
                <Row gutter={[32,32]}>
                    <Col span={12}>
                        <Statistic title="Total Confirmed" value={millify(newData.confirmed)}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="Total Deaths" value={millify(newData.deaths)}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="Total Recovered" value={millify(newData.recovered)}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="Today Confirmed" value={millify(newData.deltaconfirmed)}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="Today Deaths" value={millify(newData.deltadeaths)}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="Today Recovered" value={millify(newData.deltarecovered)}/>
                    </Col>
                </Row>
            </div>
            <div className="graph-line">
                <Linegraph total={total}/>
            </div>
        </div>
        <div className="states-heading">
                <Title level={2} className="states-title">States Of India</Title>
            </div>
            <StatesDetail/>
        </>
    )
}

export default Homepage;
