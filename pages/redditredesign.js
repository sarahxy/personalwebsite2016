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
          link={[
              {"rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Carrois+Gothic|Sail"},
          ]}
        />
        <div className="page__wrapper">
          <div className="content__heading"><b><em>Reddit</em>  Redesign</b></div>
          
          <div className="content__wrapper">  
            <div className="text__wrapper">
              <div className="content__text">The redesign of the Reddit homepage was a Web Design Decal assignment given in Fall 2015 at UC Berkeley. Reddit is one of the most popular sites on the Internet, but it is infamous for its somewhat unaesthetic design. Because I had just taken a design class at Berkeley over the summer, I did not immediately jump into the project like so many other groups -- especially since I had never used Reddit before -- but instead asked each one of my group members to interview their friends who used Reddit regularly on what they liked and disliked about the site.</div>

              <div className="content__text">Our general findings from our very brief user research showed that our pool of interviewees (mainly friends) went on Reddit primarily to read. As a result, while they admitted the overall layout was unappealing, the users liked the fact that they could skim quickly through noteworthy titles of the day on the site in order to choose what they would read.</div>

              <div className="content__text">In our design, we sought to simplify the Reddit layout as much as time permitted, make the overall aesthetic of the site more appealing, yet retain the text-friendly aspect of the site that so many users enjoyed. Our project was selected as one of the best-designed websites in the decal among the other group projects.</div>

              <a href="https://github.com/sarahxy/redditredesign" target="_blank">
                <div className="content__button">View Code</div>
              </a>
            </div>

            <div className="images__wrapper">
              <div className="image__wrapper">
                <img src={prefixLink("/img/redesign/redditredesign_home_screen.png")}/>
                <em>redesigned home page</em>
              </div>
              <div className="image__wrapper">
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
