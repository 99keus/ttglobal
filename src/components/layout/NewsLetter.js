import { Col, Row } from 'antd';
import React from 'react';

const NewsLetter = () => {
  return(
<Row justify="center" margin="100px">
  <Col xs={20} lg={18} justify="center" margin="24px">
    <Row>
      <p
        style={{
          width: '100%',
          fontSize: '24px',
          color: '#da3849',
          fontWeight: 'bold',
        }}
      >
        Get our newsletter for T&T Global
      </p>
    </Row>
    <Row justify="space-between">
    <Col xs={20} lg={8}>
      <input
        type="text"
        placeholder="Name"
        style={{
          width: '100%',
          height: '44px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          background: '#ccc',
          padding: '24px'
        }}
      />
    </Col>
    <Col xs={20} lg={8}>
      <input
        type="text"
        placeholder="Email"
        style={{
          width: '100%',
          height: '44px',
          margin: '12px 0',
          border: '1px solid #ccc',
          borderRadius: '8px',
          background: '#ccc',
          padding: '20px'
        }}
      />
    </Col>
    <Col xs={20} lg={4}>
      <button
        className="custom-button active"
        style={{
          width: '100%',
          height: '48px',
          borderRadius: "4px",
          fontSize: "16px",
          margin: '10px 0'
        }}>
        Send Now
      </button>
    </Col>
    </Row>
  </Col>
</Row>
  )
}

export default NewsLetter;