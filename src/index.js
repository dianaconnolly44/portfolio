import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Nav } from './components';
import { menu, flat } from './projects/menu';
import { projects } from './projects/projects';
import { Home, Gallery, About, Project } from './containers';

require('./app.css');

const MOBILE_DEV = false;
const history = createBrowserHistory();
const page404 = (
  <h1>Oops! Couldn't find this project.</h1>
)
const pageLoader = (
  <div className="page-loader">
    <img src={require('./dclogo.gif')} onClick={e => this.props.history.push('/')} />
  </div>
)

class App extends Component {
  state = {
    nav: null
  }
  meta = {}

  componentDidMount = () => {
    document.addEventListener('scroll', this.detectNavScroll);
  }

  pageType = () => {
    const page = this.props.location.pathname.replace('/', '');
    // home
    if(!page) return 'home';
    // about
    if(page === 'about') return 'about';
    // menu items
    if(flat.some(path => path.id === page)) return 'gallery';
    // projects
    if(flat.some(path => (path.projects || []).includes(page) && projects[page].page)) return 'project';
    // invalid
    return false;
  }

  detectNavScroll = e => {
    if(this.refs.nav) this.refs.nav.closeMobileNav();
  }

  render = () => {
    const isMobile = MOBILE_DEV || window.screen.width <= 767;
    const page = this.props.location.pathname.replace('/', '');

    // redirect for resume
    if(page === 'resume') {
      window.location.href = window.location.origin + require('./resume.pdf');
      return pageLoader;
    }

    const renderPage = () => {
      const type = this.pageType();
      if(!type) return page404;
      if(!page) return <Home {...this.props} />;
      if(type === 'about') return <About {...this.props} />;
      if(type === 'gallery') {
        let page_title = page, page_subtitle;
        menu.forEach(item => {
          if(item.id === page) page_title = item.label;
          else (item.submenu || []).forEach(sub => {
            if(sub.id === page) {
              page_title = sub.label;
              page_subtitle = item.label;
            }
          });
        });
        return <Gallery {...this.props} page={page} subtitle={page_subtitle} title={page_title} />;
      }
      if(type === 'project') {
        return <Project {...this.props} id={page} />;
      }
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
      <Redirect exact from="/" to="/about" />
      <Route path="*" component={App} />


      {/* 404 catch all */}
      <Route path="*" status={404}>
        { page404 }
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);