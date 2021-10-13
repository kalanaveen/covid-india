import { Button, Menu, Typography } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import covid from '../image/covid.png'
const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Link to="/">
                    <img src={covid} width={200} className="imageConatiner"/>
                </Link>
            </div>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/states">States</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar;
