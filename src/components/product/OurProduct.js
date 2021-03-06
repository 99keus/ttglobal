import React, {useContext} from 'react';
import List from '../layout/List';
import { ProductContext } from '../ProductContext';

const OurProduct = () => {
  const products = useContext(ProductContext);

  return (
    <div style={{ width: '85%', margin: 'auto' }}>
        <List data={products} hover={window.innerWidth >= 750 }></List>
    </div>
  )
};

export default OurProduct;