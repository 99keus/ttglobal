import React, { useEffect } from 'react';

export const ProductContext = React.createContext({});

const Provider = ( {children} ) => {
  const products = [
    {a:5, b:5}
  ];
  
  useEffect(() => {
    // get products
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}
export default Provider;
