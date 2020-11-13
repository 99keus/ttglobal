import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Divider } from 'antd';
const Footer = () => {
  return (
    <div className="footer-main">
      <Row>
        <Col xs={24} lg={10}>
          <b className="footer-title">Address</b>
          <p>
            T & T Global Producing Medical Equipment Factory<br/>
            Bau Bang Industrial Park, Lai Uyen Town, Bau Bang District, 
            Binh Duong Province
          </p>
        </Col>
        <Col xs={24} lg={4}>
          <b className="footer-title">Contact</b>
          <p>
            info@ttglobal.vn<br/>
            vpdd.ttglobal@gmail.com
          </p>
        </Col>
        <Col xs={0} lg={6}>
          <Link to="/product">
            <b className="footer-title">Products</b>
          </Link>
          <Row>
          <Col span={10}>
            <Link className="footer-link" to="/product/1">Kyo</Link><br/>
            <Link className="footer-link" to="/product/2">Mask N95</Link><br/>
          </Col>
          <Col span={14}>
            <Link className="footer-link" to="/product/3">Medical Mask 3 Grade</Link><br/>
            <Link className="footer-link" to="/product/4">Medical Mask 4 Grade</Link><br/>
          </Col>
          </Row>
        </Col>
        <Col xs={0} lg={4}>
          <Link to="/service">
            <b className="footer-title">Services</b>
          </Link>
          <p>
            Air Freight<br/>
            Ocean Freight<br/>
            Road Freight
          </p>
        </Col>
      </Row>
      <Divider style={{backgroundColor: "#E0E0E0"}}/>
      <Row>
        <Col xs={24} lg={18}>
          <img className="footer-logo" src="/footer-logo-partner-1.png"/>
          <img className="footer-logo" src="/footer-logo-partner-2.png"/>
          <img className="footer-logo" src="/footer-logo-partner-3.png"/>
          <img className="footer-logo" src="/footer-logo-partner-4.png"/>
          <img className="footer-logo" src="/footer-logo-partner-5.png"/>
          <img className="footer-logo" src="/footer-logo-partner-6.png"/>
          <img className="footer-logo" src="/footer-logo-partner-7.png"/>
          <img className="footer-logo" src="/footer-logo-partner-8.png"/>
        </Col>
        <Col className="footer-polices" xs={24} lg={6}>
          <b className="footer-title">Polices</b><br/>
          <Link to="/career" className="footer-link">Career &ensp;</Link>
          <Link to="" className="footer-link">Download Profile &ensp;</Link>
          <Link to="privacy" className="footer-link">Privacy Polices &ensp;</Link>
          <Link to="disclaimer" className="footer-link">Disclaimer &ensp;</Link>
          <Link to="factory" className="footer-link">Our Factory &ensp;</Link>
          <Link to="quality-assurance" className="footer-link">Quality Assurance &ensp;</Link>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col xs={24} lg={16}>
        <img className="footer-icon" src="/footer-twitter-icon.png"/>
        <img className="footer-icon" src="/footer-facebook-icon.png"/>
        <img className="footer-icon" src="/footer-instagram-icon.png"/>
        </Col>
        <Col style={{textAlign: "end"}} xs={24} lg={8}>
          <p>
          Copyright ©2020 All rights reserved
          </p>
        </Col>
      </Row>
    </div>
  )
};
export default Footer;