import React, { Component } from 'react';
import { menu } from '../projects/menu';

require('./Nav.css');

export default class Nav extends Component {
  state = {
    page: null,
    open: false,
    accordion: []
  }
  meta = {}

  navTo = (path, page) => {
    this.props.history.push(path);
    this.setState({ page });
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
    const active = this.state.page === link.id,
          sub = link.submenu || [],
          expanded = sub.length && this.state.accordion.includes(link.id);

    return <li 
      key={link.id} 
      className={expanded ? 'expanded' : null}
      onClick={e => {
        if(!sub.length) {
          this.navTo(link.url || `/${link.id}`, link.id);
        }
      }}
    >
      <div 
        onClick={e => {
          if(sub.length) {
            if(expanded) this.setState({ accordion: this.state.accordion.filter(_ => _ !== link.id) });
            else this.setState({ accordion: [...this.state.accordion, link.id] });
          }
        }}
        className={`link ${active ? 'active' : ''} ${expanded ? 'expanded' : ''}`}
      > <span>{ link.label }</span> </div>
      {
        !sub.length ? null :
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
            DIANA
          </div>
          <ul>
            { 
              this.renderLink({
                id: 'home',
                url: '/',
                label: 'Home'
              }) 
            }
            { menu.map(this.renderLink) }
          </ul>
        </div>
      </div>
    )
  }
}