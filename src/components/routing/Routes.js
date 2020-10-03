import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
// import NotFound from '../layout/NotFound';

const Routes = () => {
    return (
      <section className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/products' component={} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </section>
    );
  };
  
  export default Routes;