import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="page page--index">
        <Helmet
          title={config.siteTitle}
        />
        <div className="page--header">
          {/*<img src={ prefixLink("/img/myface.png") } />*/}
          <div className="page--header--name">Sarah Huang</div>
        </div>

        <div className="portfolio__wrapper">
          <div className="work work--1">
            <div className="work--text"><b><em>Hagglebuddy</em></b> // Android app</div>
          </div>
          <div className="work work--2">
            <div className="work--text"><b><em>Reddit</em> Redesign</b> // web</div>
          </div>
          <div className="work work--3">
            <div className="work--text"><b>WDD Final Project</b> // web</div>
          </div>
          <div className="work work--4">
            <div className="work--text"><b><em>away</em></b> // prototyping</div>
          </div>
          <div className="work work--5">
            <div className="work--text"><b>Web Design Decal</b> // teaching</div>
          </div>
          <div className="work work--6">
            <div className="work--text"><b>SyncFab</b> // internship</div>
          </div>
          <div className="work work--7">
            <div className="work--text"><b>Miscellaneous</b> // Photoshop & Illustrator</div>
          </div>

        </div>
      </div>
    );
  }
}
