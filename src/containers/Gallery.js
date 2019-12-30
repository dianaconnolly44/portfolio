import React, { Component } from 'react';
import { flat } from '../projects/menu';

export default class Gallery extends Component {
  state = {}
  meta = {}

  render = () => {

    const tiles = flat.find(link => link.id === this.props.page).projects;
    console.log(flat, this.props.page)

    return (
      <div className="gallery">
        <h1>{this.props.title}</h1>
        gallery images go here. <br />
        Items include { tiles.join(', ')}
      </div>
    )
  }
}