import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Nav } from './components';
import { menu, flat } from './projects/menu';
import { Home, Gallery } from './containers';

require('./app.css');

const MOBILE_DEV = false;
const history = createBrowserHistory();
const page404 = (
  <h1>404 page not found</h1>
)

class App extends Component {
  state = {
    nav: null
  }
  meta = {}

  isValidPage = () => {
    const page = this.props.location.pathname.replace('/', '');
    if(!page) return true;
    return false;
  }

  render = () => {
    const isMobile = MOBILE_DEV || window.screen.width <= 767;
    const page = this.props.location.pathname.replace('/', '');

    let page_title = page;
    menu.forEach(item => {
      if(item.id === page) page_title = item.label;
      else (item.submenu || []).forEach(sub => {
        if(sub.id === page) page_title = sub.label;
      });
    });

    return (
      <div className={`app ${isMobile ? 'mobile' : ''}`} id="app">
        <Nav {...this.props} onNav={nav => this.setState({ nav })} />
        <div className="body">
          { 
            !this.isValidPage() ? page404 :
            page ? <Gallery {...this.props} page={page} title={page_title} /> 
            : <Home {...this.props} /> 
          }
        </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <Router history={history}>
    <Switch>
      { /* URL PATHS */ }
      <Route path="*" component={App} />


      {/* 404 catch all */}
      <Route path="*" status={404}>
        { page404 }
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);