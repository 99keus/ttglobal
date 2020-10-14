import React from 'react';
import { Card, List } from 'antd';
import { Link } from 'react-router-dom';
import Button from './Button';

const AList = ({ data }) => {
  return (
    <List
      grid={{
        gutter: 32,
        xs: 1,
        sm: 1,
        md: 1,
        lg: 4,
        xl: 4,
        xxl: 4,
      }}
      dataSource={data}
      renderItem={(item) => {
        const { id, short_title, short_desc, thumbnail } = item;
        return (
          <List.Item>
            <Card
              hoverable
              style={{
                width: '100%',
                textAlign: 'center',
                boxShadow: '0 5px 10px 0 rgba(0,0,0,0.2),0 6px 12px 0 rgba(0,0,0,0.19)',
              }}
              cover={
                thumbnail ? (
                  <div
                    style={{
                      backgroundImage: `url(${thumbnail})`,
                      width: '100%',
                      height: '250px',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                ) : (
                  <div className="unavailable-image" style={{ height: '250px' }}>
                    <div className="unavailable-image-blur">
                      This product is temporarily unavailable
                    </div>
                  </div>
                )
              }
            >
              <div
                className="mb-3"
                style={{
                  height: '160px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  WebkitLineClamp: '7',
                  WebkitBoxOrient: 'vertical',
                  lineHeight: 1.5,
                  display: '-webkit-box'
                }}
              >
                <div style={{ textAlign: 'center', color: 'red', fontSize: '24px' }}>
                  <b>{short_title}</b>
                </div>
                <div style={{ textAlign: 'start' }}>{short_desc}</div>
              </div>
              <Link to={`/product/${id}`}>
                <Button width={'15vw'} height={45} borderRadius={30}>
                  Learn more
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
