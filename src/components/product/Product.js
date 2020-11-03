import React, { useContext } from 'react';
import { Image, Divider } from 'antd';
import Panner from '../layout/Panner';
import List from '../layout/List';
import { ProductContext } from '../ProductContext';
import OurPartner from '../layout/OurPartner';

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
        <br/>
        <div>
          <List data={products} hover={window.innerWidth >=750}></List>
        </div>
      </div>
      <Divider style={style.panner} />

      <OurPartner/>
    </div>
  );
};

export default Product;
