import React, { Component } from 'react';
import { menu } from '../projects/menu';
import { projects } from '../projects/projects';

require('./Nav.css');

export default class Nav extends Component {
  state = {
    page: null,
    open: false,
    accordion: [],
    lastClicked: ''
  }
  meta = {}

  componentDidMount = () => {
    this.autoOpenNav();
  }

  componentDidUpdate = (prevProps) => {
    const { page } = this.props;
    if(prevProps.page !== page && page !== this.state.page) this.autoOpenNav();

  }

    // update nav if navigated to externally
  autoOpenNav = () => {
    const { page } = this.props;
    const accordion = [...this.state.accordion];
    const newMenus = [];
    const activeSubmenus = [];
    const newState = { page, accordion };
    menu.forEach(toplevel => {
      const submenuPage = (toplevel.submenu || []).find(slevel => 
        slevel.id === page || slevel.projects.some(id => 
          {
            const {preferred_menu_id:override} = projects[id] || {};
            if(id === page) activeSubmenus.push(slevel.id);
            return id === page && (!override || override === slevel.id)
          }
        )
      )
      if(toplevel.id === page || submenuPage) {
        newMenus.push(toplevel.id);
        if(!accordion.includes(toplevel.id)) accordion.push(toplevel.id)
      }
    });

    // check if we should clear the lastClicked value - we should if page isn't related to lastClicked
    if([...accordion, ...activeSubmenus].every(id => id !== this.state.lastClicked)) {
      newState.lastClicked = '';
    }

    this.setState(newState);
  }

  navTo = (path, page) => {
    this.setState({ page, lastClicked: page }, () => this.props.history.push(path));
    if(this.state.open) this.toggleMobile();
  }

  closeMobileNav = () => {
    if(!this.state.open) return;
    this.setState({ open: false });
    document.removeEventListener('click', this.closeByBody);
    document.removeEventListener('touchstart', this.closeByBody);
  }

  toggleMobile = () => {
    if(this.state.open) {
      this.closeMobileNav();
    } else {
      this.setState({ open: true });
      document.addEventListener('click', this.closeByBody);
      document.addEventListener('touchstart', this.closeByBody);
    }
  }

  closeByBody = e => {
    if('persist' in e) e.persist();
    if(!e.path) return;
    if(e.path.includes(this.refs.body)) return;
    this.closeMobileNav();
  }

  renderLink = (link, i) => {
    const { lastClicked, page, accordion } = this.state;
    const sub = link.submenu;
    const expanded = sub && accordion.includes(link.id);
    let active = [page, lastClicked].includes(link.id);
    if(!lastClicked){ 
      active = active || link.projects?.includes(page);
      const {preferred_menu_id:override} = projects[page] || {};
      if(active && override && override !== link.id) active = false;
    }

    const classes = [];
    if(expanded) classes.push('expanded');
    if(sub) classes.push('with-arrow');

    return <li 
      key={link.id} 
      className={classes.join(' ')}
      onClick={e => {
        if(!sub) this.navTo(link.url || `/${link.id}`, link.id);
      }}
    >
      <div 
        onClick={e => {
          if(!sub) return;
          if(expanded) this.setState({ accordion: this.state.accordion.filter(_ => _ !== link.id) });
          else this.setState({ accordion: [...this.state.accordion, link.id] });
        }}
        className={`link ${active ? 'active' : ''} ${expanded ? 'expanded' : ''}`}
      > <span>{ link.label }</span> </div>
      {
        sub &&
        <ul className="sub">
          { sub.map(this.renderLink) }
        </ul>
      }
    </li>
  }

  render = () => {

    return (
      <div className={`nav ${this.state.open ? 'open' : ''}`} ref="nav">
        <div className="nav-mobile">
          <div 
            className="toggle" 
            ref="toggle"
            onClick={this.toggleMobile}>
              <div className="hamburger">
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
          <div>DIANA CONNOLLY</div>
        </div>

        <div className="nav-body" ref="body">
          <div className="header">
            <img id="logo" src={require('../dclogo.gif')} onClick={e => this.props.history.push('/')} />
          </div>
          <ul>
            { 
              // this.renderLink({
              //   id: 'home',
              //   url: '/',
              //   label: 'Home'
              // }) 
            }
            { menu.map(this.renderLink) }
          </ul>
        </div>
      </div>
    )
  }
}