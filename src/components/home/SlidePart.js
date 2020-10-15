import React, { Fragment } from 'react';
import { Row, Col, Button, Carousel } from 'antd';

const style = {
  text:{
    root: {
      padding: "50px 10vw 0px 10vw"
    },
    img: {
      padding: "25px"
    },
    title: {
      fontSize: "24px",
      lineHeight: "36px",
      color: "#BE0B31"
    },
    button: {
      border: '1px solid #DA3849',
      borderRadius:"5px",
      color: '#333333',
      minWidth: '50px'
    }
  },
  slide: {
    root: {
      padding: '75px 0 50px 0'
    },
    slide:{

    },
    image1: {
      backgroundImage: "url('/home-slidepart-img1.JPG')",
      height: '560px',
      backgroundPosition: 'center', /* Center the image */
      backgroundRepeat: 'no-repeat', /* Do not repeat the image */
      backgroundSize: 'cover'
    }
  }
}
const SlidePart = () => {

  return(
    <Row>
      <Col xs={24} lg={16} style={style.text.root}>
        <div style={style.text.img}>
          <img src="/logo-main.png"/>
        </div>
        <div>
          <p style={style.text.title}>
            <b>Manufacturer</b>  in  <b>VietNam</b>
          </p>
          <p style={style.text.text}>
            We are one of the leading manufacturers of high tech medical equipment can be found in surgeries,
            clinics and hospitals throughout the world supported by an extensive distributor network.
            <br/>
            <br/>
            Our VN manufactured operating theatre lamps have near-perfect colour rendition, balanced arm systems for ease of movement and use HD-LED technology which emits a brilliant cold light to reduce heat generation.
            We also have a range of mobile operating theatre lights. Specialist surgical and examination lighting systems are available, with unique features designed to suit the field.
            <br/>
          </p>
          <Button
            size="large"
            style={style.text.button}
            danger
          >
            View More >
          </Button>
        </div>
      </Col>
      <Col xs={24} lg={8} style={style.slide.root}>
        <Carousel autoplay>
          <div>
            <div style={style.slide.image1}></div>
          </div>
          <div>
            <div style={style.slide.image1}></div>
          </div>
        </Carousel>
      </Col>
    </Row>
  )
};

export default SlidePart;