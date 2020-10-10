import React from 'react';
import { Card, List, Button } from 'antd';
import { Link } from 'react-router-dom';

const AList = ({ data }) => {
  return (
    <List
      grid={{
        gutter: 32,
        xs: 1,
        sm: 1,
        md: 1,
        lg: 2,
        xl: 4,
        xxl: 4,
      }}
      dataSource={data}
      renderItem={(item) => {
        const { id, title, description, src } = item;
        return (
          <List.Item>
            <Card
              hoverable
              style={{ width: '100%', textAlign: 'center' }}
              cover={
                <div
                  style={{
                    backgroundImage: `url(${src})`,
                    width: '100%',
                    height: '310px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                ></div>
              }
            >
              <div>
                <div style={{ textAlign: 'center', fontSize: '24px' }}>{title}</div>
                <div style={{ textAlign: 'start' }}>{description}</div>
              </div>
              <Link to={`/product/${id}`}>
                <Button
                  danger
                  ghost
                  type="primary"
                  shape="round"
                  size="large"
                  style={{ marginTop: '20px' }}
                >
                  Learn more &gt;
                </Button>{' '}
              </Link>
            </Card>
          </List.Item>
        );
      }}
    />
  );
};

export default AList;
