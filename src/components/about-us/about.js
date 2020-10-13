import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons'
import CatalogDownload from '../layout/CatalogDownload';
import NewsLetter from '../layout/NewsLetter';

const style = {
  text:{
    root: {
      padding: "25px 10vw 0px 10vw"
    },
    title: {
      fontSize: "24px",
      lineHeight: "36px",
      color: "#DA3849",
      marginBottom: "10px"
    },
    button: {
      borderRadius:"5px",
      minWidth: '50px'
    },
    input: {
      backgroundColor : '#F5F5F5',
      borderRadius: '10px'
    }
  },
  image: {
  },
  banner: {
    width: '100%'
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

const AboutUs = () => {
  return(
  <Fragment>
    <Row align="bottom">
      <Col style={style.text.root} xs={24} lg={14}>
        <div>
          <p style={style.text.title}>
            <b>
              Investment in health is an investment in the sustainable development of society
            </b>
          </p>
          <br/>
          <Col>
            <p style={style.text.text}>
            Embracing the message “Fostering sustainable values”, <br/>
            T&T Global has been delivering our core values to our employees, <br/>
            partners, customers, shareholders and the society. <br/>
            And we would appreciate your continuous support in the future.<br/>
            <br/>
            LOGISTICS T&T GLOBAL SERVICES AND TRADING JOINT STOCK COMPANY <br/>
            is a company specializing in the manufacture, import, export <br/>
            and distribution of medical equipment products. Specifically:<br/>
            <br/>
            ✔ Anti-Bacterial Mask 3 layers of blue, pink, white, ...<br/>
            ✔ Anti-Bacterial Mask 4-layer blue, pink, white, ...<br/>
            ✔ N95 mask<br/>
            ✔ Medical gloves<br/>
            In addition, T&T Global also provides logistics services, including:<br/>
            ✔ Transport services: domestic transport, road transportation, rail, container, freight forwarding, ..<br/>
            ✔ Customs services: customs clearance and customs clearance<br/>
            <br/>
            Providing independent advice for you.<br/>
            <br/>
            ✔ Warehouse services: warehouse rental, consolidation, packaging, packaging<br/>
            ✔ Import and export services: consulting on import and export procedures<br/>
            ✔ Loading and unloading goods by forklifts, crane trucks at: factories, factories, docks, ports, warehouses, ..<br/>
            <br/>
            Commitment: General service - Full responsibility - Safe and save time and costs.<br/>
            </p>
          </Col>
          <br/>
        </div>
      </Col>
      <Col style={style.image} xs={24} lg={10} >
        <img src="/about-us-banner.png" style={style.banner} alt="T&T Global"/>          
      </Col>
    </Row>
    <Row align="middle" style={style.priorities.root}>
      <Col xs={24} lg={14}>
        <img style={{maxWidth: '100%'}} src="/about-us-priorities.png"/>
      </Col>
      <Col xs={24} lg={10}>
        <p>
        <CheckCircleFilled style={style.priorities.checkedIcon} />
        Customer and employee solutions are time-consuming.<br/>
          <br/>
          <CheckCircleFilled style={style.priorities.checkedIcon} />
          We accomplish our goals more efficiently.<br/>
          <br/>
          <CheckCircleFilled style={style.priorities.checkedIcon} />
          Transparent Communication Collaboration properly do.<br/>
          <br/>
          <CheckCircleFilled style={style.priorities.checkedIcon} />
          It provides a road map to increased productivity.<br/>
          <br/>
          <CheckCircleFilled style={style.priorities.checkedIcon} />
          Providing independent advice for you.<br/>
          <br/>
          <CheckCircleFilled style={style.priorities.checkedIcon} />
          24/7 support system available<br/>
        </p>
      </Col>
    </Row>
    <CatalogDownload/>
    <NewsLetter/>
  </Fragment>
  )
};

export default AboutUs;

