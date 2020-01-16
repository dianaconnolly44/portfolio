import React, { Component } from 'react';
import { flat } from '../projects/menu';
import { projects } from '../projects/projects';

import './Gallery.css';

export default class Gallery extends Component {
  state = {}
  meta = {}

  render = () => {

    const page = flat.find(link => link.id === this.props.page);
    const tiles = page.projects.filter(id => projects[id]).map(id => projects[id] ? ({ id, ...projects[id] }) : null);

    return (
      <div className="gallery">
        <h1>{this.props.title}</h1>
        <div className="tiles">
          {
            tiles.map(tile => {
              return <div className="tile" key={tile.id}>
                <div className="tile-contents">
                  <img src={require(`../projects/gallery/${tile.pic}`)} />
                  <div className="title">{tile.title}</div>
                  { tile.description ? <div className="description">{tile.description}</div> : null }
                </div>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}