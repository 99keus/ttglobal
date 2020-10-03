import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Routes from './components/routing/Routes';

// import { Provider } from 'react-redux';
// import { loadProducts } from './actions/product';

import './App.css';


const App = () => {
  useEffect(() => {
    //get Product
  }, []);

  return (
    <Router>
      <Fragment>
        {/* <Navbar /> */}
        <Switch>
          <Route component={Routes} />
        </Switch>
        {/* <Footer /> */}
      </Fragment>
    </Router>
  );
};

export default App;
