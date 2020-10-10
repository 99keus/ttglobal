import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Divider } from 'antd';
const Footer = () => {
  return (
    <div class="footer-main">
      <Row>
        <Col span={9}>
          <b className="footer-title">Address</b>
          <p>
            T & T Global Producing Medical Equipment Factory<br/>
            Bau Bang Industrial Park, Lai Uyen Town, Bau Bang District, 
            Binh Duong Province
          </p>
        </Col>
        <Col span={5}>
          <b className="footer-title">Contact</b>
          <p>
            info@ttglobal.vn<br/>
            vpdd.ttglobal@gmail.com
          </p>
        </Col>
        <Col span={6}>
          <b className="footer-title">Products</b>
          <Row>
          <Col span={10}>
            <Link className="footer-link" to="#">The World</Link><br/>
            <Link className="footer-link" to="#">Superieur GB</Link><br/>
            <Link className="footer-link" to="#">Kyo</Link><br/>
          </Col>
          <Col span={14}>
            <Link className="footer-link" to="#">Medical Mask 3 Grade</Link><br/>
            <Link className="footer-link" to="#">Medical Mask 4 Grade</Link><br/>
            <Link className="footer-link" to="#">Mask N95</Link><br/>
          </Col>
          </Row>
        </Col>
        <Col span={4}>
          <b className="footer-title">Services</b>
          <p>
            Air Freight<br/>
            Ocean Freight<br/>
            Road Freight
          </p>
        </Col>
      </Row>
      <Divider style={{backgroundColor: "#E0E0E0"}}/>
      <Row>
        <Col span={3}>
          <img className="footer-logo" src="/Footer-main-logo.png"/>
        </Col>
        <Col span={15}>
          <img className="footer-logo" src="/footer-logo-partner-1.png"/>
          <img className="footer-logo" src="/footer-logo-partner-2.png"/>
          <img className="footer-logo" src="/footer-logo-partner-3.png"/>
          <img className="footer-logo" src="/footer-logo-partner-4.png"/>
          <img className="footer-logo" src="/footer-logo-partner-5.png"/>
          <img className="footer-logo" src="/footer-logo-partner-6.png"/>
          <img className="footer-logo" src="/footer-logo-partner-7.png"/>
          <img className="footer-logo" src="/footer-logo-partner-8.png"/>
        </Col>
        <Col span={6}>
          <b className="footer-title">Polices</b><br/>
          <Link className="footer-link">Career &ensp;</Link>
          <Link className="footer-link">Download Profile &ensp;</Link>
          <Link className="footer-link">Privacy Polices &ensp;</Link>
          <Link className="footer-link">Disclaimer &ensp;</Link>
          <Link className="footer-link">Our Factory &ensp;</Link>
          <Link className="footer-link">Quality Assurance &ensp;</Link>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col span={16}>
        <img className="footer-icon" src="footer-twitter-icon.png"/>
        <img className="footer-icon" src="footer-facebook-icon.png"/>
        <img className="footer-icon" src="footer-instagram-icon.png"/>
        </Col>
        <Col span={8}>
          <p>
            @All rights reserved | This template is made by T&T Global
          </p>
        </Col>
      </Row>
    </div>
  )
};
export default Footer;