import React, { Component } from 'react';
import { projects } from '../projects/projects';

import './Project.css';

export default class Project extends Component {
  state = {}
  meta = {}

  componentDidMount = () => {
    // 715 (45%), 885 (55%)
    // 1600
    const imgGroups = [...document.querySelectorAll('.imgs')];
    console.log(imgGroups);
    imgGroups.forEach(group => {
      this.getSizes([...group.querySelectorAll('img')]);
    })
  }

  getSizes = imgs => {
    const loaded = [];
    imgs.forEach(el => {
      const img = new Image();
      console.log(el.src);
      img.src = el.src;
      img.onload = e => {
        loaded.push({
          div: el.parentNode,
          el,
          w: img.width,
          h: img.height,
          equalized_w: (img.width * 1e5) / img.height
        });
        // if all loaded, do resizing
        if(loaded.length === imgs.length) this.resizeImages(loaded)
      }
    })
  }

  resizeImages = imgs => {
    const total = imgs.reduce((t, img) => img.equalized_w + t, 0);
    imgs.forEach(img => {
      img.div.style.width = (img.equalized_w * 100 / total) + '%';
      console.log(img.equalized_w, img.w, img.h, total, (img.w * 100 / total) + '%')
    })
  }

  render = () => {
    return (
      <div className="project-wrapper">
        { projects[this.props.id].page }
      </div>
    )
  }
}