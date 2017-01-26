import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class FoodQuest extends Component {
  render () {
    return (
      <div className="page page--foodquest">
        <Helmet
          title={"Food Quest"}
        />
        <div className="page__wrapper">
          <div className="page__heading"><b><em>Food Quest</em></b></div>
          <div className="page__subheading">
            <div className="page__subheading--date">January 2017 - </div>
            <div className="page__subheading--org">Personal Project</div>
            <div className="page__subheading--tools">Mobile UI Design, Interactive Prototype, Framer.js</div>
          {/*
            <a href="" target="_blank">
              <div className="button">COMING SOON</div>
            </a>
          */}
          </div>
          
          <div className="content__wrapper">  
            <div className="text__wrapper">
              <div className="content__text">COMING SOON</div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}
