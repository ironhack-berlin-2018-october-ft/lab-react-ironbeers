import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { withRouter } from "react-router";
import Home from './pages/Home'
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import SingleBeer from './pages/SingleBeer'
import NewBeer from './pages/NewBeer'
import Error404 from './pages/Error404'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Switch>
          <Route exact path="/" render={() => <div></div>} />
          <Route component={Header} />
        </Switch> */}
        {this.props.location.pathname !== '/' && <Header />}

        {/* <Switch> renders max 1 element */}
        {/* Example: Home is rendered if the url is exactly "/" */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:id" component={SingleBeer} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

// This line will render <App /> with props.history, props.location and props.match
export default withRouter(App);
