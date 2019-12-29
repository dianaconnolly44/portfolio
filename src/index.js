import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Nav } from './components';

require('./app.css');

const MOBILE_DEV = false;
const history = createBrowserHistory();

class App extends Component {
  state = {
    nav: null
  }
  meta = {}

  render = () => {
    const isMobile = MOBILE_DEV || window.screen.width <= 767;

    return (
      <div className={`app ${isMobile ? 'mobile' : ''}`} id="app">
        <Nav {...this.props} onNav={nav => this.setState({ nav })} />
        <div className="body">
          hello world, this page is: {this.props.page}
          <br />
          <a onClick={e => {
            history.push(this.props.page === 'test' ? '/' : '/test')
          }}>click</a>
        </div>
      </div>
    )
  }
}

const page404 = (
  <div>404 not found</div>
)

// ========================================

const app = (props, page) => {
  return <App {...props} page={page} />
}

ReactDOM.render(
  <Router history={history}>
    <Switch>
      { /* URL PATHS */ }
      <Route exact path="/" render={_ => app(_, 'home')} />
      <Route exact path="/test" render={_ => app(_, 'test')} />

      {/* 404 catch all */}
      <Route path="*" status={404}>
        { page404 }
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);