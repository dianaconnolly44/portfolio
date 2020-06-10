import React, { Component } from 'react';
import { projects } from '../projects/projects';

import './Project.css';

export default class Project extends Component {
  state = {}
  meta = {}

  render = () => {
    return (
      <div className="project-wrapper">
        { projects[this.props.id].page }
      </div>
    )
  }
}