import React, { Component } from 'react';
import { getClosestParent } from '../utils';
import { projects } from '../projects/projects';
import Lightbox from "react-awesome-lightbox";

import './Project.css';
import 'react-awesome-lightbox/build/style.css';

export default class Project extends Component {
  state = {}
  meta = {}

  componentDidMount = () => {
    const imgGroups = [...document.querySelectorAll('.imgs')];
    imgGroups.forEach(group => {
      this.getSizes([...group.querySelectorAll('img')]);
    })

    document.querySelector('html').scrollTop = 0;
  }

  getSizes = imgs => {
    const loaded = [];
    imgs.forEach(el => {
      const img = new Image();
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
    })
  }

  openImageSeries = e => {
    // get current image
    const curr = getClosestParent(e.target, 'img');
    if(!curr) return;
    // get all sibling images on this page
    const parent = getClosestParent(e.target, '.project');
    const images = [...parent.querySelectorAll('img:not([data-skip-gallery])')];

    const lightbox = {
    // get index of selected image
      startIndex: images.indexOf(curr)
    }
    if(images.length === 1) {
      lightbox.image = curr.getAttribute('src');
      lightbox.title = curr.getAttribute('title') || curr.getAttribute('alt');
    } else {
      lightbox.images = images.map(img => ({
        url: img.getAttribute('src'),
        title: img.getAttribute('title') || img.getAttribute('alt')
      }))
    }
    this.setState({ lightbox });
  }

  render = () => {
    const Page = projects[this.props.id].page;
    return (
      <div className="project-wrapper">
        { 
          this.state.lightbox && 
          <Lightbox 
            {...this.state.lightbox} 
            onClose={e => this.setState({ lightbox: null })} 
            allowRotate={false}
            allowReset={false}
            zoomStep={.5}
          /> 
        }
        { <Page open={this.openImageSeries} /> }
      </div>
    )
  }
}