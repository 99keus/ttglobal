import React, { useContext } from 'react';
import { Image, Divider } from 'antd';
import Panner from '../layout/Panner';
import List from '../layout/List';
import { ProductContext } from '../ProductContext';

const style = {
  root: { backgroundColor: '#FFFBFC', borderTop: '1px solid #DA3849', paddingTop: '20px' },
  container: { width: '75%', margin: 'auto' },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: '30px',
    color: '#101d78',
  },
  subTitle: {
    width: '100%',
    fontSize: '20px',
    color: '#da3849',
    marginBottom: '20px',
    marginTop: '20px',
  },
  panner: {
    color: '#DA3849',
    backgroundColor: '#DA3849',
    height: '2px',
    width: '250px',
    margin: '25px auto',
    minWidth: '50px',
  },
  image: { position: 'absolute', top: 0, height: '100%', right: 0 },
};

const Product = () => {
  const products = useContext(ProductContext);

  return (
    <div style={style.root}>
      <div style={style.container}>
        <div style={style.title}>
          Our <strong>Products</strong>
        </div>
        <div style={style.subTitle}>
          <b>Medical Equipment</b>
        </div>
        <div>
          <List data={products} hover={window.innerWidth >=750}></List>
        </div>
      </div>
      <Divider style={style.panner} />
      <div style={{ position: 'relative' }}>
        <div className="product_detail_header__b header_middle">
          Our <strong>Partners</strong>
        </div>
        <img
          src="/logo-circle.png"
          style={style.image}
          alt=""
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
