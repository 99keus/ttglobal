import React from 'react';
import { Image } from 'antd';
import Panner from '../layout/Panner';
import List from '../layout/List';
import products from './product.json';

const Product = () => {
  return (
    <div style={{ width: '85%', margin: 'auto' }}>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#da3849',
        }}
      >
        Our Product
      </div>
      <div
        style={{
          width: '100%',
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#da3849',
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        Medical Equipment
      </div>
      <div>
        <List data={products}></List>
      </div>
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
        Our <strong>Partners</strong>
      </div>
      <Panner>
        <Image src="/logo-partner.png" width={150} />
        <Image src="/logo-partner.png" width={150} />
      </Panner>
    </div>
  );
};

export default Product;
