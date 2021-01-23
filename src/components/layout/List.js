import React from 'react';
import { Card, List } from 'antd';
import { Link } from 'react-router-dom';
import Button from './Button';

const style = {
  card: {
    width: '100%',
    textAlign: 'center',
    boxShadow: 'none',
  }
}

const AList = ({ data, hover }) => {
  return (
    <List
      grid={{
        gutter: 40,
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
              style={style.card}
              className={hover ? 'custom-card large' : 'custom-card'}
              cover={
                thumbnail ? (
                  <div
                    style={{
                      backgroundImage: `url(${thumbnail})`,
                      width: '100%',
                      height: '216px',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                ) : (
                  <div className="unavailable-image" style={{ height: '216px' }}>
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
                  height: '90px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  WebkitLineClamp: '4',
                  WebkitBoxOrient: 'vertical',
                  lineHeight: 1.5,
                  display: '-webkit-box'
                }}
              >
                <div style={{ textAlign: 'center', color: '#DA3849', fontSize: '20px' }}>
                  <b>{short_title}</b>
                </div>
                <div style={{ textAlign: 'start' }}>{short_desc}</div>
              </div>
              <Link to={`/product/${id}`}>
                <Button width={'70%'} height={40} borderRadius={30}>
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
