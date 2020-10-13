import React, {Fragment} from 'react';
import { Image, Row, Col } from 'antd';
import { DownloadOutlined, SendOutlined } from '@ant-design/icons';

const CatalogDownload = () => {

  return(
    <Row justify="center" style={{ marginTop: '50px' }}>
      <Col xs={20} lg={18}
        style={{
          margin: 'auto',
          border: '2px solid #da3849',
          padding: '20px 30px',
          borderRadius: '10px',
        }}
      >
        <Row justify="space-betwwen">
          <Col xs={20} lg={12}>
            <div style={{ fontSize: '24px' }}>
              Download our <strong>Catalog & profile</strong>
            </div>
            <button
              className="custom-button active"
              style={{
                margin: '20px 0',
                width: '100%',
                height: '60px',
                fontSize: '1rem'
              }}
            >
              Download now <DownloadOutlined />
            </button>
          </Col>
          <Col xs={20} lg={12}>
            <Image src="/logo-1.jpg" width="100%" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CatalogDownload;