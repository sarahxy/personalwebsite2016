import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class IRC extends Component {
  render () {
    return (
      <div className="page page--irc">
        <Helmet
          title={"International Relations Council"}
        />
        <div className="page__wrapper">
          <div className="page__heading"><b>International Relations Council (IRC) Website</b></div>

          <div className="page__subheading">
            <div className="page__subheading--date">September 2016 - November 2016</div>
            <div className="page__subheading--org"><a href="http://innovativedesign.club/" target="_blank">Innovative Design Club</a></div>
            <div className="page__subheading--tools"><b>Tools:</b> HTML, CSS/SASS, React</div>
            <a href="https://github.com/InnoD-WebTier/irc" target="_blank">
              <div className="button">View Code</div>
            </a>
          </div>

          <div className="content__wrapper">  
            <div className="text__wrapper">
              <div className="content__text">The International Relations Council (IRC) at UC Berkeley reached out to our Innovative Design web development tier for a website for their student group. Over the course of a semester, we took in the student group's requests and collectively, our team constructed the website.</div>
            </div>

            <div className="image__wrapper">
              <img src={prefixLink("/img/irc/irc_review.png")}/>
            </div>

            <div className="text__wrapper">
              <div className="content__text">Our team used <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a> to help us develop in HTML, SASS, and a React framework. We also implemented Airbnb's CSS / Sass <a href="https://github.com/airbnb/css" target="_blank">style guide</a> to guide our naming conventions and page structure. We opted for a clean and minimalist interface with simple navigation across and within the different pages.</div>
              <div className="content__text">Within our tier, I coded the column structure in Sass that served as the template for the other team members to use in their own page design. I also designed the "Review" page (above), and helped the other tier members in developing their individual page assignments.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
