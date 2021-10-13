import { Typography, Row, Col,Card } from 'antd';
import {useGetCovidNewsQuery} from '../services/covidNewsApi';
import Loader from './Loader';
import moment from 'moment';

const { Text, Title } = Typography;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = () => {
    const{data,isFetching} = useGetCovidNewsQuery();
    if(isFetching) return <Loader/>;

    return (
        <Row gutter={[24,24]}>
        {data?.articles.map((news,i)=>(
            <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className="news-card">
                   <a href={news.link} target="_blank" rel="noreferrer">
                     
                       <div className="news-image-container">
                           <Title className="news-title" level={4}>{news.title}</Title>
                           <img src={news?.media|| demoImage} alt="news image" className="image"/>
                       </div>
                       <p>{news?.summary.substr(0,150)}</p>
                       <div className="provider-container">
                           <Text>{moment(news?.published_date).startOf('ss').fromNow()}</Text>
                       </div>
                   </a>
                </Card>
            </Col>
        ))}
    </Row>
    )
}

export default News;
