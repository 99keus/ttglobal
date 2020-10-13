import React, { useEffect, useState } from 'react';
import { getProduct } from '../utils/spreadSheet'

export const ProductContext = React.createContext({});

const Provider = ( {children} ) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    let productsRaw = await getProduct();
    productsRaw = productsRaw.map(row => {
      row.image = {};
      row.image.latex = row.image_latex.split(",\n");
      row.image.nitrile = row.image_nitrile.split(",\n");
      row.image.detail = row.image_detail.split(",\n");
      
      return {
        id: row.id,
        title: row.title,
        short_title: row.short_title,
        thumbnail: row.thumbnail,
        image: row.image,
        description: row.description,
        short_desc: row.short_desc
      };
    });
    setProducts(productsRaw);
  };

  useEffect( () => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}
export default Provider;
