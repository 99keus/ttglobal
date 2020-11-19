import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Provider from './components/ProductContext'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Routes from './components/routing/Routes';
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './App.css';
import 'swiper/swiper-bundle.css';

const { Content } = Layout;


const App = () => {

  return (
    <Provider>
      <Router>
        <Layout>
          <Navbar />
          <Content>
            <Switch>
              <Route component={Routes} />
            </Switch>
          </Content>
          <Footer/>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
