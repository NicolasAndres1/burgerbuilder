// JS IMPORTS
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Containers/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'
import Checkout from './Containers/CheckOut/Checkout';

// CSS IMPORTS

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
