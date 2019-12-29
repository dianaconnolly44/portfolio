import React, { Component } from 'react';

require('./Nav.css');

export default class Nav extends Component {
  state = {
    page: 'home',
    open: false,
  }
  meta = {}

  render = () => {
    return (
      <div className={`nav ${this.state.open ? 'open' : ''}`}>
        <div className="nav-mobile">
          <div 
            className="toggle" 
            onClick={e => this.setState({ open: !this.state.open })}>
              <div className="hamburger">
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
          <div>TITLE HERE</div>
        </div>

        <div className="nav-body">
          <div className="header">
            TITLE
          </div>
          <ul>
            <li>item1</li>
            <li>item2</li>
          </ul>
        </div>
      </div>
    )
  }
}