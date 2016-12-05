import React, { Component, PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import 'css/_index.scss';

export default class Template extends Component {
  render () {
    return (
      <div>
        <Headroom>
          <div className="navbar">
            <div className="navbar__link--logo">
              <Link
                to={prefixLink('/')} className="logo"
              >
                <img src={prefixLink("/img/sarah-logo.png")}/>
              </Link>
            </div>

            <div className="navbar__link--wrapper">
              <Link
                to={prefixLink('/portfolio/')} className="navbar__link"
              >
                Portfolio
              </Link>
            </div>
            <div className="navbar__link--wrapper">
                <Link
                  to={prefixLink('/contact/')} className="navbar__link"
                >
                  Contact
                </Link>
            </div>
          </div>
        </Headroom>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.any
};

