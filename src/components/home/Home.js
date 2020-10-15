import React, { Fragment, useState, useContext } from 'react';
import { ProductContext } from '../ProductContext';
import { Carousel } from 'antd';
import NewsLetter from '../layout/NewsLetter';
import CatalogDownload from '../layout/CatalogDownload';
import OurPartner from '../layout/OurPartner';
import About from './About';
import SlidePart from './SlidePart';
import OurProduct from '../product/OurProduct';
import { Row, Col, Button, Divider } from 'antd';
import SlideThree from './SlideThree';

const Home = () => {
  const products = useContext(ProductContext);

  const style = {
    divider: {
      red: {
        color: '#DA3849',
        backgroundColor: 'red',
        height: '2px',
        width: '300px',
        margin: 'auto',
        minWidth: '50px'
      }
    }
  }
  const contentStyle = {
    height: '390px',
    backgroundImage: "url('/hero-slide.JPG')",
    backgroundPosition: 'center', /* Center the image */
    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
    backgroundSize: 'cover'
  };
  const styleSlide1 = {
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: '54px',
    fontSize: '48px'
  };

  return (
    <Fragment>
      <Carousel autoplay>
        <div>
          <Row style={contentStyle} justify="end">
            <Col xs={24} lg={12} style={styleSlide1}>
              <p>
                Manufacturer in<br/>
                <b>Vietnam</b>
              </p>
              <Button
                type="primary"
                size="large"
                style={{border: '1px solid #FFFFFF', borderRadius:"5px"}}
                danger
              >
                Discover Our Factory >
              </Button>
            </Col>
          </Row>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <About/>
      <Divider style={style.divider.red}/>
      <div
        style={{
          fontSize: '30px',
          color: '#101D78',
          width: '100%',
          textAlign: 'center',
          marginTop: '30px',
          marginBottom: '20px',
        }}
      >
        Our <strong>Products</strong>
      </div>
      <OurProduct/>
      <br/>
      <Divider style={style.divider.red}/>
      <OurPartner/>
      <br/>
      <Divider style={style.divider.red}/>
      {/* <SlideThree/> */}
      <SlidePart/>
      <CatalogDownload/>
      <NewsLetter/>
    </Fragment>
  )
};
export default Home;