import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Service from '../service/Service';
import Product from '../product/Product';
import ProductDetail from '../product/ProductDetail';
// import NotFound from '../layout/NotFound';

const Routes = () => {
    return (
      <section className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/product' component={Product} />
          <Route exact path='/product/:id' component={ProductDetail} />
          {/* <Route exact path='/products' component={} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </section>
    );
  };
  
  export default Routes;