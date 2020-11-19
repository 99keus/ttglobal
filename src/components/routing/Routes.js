import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Service from '../service/Service';
import Product from '../product/Product';
import ProductDetail from '../product/ProductDetail';
import Contact from '../contact/contact';
import Career from '../career/career';
import AboutUs from '../about-us/about';
import Factory from '../about-us/factory';
import Disclaimer from '../simplePage/disclaimer';
import Privacy from '../simplePage/privacy';
import QualityAssurance from '../simplePage/QualityAssurance';
// import NotFound from '../layout/NotFound';

const Routes = () => {
    return (
      <section className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/product' component={Product} />
          <Route exact path='/product/:id' component={ProductDetail} />
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/career' component={Career}/>
          <Route exact path='/about-us' component={AboutUs}/>
          <Route exact path='/factory' component={Factory}/>      
          <Route exact path='/disclaimer' component={Disclaimer}/>   
          <Route exact path='/privacy' component={Privacy}/>   
          <Route exact path='/quality-assurance' component={QualityAssurance}/>   
          {/* <Route component={NotFound} /> */}
        </Switch>
      </section>
    );
  };
  
  export default Routes;