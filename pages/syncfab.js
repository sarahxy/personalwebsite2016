import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class SyncFab extends Component {
  render () {
    return (
      <div className="page page--syncfab">
        <Helmet
          title={"SyncFab"}
        />
        <div className="page__wrapper">
          <div className="page__heading"><b><em>SyncFab</em> Internship</b></div>
          <div className="page__subheading">
            <div className="page__subheading--date">June 2016 - August 2016</div>
            <div className="page__subheading--org"><a href="https://syncfab.com/" target="_blank">SyncFab</a></div>
            <div className="page__subheading--tools"><b>Tools:</b> HTML, CSS, Foundation, Prototyping</div>
          </div>
          
          <div className="content__wrapper">  
            <div className="text__wrapper">
              <div className="content__text">In the summer of 2016, I took on an UI/UX internship at SyncFab. Our student team tackled many different design challenges, from user testing to visiting local manufacturers to independently prototyping web pages in HTML and CSS Foundation.</div>

              <div className="content__text">Our work is not yet live, so please check back soon!</div>
            </div>

            <div className="icon__wrapper">
              <img src={prefixLink("/img/syncfab/syncfab.png")}/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
