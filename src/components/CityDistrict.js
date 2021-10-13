import {useParams} from "react-router-dom";
import { Typography,Row,Col,Statistic} from "antd";
import millify from 'millify';
import DoughnutChart from './DoughnutChart.js';

const CityDistrict = ()=>{
    const {Title} = Typography;
    const {key,active,confirmed,deceased} = useParams();
    return(
        <div className="homepage">
            <div className="main-total">
                <Title level={1} className="main-heading">{key}</Title>
                <Row gutter={[48,48]}>
                    <Col span={8}>
                        <Statistic title="Total Confirmed" value={millify(confirmed)}/>
                    </Col>
                    <Col span={8}>
                        <Statistic title="Total Deaths" value={millify(deceased)}/>
                    </Col>
                    <Col span={8}>
                        <Statistic title="Active Cases" value={millify(active)}/>
                    </Col>
                </Row>
            </div>
            <div className="graph-line">
              <DoughnutChart active={active} confirmed={confirmed} deceased={deceased}/>
            </div>
        </div>
    )
}
export default CityDistrict;