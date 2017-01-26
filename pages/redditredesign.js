import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class RedditRedesign extends Component {
  render () {
    return (
      <div className="page page--redditredesign">
        <Helmet
          title={"Reddit Redesign"}
        />
        <div className="page__wrapper">
          <div className="page__heading"><b><em>Reddit</em>  Redesign</b></div>

          <div className="page__subheading">
            <div className="page__subheading--date">September 2015 - December 2015</div>
            <div className="page__subheading--org"><a href="wdd.io" target="_blank">Web Design Decal</a></div>
            <div className="page__subheading--tools"><b>Tools:</b> HTML, CSS, Prototyping</div>
            <a href="https://github.com/sarahxy/redditredesign" target="_blank">
              <div className="button">View Code</div>
            </a>
          </div>
          
          <div className="rr__content__wrapper">  
            <div className="rr__text__wrapper">
              <div className="rr__content__text">The redesign of the <a href="https://www.reddit.com/" target="_blank">Reddit</a> homepage was a Web Design Decal assignment given in Fall 2015 at UC Berkeley. Reddit is one of the most popular sites on the Internet, but it is infamous for its somewhat unaesthetic design. Because I had just taken a design class at Berkeley over the summer, I did not immediately jump into the project like so many other groups -- especially since I had never used Reddit before -- but instead, took the initiative to interview my friends, who did use Reddit regularly, on what they liked and disliked about the site. I asked each one of my group members to do the same.</div>

              <div className="rr__content__text">Our general findings from our very brief user research showed that our pool of interviewees (mainly friends) went on Reddit primarily to read. As a result, while they admitted the overall layout of the original site was unappealing, the users liked the fact that they could skim quickly through noteworthy titles of the day on the site in order to choose what they would read.</div>

              <div className="rr__content__text">In our design, we sought to simplify the Reddit layout as much as time permitted, make the overall aesthetic of the site more appealing, yet retain the text-friendly aspect of the site that so many users enjoyed. Our project was selected as one of the best-designed websites in the decal among the other group projects.</div>
            </div>

            <div className="rr__images__wrapper">
              <div className="rr__image__wrapper">
                <img src={prefixLink("/img/redesign/redditredesign_home_screen.png")}/>
                <em>redesigned home page</em>
              </div>
              <div className="rr__image__wrapper">
                <img src={prefixLink("/img/redesign/redditredesign_list_screen.png")}/>
                <em>redesigned search results page</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
