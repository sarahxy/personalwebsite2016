import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import $ from 'jquery';
import _ from 'lodash';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render () {

    return (
      <div className="page page--home">
        <Helmet
          title={config.siteTitle}
        />
        <div className="grid">
          <div className="page__title">
            Home
          </div>
          { peopleElements }
        </div>
      </div>
    );
  }
}
