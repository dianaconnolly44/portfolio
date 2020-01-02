import React, { Component } from 'react';
import { flat } from '../projects/menu';
import { projects } from '../projects/projects';

import './Gallery.css';

export default class Gallery extends Component {
  state = {}
  meta = {}

  render = () => {

    const tiles = flat.find(link => link.id === this.props.page).projects.map(id => ({ id, ...projects[id] }));

    return (
      <div className="gallery">
        <h1>{this.props.title}</h1>
        <div className="tiles">
          {
            tiles.map(tile => {
              return <div className="tile" key={tile.id}>
                <div className="tile-contents">
                  <img src={require(`../projects/gallery/${tile.pic}`)} />
                  { tile.title ? <div className="title">{tile.title}</div> : null }
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