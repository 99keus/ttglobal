import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons'
import CatalogDownload from '../layout/CatalogDownload';
import NewsLetter from '../layout/NewsLetter';

const style = {
  h3: {
    color: '#DA3849',
    fontSize: '36px',
    lineHeight: '54x',
    marginLeft: '10vw'
  },
  text: {
    root: {
      padding: "25px 10vw 0px 10vw",
    },
    title: {
      fontSize: "24px",
      lineHeight: "36px",
      color: "#DA3849",
      marginBottom: "10px",
      marginLeft: '10vw'
    },
    button: {
      borderRadius: "5px",
      minWidth: '50px'
    },
    input: {
      backgroundColor: '#F5F5F5',
      borderRadius: '10px'
    }
  },
  image: {
  },
  banner: {
    maxWidth: '100%'
  },
  priorities: {
    root: {
      backgroundColor: 'rgba(218, 56, 73, 0.05)'
    },
    checkedIcon: {
      color: 'red',
      marginRight: '10px'
    }
  }
}

const QualityAssurance = () => {
  return (
    <Fragment>
      <h3 style={style.h3}><b>Quality Assurance</b></h3>
      <br/>
      <p style={style.text.title}>
        <b>
          Ceritificate of Registration
            </b>
      </p>
      <Row justify='center'>
        <Col style={style.text.root} xs={24} lg={12}>

          <Col>
            <p style={style.text.text}>
              T&T Global is proud to be the exclusive distributor of medical gloves and <br />
              masks of KYO GLOVES brand<br />
              Including:<br />
              - Willow Glen Certificate of Registration<br />
              - Certificate of distribution, Exclusive for Kyo Gloves<br />
            </p>
          </Col>
          <br />
        </Col>
        <Col xs={24} lg={12} >
          <img src="/images/quality-assurance-cert.png" style={style.banner} alt="T&T Global" />
        </Col>
      </Row>
      <p style={style.text.title}>
        <b>
          International Quality Standard
            </b>
      </p>
      <br />
      <Row justify='center' align='middle'>

        <Col style={{paddingLeft: '10vw'}} xs={24} lg={12} >
          <Row justify='end'>
            <img src="/images/quality-assurance-IQS.png" style={style.banner} alt="T&T Global" />
          </Row>
        </Col>
        <Col style={style.text.root} xs={24} lg={12}>
          <Col>
            <p style={style.text.text}>
              Our Product meets the requirements of International Standard for Medical Use including:<br />
              <br />
              <b>
                - ISO 9001:13486<br />
                - EN455 Parts 1-4<br />
                - SGS Standard<br />
                - CE<br />
                - ISSQ For Quality Management System<br />
                - FDA 510(k)<br />
                - Quatest 3<br />
              </b>
            </p>
          </Col>
          <br />
        </Col>

      </Row>
      <CatalogDownload />
      <NewsLetter />
    </Fragment>
  )
};

export default QualityAssurance;

