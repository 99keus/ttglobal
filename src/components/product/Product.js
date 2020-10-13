import React, { useContext } from 'react';
import { Image, Divider } from 'antd';
import Panner from '../layout/Panner';
import List from '../layout/List';
import { ProductContext } from '../ProductContext';

const Product = () => {
  const products = useContext(ProductContext);

  return (
    <div style={{ backgroundColor: '#FFFBFC', borderTop: '1px solid red', paddingTop: '20px' }}>
      <div style={{ width: '85%', margin: 'auto' }}>
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: '50px',
            fontWeight: 'bold',
            color: '#da3849'
          }}
        >
          <b>Our Product</b>
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
          <b>Medical Equipment</b>
        </div>
        <div>
          <List data={products}></List>
        </div>
      </div>
      <Divider
        style= {{
          color: '#DA3849',
          backgroundColor: 'red',
          height: '2px',
          width: '250px',
          margin: '25px auto',
          minWidth: '50px'
        }}
      />
      <div style={{ position: 'relative' }}>
        <div className="product_detail_header__b header_middle">
          Our <strong>Partners</strong>
        </div>
        <img
          src="/logo-circle.png"
          style={{ position: 'absolute', top: 0, height: '100%', right: 0 }}
        />
        <div style={{ padding: '30px' }}>
          <Panner>
            <Image src="/logo-partner.png" width={150} />
            <Image src="/logo-partner.png" width={150} />
          </Panner>
        </div>
      </div>
    </div>
  );
};

export default Product;
