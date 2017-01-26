import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Website extends Component {
  render () {
    return (
      <div className="page page--website">
        <Helmet
          title={"Personal Website"}
        />
        <div className="page__wrapper">
          <div className="page__heading"><b>Personal Website</b></div>
          <div className="page__subheading">
            <div className="page__subheading--date">September 2015 - December 2015</div>
            <div className="page__subheading--org"><a href="wdd.io" target="_blank">Web Design Decal</a></div>
            <div className="page__subheading--tools"><b>Tools:</b> HTML, CSS, JQuery</div>
            <a href="https://github.com/sarahxy/personalwebsite2015" target="_blank">
              <div className="button">View Code</div>
            </a>
          </div>
          
          <div className="content__wrapper">  
            <div className="text__wrapper">
              <div className="content__text">I created a personal website for my final project in the Web Design Decal (WDD). The website was selected as one of the top 20 best-designed websites out of the 80+ total student projects.</div>

              <div className="content__text">I played with different shades of blue off a serene image of birds flying through the sky for my color palette. For the navigation through the different sections of the page, I coded a "sticky" navigation bar that initially rested at the bottom of the page, but would fix itself at the top of the page once a user scrolled down past the first section for easy access. Clicking the different links would jump to the different sections below.</div>

            </div>

            <div className="image__wrapper">
              <img src={prefixLink("/img/personalwebsite.png")}/>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
