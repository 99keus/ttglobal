import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Row, Col, Divider } from "antd";

import { Icon, InlineIcon } from '@iconify/react';
import bxlLinkedin from '@iconify/icons-bx/bxl-linkedin';
import bxlGooglePlus from '@iconify/icons-bx/bxl-google-plus';
import bxlFacebook from '@iconify/icons-bx/bxl-facebook'; 
const {SubMenu} = Menu;

const Navbar = () => {
  return(
    <div className="header">
      <Row className="header-information"> 
        <Col span={12} className="header-top-left">
          <Icon className="header-icon-sn" icon={bxlLinkedin} />
          <Icon className="header-icon-sn" icon={bxlGooglePlus} />
          <Icon className="header-icon-sn" icon={bxlFacebook} />
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
            <img className="header-contact-link" src="header-contact-1.png" alt="header-contact"/>
          </Col>
          <Col span={8}>
            <img className="header-contact-link" src="header-contact-2.png" alt="header-contact"/>
          </Col>
          <Col className="center" span={6}>
            <Row >
              <img className="header-language" src="/header-language.png" alt="el"/>
            </Row>
          </Col>
          </Row>
        </Col>
      </Row>
      <Row className="header-navbar">
        <Col span={6} className="logo">
          {/* img */}
          <img src="/logo-main.png"/>
        </Col>
        <Col span={12}>
          <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/">
            Home
          </Link>
        </Menu.Item>
        <SubMenu title="Product">
          <Menu.Item>
            <Link to="/">
              
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">
              
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">
              
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">
              
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item>
          <Link to="/">
            Services
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">
            About us
          </Link>
        </Menu.Item>
      </Menu>
        </Col>
        <Col span={6} className="header-contact-button">
          <Button size="large" danger>Contact us</Button>
        </Col>
      </Row>
    </div>
    )
};
export default Navbar;