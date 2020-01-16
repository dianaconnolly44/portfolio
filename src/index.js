import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Nav } from './components';
import { menu, flat } from './projects/menu';
import { Home, Gallery, About } from './containers';

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

  componentDidMount = () => {
    document.addEventListener('scroll', this.detectNavScroll);
  }

  isValidPage = () => {
    const page = this.props.location.pathname.replace('/', '');
    if(!page) return true;
    if(flat.some(path => path.id === page)) return true;
    return false;
  }

  detectNavScroll = e => {
    console.log('SCROLLING');
    if(this.refs.nav) this.refs.nav.closeMobileNav();
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

    const renderPage = () => {
      if(!this.isValidPage()) return page404;
      if(!page) return <Home {...this.props} />;
      if(page === 'about') return <About {...this.props} />;
      return <Gallery {...this.props} page={page} title={page_title} />;
    }

    return (
      <div className={`app ${isMobile ? 'mobile' : ''}`} id="app" ref="app">
        <Nav {...this.props} onNav={nav => this.setState({ nav })} ref="nav" />
        <div className="body">
          { renderPage() }
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