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
            

            <div className="navbar__link--wrapper">
              <Link
                to={prefixLink('/')} className="navbar__link">
                Portfolio
              </Link>
            </div>
            <div className="navbar__link--logo">
              <Link
                to={prefixLink('/')} className="logo">
                <img src={prefixLink("/img/sarah-logo.png")}/>
              </Link>
            </div>
            <div className="navbar__link--wrapper">
                <Link
                  to={prefixLink('/about/')} className="navbar__link">
                  About Me
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

