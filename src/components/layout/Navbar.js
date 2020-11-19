import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Button, Row, Col, Layout } from "antd";

import { Icon } from '@iconify/react';
import bxlLinkedin from '@iconify/icons-bx/bxl-linkedin';
import bxlGooglePlus from '@iconify/icons-bx/bxl-google-plus';
import bxlFacebook from '@iconify/icons-bx/bxl-facebook';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header } = Layout;

const Navbar = () => {
  const [fullNavbar, setFullNavbar] = useState(false);
  
  const location = useLocation();
  console.log("react-router-dom", location.pathname);

  useEffect(() => {
    if(location.pathname == "/"){
      setFullNavbar(true);
    }else{
      setFullNavbar(false);
    }
  }, [location])

  const style = {
    header: {
      height: fullNavbar ? "180px" : "80px"
    },
    menu: {
      borderBottom: "none",
    },
    submenu: {
    },
    navbarInfo: fullNavbar ? "": {display: 'none'},
    navbarMenu: fullNavbar ? {padding: '25px 5vw'} : {padding: '0 5vw'},
  };

  return (
    <Header style={style.header}>
    <div className="header">
      <Row style={style.navbarInfo} className="header-information">
        <Col span={12} className="header-top-left">
          <Icon className="header-icon-sn" icon={bxlLinkedin} />&nbsp;&nbsp;
          <Icon className="header-icon-sn" icon={bxlGooglePlus} />&nbsp;&nbsp;
          <Icon className="header-icon-sn" icon={bxlFacebook} />&nbsp;&nbsp;
        </Col>
        <Col span={12} className="header-top-right">
          <Row>
            <Col span={10}>
              <img className="header-contact-link" src="/header-contact-1.png" alt="header-contact" />
            </Col>
            <Col span={8}>
              <img className="header-contact-link" src="/header-contact-2.png" alt="header-contact" />
            </Col>
            <Col className="center" span={6}>
              <Row >
                <img className="header-language" src="/header-language.png" alt="el" />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={style.navbarMenu} justify="space-between">
        <Col xs={6} lg={6} className="logo">
          <Link to="/">
            <img width="auto" height="60px" src="/logo-ttglobal.jpg" />
          </Link>
        </Col>
        <Col xs={6} lg={12}>
          <Menu
            mode="horizontal" style={style.menu}
            overflowedIndicator={
              <MenuUnfoldOutlined
                style={{fontSize: '20px', color: '#DA3849'}}
              />
            }
          >
            <Menu.Item>
              <Link to="/">
                Home
              </Link>
            </Menu.Item>
            <SubMenu title="Product" style={style.submenu} onTitleClick={() => window.location.href = '/product'}>

              <Menu.Item>
                <Link to="/product/1">
                  KyO Gloves
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/product/2">
                  Mask N95
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/product/3">
                  <p>Medical Mask 4 Grade</p>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/product/4">
                  Medical Mask 3 Grade
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item>
              <Link to="/service">
                Services
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/about-us">
                About us
          </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col xs={0} lg={6} className="header-contact-button">
          <Link to="/contact">
            <Button size="large" danger>Contact us</Button>
          </Link>
        </Col>
      </Row>
    </div>
    </Header>
  )
};
export default Navbar;