import React, { Component } from 'react';
import { flat } from '../projects/menu';
import { projects } from '../projects/projects';

import './Gallery.css';

export default class Gallery extends Component {
  state = {}
  meta = {}

  componentDidMount = () => {
    const hash = (this.props.location.hash || '').replace('#', '');
    if(hash && this.refs[hash]) {
      setTimeout(() => {
        document.querySelector('html').scrollTop = this.refs[hash].offsetTop;
      }, 50);
      setTimeout(() => {
        document.querySelector('html').scrollTop = this.refs[hash].offsetTop;
      }, 500); // just in case
    } else {
      document.querySelector('html').scrollTop = 0;
    }
  }

  render = () => {

    const page = flat.find(link => link.id === this.props.page);
    const tiles = page.projects.filter(id => projects[id]).map(id => projects[id] ? ({ id, ...projects[id] }) : null);

    return (
      <div className="gallery">
        <h1>
          <span className="subtitle">{this.props.subtitle}</span>
          <span className="divider">|</span>
          <span>{this.props.title}</span>
        </h1>
        <div className="tiles">
          {
            tiles.map(tile => {
              const hasPage = tile.page;
              const hasLink = !!tile.link;
              return (
                <div 
                  className={`tile ${(hasPage || hasLink) ? 'clickable' : ''}`} 
                  key={tile.id} 
                  id={tile.id} 
                  ref={tile.id}
                  onClick={(hasPage || hasLink) ? () => {
                    if(hasLink) window.open(tile.link, '_blank', 'noreferrer');
                    else this.props.history.push('/' + tile.id);
                  } : null}
                >
                  <div className="tile-contents">
                    <img src={require(`../projects/gallery/${tile.pic}`)} />
                    <div className="title">{tile.title}</div>
                    { tile.description ? <div className="description">{tile.description}</div> : null }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
