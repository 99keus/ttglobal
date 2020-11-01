import React from 'react';
import { Link, Router } from 'react-router-dom';
import { Menu, Button, Row, Col } from "antd";

import { Icon } from '@iconify/react';
import bxlLinkedin from '@iconify/icons-bx/bxl-linkedin';
import bxlGooglePlus from '@iconify/icons-bx/bxl-google-plus';
import bxlFacebook from '@iconify/icons-bx/bxl-facebook';
const { SubMenu } = Menu;

const style = {
  color: '#4F4F4F',
}

const Navbar = () => {
  return (
    <div className="header">
      <Row className="header-information">
        <Col span={12} className="header-top-left">
          <Icon className="header-icon-sn" icon={bxlLinkedin} />&nbsp;&nbsp;
          <Icon className="header-icon-sn" icon={bxlGooglePlus} />&nbsp;&nbsp;
          <Icon className="header-icon-sn" icon={bxlFacebook} />&nbsp;&nbsp;
        </Col>
        <Col span={12} className="header-top-right">
          <Row>
            <Col span={10}>
              {/* <Row>
              <Col span={6}>
              <img src="/header-icon-contact.png" alt="contact" />
              </Col>
              <Col span={18}>
                <p>Contact Support</p>
                <a href="#">vpdd.ttglobal@gmail.com</a>
              </Col>
            </Row> */}
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
      <Row justify="space-between" className="header-navbar">
        <Col xs={6} lg={6} className="logo">
          <Link to="/">
            <img src="/logo-main.png" />
          </Link>
        </Col>
        <Col xs={6} lg={12}>
          <Menu mode="horizontal" style={style.menu}>
            <Menu.Item>
              <Link to="/">
                Home
          </Link>
            </Menu.Item>
            <SubMenu title="Product" onTitleClick={() => window.location.href = '/product'}>

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
  )
};
export default Navbar;