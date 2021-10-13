import { Navbar, Homepage, StateDistrict,StatesDetail,CityDistrict,News } from './components';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';

const { Title } = Typography;

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/states">
                <StatesDetail/>
              </Route>
              <Route exact path="/:states/:active/:todayconfirm/:todaydeaths/:totalconfirm/:totaldeaths/:totalrecover">
                <StateDistrict/>
              </Route>
              <Route exact path="/:key/:active/:confirmed/:deceased">
                <CityDistrict/>
              </Route>
              <Route exact path = "/news">
                <News/>
              </Route>
            </Switch>
          </div>
          <div className="footer">
          <Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            <Link to="/">
              Covid India Inc.
            </Link><br />
            All Rights Reserved
          </Title>
          <Space>
            <Link to="/">HOME</Link>
            <Link to="/states">STATES</Link>
            <Link to="/news">NEWS</Link>
          </Space>
        </div>
        </Layout>
         </div>
    </div>
  );
}

export default App;
