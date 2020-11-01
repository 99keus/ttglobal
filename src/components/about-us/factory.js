import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import CatalogDownload from '../layout/CatalogDownload';
import NewsLetter from '../layout/NewsLetter';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
// import Swiper, {Pagination } from 'swiper';


const style= {
  root: {
    padding: '0 10vw 0 10vw'
  },
  text: {
    root: {
      padding: '20px 20vw 20px 20vw'
    },
    title: {
      fontSize: "20px",
      lineHeight: "30px",
      color: "#DA3849",
      marginBottom: "10px"
    },
    text: {

    }
  },
  slide: {
    img: {
      
    }
  }
};
const Factory = () => {
  SwiperCore.use([Pagination, Navigation]);

  return(
    <Fragment>
      <Row justify='center'>
        <img style={{width: '100%'}} src="/factory-iframe.png"/>
      </Row>
      <Row style={style.text.root} align="middle">
        <b style={style.text.title}>
          T & T Global Producing Medical Equipment Factory
        </b>
        <p style={style.text.text}>
          We are one of the leading manufacturers of high tech medical equiqment, and our equipment can be found in surgeries, clinics and hospitals throughout the world supported by an extensive distributor network.<br/>
          <br/>
          Address: Bau Bang Industrial Park, Lai Uyen Town, Bau Bang District, Binh Duong Province<br/>
          Area: 1000 km<br/>
        </p>
      </Row>
      <Row justify="center">
        <b style={style.text.title}>
          Facilities Image
        </b>
      </Row>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation= {{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide><img src="/images/factory-slide-img1.png" style={style.slide.img}/></SwiperSlide>
        <SwiperSlide><img src="/images/factory-slide-img2.png" style={style.slide.img}/></SwiperSlide>
        <SwiperSlide><img src="/images/factory-slide-img3.png" style={style.slide.img}/></SwiperSlide>
        <SwiperSlide><img src="/images/factory-slide-img1.png" style={style.slide.img}/></SwiperSlide>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
      <CatalogDownload/>
      <NewsLetter/>
    </Fragment>
  )
}
export default Factory;