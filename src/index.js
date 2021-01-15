import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Nav } from './components';
import { menu, flat } from './projects/menu';
import { projects } from './projects/projects';
import { Home, Gallery, About, Project } from './containers';
import ReactGA from 'react-ga';

// ==== JOB APPS (1 / 3 parts to update on this page)
import DuoLingo from './containers/jobs/DuoLingo';
import Reedsy from './containers/jobs/Reedsy';
import Datadog from './containers/jobs/Datadog';
import BigHealth from './containers/jobs/BigHealth';
import Slumberkins from './containers/jobs/Slumberkins';

// ====

require('./app.css');
ReactGA.initialize('UA-92429223-1');

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

const trackGA = () => {
  if(window.location.hostname !== 'localhost') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

class App extends Component {
  state = {
    nav: null
  }
  meta = {}

  componentDidMount = () => {
    document.addEventListener('scroll', this.detectNavScroll);
    trackGA();
  }

  componentDidUpdate = prevProps => {
    // track google analytics page
    if(prevProps.location !== this.props.location) trackGA();
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
    
    // ==== JOB APPS (2 / 3 parts to update on this page)
    if([
      'duolingo',
      'reedsy',
      'datadog',
      'bighealth',
      'slumberkins',
    ].includes(page)) return page;
    // ====

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

      // ==== JOB APPS (3 / 3 parts to update on this page)
      if(type === 'duolingo') return <DuoLingo {...this.props} />;
      if(type === 'reedsy') return <Reedsy {...this.props} />;
      if(type === 'datadog') return <Datadog {...this.props} />;
      if(type === 'bighealth') return <BigHealth {...this.props} />;
      if(type === 'slumberkins') return <Slumberkins {...this.props} />;
      // ====

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
        <Nav {...this.props} page={page} onNav={nav => this.setState({ nav })} ref="nav" />
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